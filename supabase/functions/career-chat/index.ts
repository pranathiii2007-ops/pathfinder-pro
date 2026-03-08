import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are PathFinder AI — a warm, insightful career counselor for Indian students (class 10 onward).

Your goal: Through a natural conversation (4-6 questions), understand the student's interests, strengths, academic stage, and personality, then recommend 3-5 best-fit career paths.

## Conversation Flow
1. Greet warmly. Ask what stage they're at (after 10th, after 12th/Intermediate, or college).
2. Ask about their favorite subjects and what excites them.
3. Ask about their skills — are they creative, analytical, hands-on, or people-oriented?
4. Ask about their preferences — work-life balance, salary expectations, passion vs stability.
5. Based on answers, recommend 3-5 career paths with:
   - Career name
   - Why it fits them (personalized reasoning)
   - Expected salary range (Indian context)
   - Key entrance exams or next steps
   - A one-line motivation

## Rules
- Keep responses concise and engaging (not walls of text).
- Use emojis sparingly for warmth.
- Ask ONE question at a time to keep it conversational.
- When recommending careers, format them clearly with markdown.
- Reference Indian education system (JEE, NEET, CA, CLAT, NID, NATA, etc.).
- After giving recommendations, ask if they want to dive deeper into any specific career.
- Available careers to recommend from: Software Engineering, AI & ML, Data Science, ECE, EEE, Mechanical, Civil, Automobile, Aerospace, Medicine, Dentistry, Pharmacy, Nursing, Biotechnology, Psychology, Journalism, Law, Investment Banking, CA, CS, CMA, MBA, Architecture, Interior Design, Hotel Management, Aviation, Design, Civil Services, Digital Marketing.`;

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
