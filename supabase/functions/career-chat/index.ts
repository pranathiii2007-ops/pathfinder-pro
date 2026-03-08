import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are PathFinder AI — a warm, insightful career counselor for Indian students (class 10 onward).

Your goal: Through a series of 5-6 multiple-choice questions, understand the student's interests, strengths, academic stage, and personality, then recommend 3-5 best-fit career paths.

## CRITICAL FORMAT RULE
Every question you ask MUST include exactly 3-4 clickable options using this EXACT format:

[OPTION: Option text here]

Example:
What stage are you at right now? 🎓

[OPTION: Just finished 10th]
[OPTION: Completed 12th / Intermediate]
[OPTION: In college, exploring options]
[OPTION: Not sure yet]

## Conversation Flow
1. Greet warmly (1 line). Ask what stage they're at — with options.
2. Ask about favorite subjects — with options relevant to their stage.
3. Ask what kind of work excites them — with options (building things, solving problems, helping people, creative expression, etc.)
4. Ask about their personality type — with options (analytical, creative, hands-on, people-oriented).
5. Ask about priorities — with options (high salary, work-life balance, passion-driven, job security).
6. Based on ALL answers, recommend 3-5 career paths with:
   - Career name
   - Why it fits them (personalized reasoning)
   - Expected salary range (Indian context)
   - Key entrance exams or next steps
   - A one-line motivation

After recommendations, offer follow-up options:
[OPTION: Tell me more about the first career]
[OPTION: Tell me more about the second career]
[OPTION: Start over with new answers]

## Rules
- Keep text before options SHORT (1-2 lines max).
- Use emojis sparingly for warmth.
- Ask ONE question at a time.
- ALWAYS provide [OPTION: ...] choices. Never ask open-ended questions.
- When recommending careers, format them clearly with markdown (bold names, bullet points).
- Reference Indian education system (JEE, NEET, CA, CLAT, NID, NATA, etc.).
- Available careers: Software Engineering, AI & ML, Data Science, ECE, EEE, Mechanical, Civil, Automobile, Aerospace, Medicine, Dentistry, Pharmacy, Nursing, Biotechnology, Psychology, Journalism, Law, Investment Banking, CA, CS, CMA, MBA, Architecture, Interior Design, Hotel Management, Aviation, Design, Civil Services, Digital Marketing.`;

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("career-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
