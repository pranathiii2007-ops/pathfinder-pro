import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/career-chat`;

// Parse [OPTION: ...] from assistant message
function parseOptions(content: string): { text: string; options: string[] } {
  const optionRegex = /\[OPTION:\s*(.+?)\]/g;
  const options: string[] = [];
  let match;
  while ((match = optionRegex.exec(content)) !== null) {
    options.push(match[1].trim());
  }
  const text = content.replace(/\[OPTION:\s*.+?\]/g, "").trim();
  return { text, options };
}

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (t: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({ error: "Request failed" }));
    onError(err.error || "Something went wrong");
    return;
  }

  if (!resp.body) {
    onError("No response stream");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;

  while (!done) {
    const { done: d, value } = await reader.read();
    if (d) break;
    buf += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { done = true; break; }
      try {
        const parsed = JSON.parse(json);
        const c = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (c) onDelta(c);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }

  if (buf.trim()) {
    for (let raw of buf.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (!raw.startsWith("data: ")) continue;
      const json = raw.slice(6).trim();
      if (json === "[DONE]") continue;
      try {
        const p = JSON.parse(json);
        const c = p.choices?.[0]?.delta?.content;
        if (c) onDelta(c);
      } catch {}
    }
  }

  onDone();
}

export default function CareerQuiz() {
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sendingRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const startConversation = () => {
    setStarted(true);
    setMessages([]);
    setError(null);
    sendMessage("Hi, I need help choosing a career!", true);
  };

  const sendMessage = async (text: string, isStart = false) => {
    if (!text.trim() || isLoading || sendingRef.current) return;
    sendingRef.current = true;
    setError(null);
    const userMsg: Msg = { role: "user", content: text.trim() };
    const prev = isStart ? [] : messages;
    setMessages([...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((p) => {
        const last = p[p.length - 1];
        if (last?.role === "assistant") {
          return p.map((m, i) => (i === p.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...p, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...prev, userMsg],
        onDelta: upsert,
        onDone: () => { setIsLoading(false); sendingRef.current = false; },
        onError: (msg) => { setError(msg); setIsLoading(false); sendingRef.current = false; },
      });
    } catch {
      setError("Connection failed. Please try again.");
      setIsLoading(false);
      sendingRef.current = false;
    }
  };

  const handleOptionClick = (option: string) => {
    sendMessage(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Get options only from the LAST assistant message (and only when not loading)
  const lastAssistantMsg = [...messages].reverse().find((m) => m.role === "assistant");
  const lastOptions = !isLoading && lastAssistantMsg ? parseOptions(lastAssistantMsg.content).options : [];

  if (!started) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI Career <span className="text-gradient-primary">Guide</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                Answer a few quick questions and get personalized career recommendations powered by AI.
              </p>
              <Button size="lg" onClick={startConversation} className="gradient-primary text-primary-foreground gap-2 px-8">
                <Sparkles className="w-5 h-5" /> Start Career Discovery
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 flex flex-col max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-sm">PathFinder AI</h2>
              <p className="text-xs text-muted-foreground">Career Counselor</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={startConversation} className="gap-1.5 text-muted-foreground">
            <RotateCcw className="w-4 h-4" /> Restart
          </Button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          <AnimatePresence>
            {messages.map((msg, i) => {
              const isAssistant = msg.role === "assistant";
              const { text, options } = isAssistant ? parseOptions(msg.content) : { text: msg.content, options: [] };
              const isLastAssistant = isAssistant && i === messages.length - 1;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className="max-w-[80%] space-y-3">
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        isAssistant
                          ? "bg-muted text-foreground rounded-bl-md"
                          : "bg-primary text-primary-foreground rounded-br-md"
                      }`}
                    >
                      {isAssistant ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:mb-2 [&>ul]:mb-2 [&>ol]:mb-2 [&>p:last-child]:mb-0">
                          <ReactMarkdown>{text}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>

                    {/* Render clickable options only for the last assistant message when not loading */}
                    {isLastAssistant && !isLoading && options.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-wrap gap-2"
                      >
                        {options.map((opt, oi) => (
                          <button
                            key={oi}
                            onClick={() => handleOptionClick(opt)}
                            className="text-sm px-4 py-2.5 rounded-xl border-2 border-primary/20 bg-primary/5 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 font-medium text-left"
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </motion.div>
          )}

          {error && (
            <div className="text-center text-sm text-destructive bg-destructive/10 rounded-lg py-2 px-4">
              {error}
            </div>
          )}
        </div>

        {/* Input — still available for typing custom answers */}
        <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-border">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lastOptions.length > 0 ? "Pick an option above or type your own..." : "Type your answer..."}
              disabled={isLoading}
              className="flex-1 h-11 rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            />
            <Button type="submit" disabled={isLoading || !input.trim()} size="icon" className="h-11 w-11 rounded-xl gradient-primary">
              <Send className="w-4 h-4 text-primary-foreground" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
