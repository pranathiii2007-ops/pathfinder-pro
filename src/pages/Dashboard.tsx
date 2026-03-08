import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Briefcase, Heart, TrendingUp, ArrowRight, Check, Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { usePreferences } from "@/hooks/usePreferences";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const stages = [
  {
    title: "After 10th",
    description: "Explore streams — MPC, BiPC, Commerce, Arts, Diploma & more",
    icon: GraduationCap,
    href: "/streams",
    color: "gradient-primary",
  },
  {
    title: "After Intermediate",
    description: "Engineering branches, Medical, CA, Law & specializations",
    icon: BookOpen,
    href: "/intermediate",
    color: "gradient-secondary",
  },
  {
    title: "B.Tech / Degree",
    description: "Career roles, government jobs, internships & higher studies",
    icon: Briefcase,
    href: "/btech",
    color: "gradient-accent",
  },
];

const quickLinks = [
  { title: "Career Paths", icon: TrendingUp, href: "/careers" },
  { title: "Internships", icon: Briefcase, href: "/internships" },
  { title: "Saved Careers", icon: Heart, href: "/careers" },
];

const streamOptions = ["Science (MPC)", "Science (BiPC)", "Commerce", "Arts", "Diploma"];
const academicStageOptions = ["After 10th", "After Intermediate", "B.Tech / Degree", "Post Graduation"];

export default function Dashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const { preferences, isLoading: prefLoading, savePreferences } = usePreferences();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (preferences) {
      setSelectedStream(preferences.selected_stream);
      setSelectedStage(preferences.academic_stage);
    }
  }, [preferences]);

  const handleSavePreferences = async () => {
    setSaving(true);
    await savePreferences({ selected_stream: selectedStream, academic_stage: selectedStage });
    toast({ title: "Preferences saved!", description: "Your academic preferences have been updated." });
    setSaving(false);
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="text-gradient-primary">{user.name || "Student"}</span>! 👋
          </h1>
          <p className="text-muted-foreground text-lg">Where are you right now in your academic journey?</p>
        </motion.div>

        {/* Preferences Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 bg-card rounded-xl p-6 border border-border">
          <h2 className="text-xl font-bold mb-4">Your Preferences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Academic Stage</p>
              <div className="flex flex-wrap gap-2">
                {academicStageOptions.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      selectedStage === stage
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border text-foreground hover:border-primary/50"
                    }`}
                  >
                    {selectedStage === stage && <Check className="w-3.5 h-3.5 inline mr-1" />}
                    {stage}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Selected Stream</p>
              <div className="flex flex-wrap gap-2">
                {streamOptions.map((stream) => (
                  <button
                    key={stream}
                    onClick={() => setSelectedStream(stream)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      selectedStream === stream
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border text-foreground hover:border-primary/50"
                    }`}
                  >
                    {selectedStream === stream && <Check className="w-3.5 h-3.5 inline mr-1" />}
                    {stream}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Button
            onClick={handleSavePreferences}
            disabled={saving}
            className="mt-4 gradient-primary text-primary-foreground gap-2"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
            Save Preferences
          </Button>
        </motion.div>

        {/* Stage Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stages.map((stage, i) => (
            <motion.div key={stage.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <Link to={stage.href}>
                <div className="group bg-card rounded-xl p-8 border border-border hover-lift h-full text-center">
                  <div className={`w-16 h-16 rounded-2xl ${stage.color} flex items-center justify-center mx-auto mb-4`}>
                    <stage.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{stage.description}</p>
                  <div className="flex items-center justify-center text-primary text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-xl font-bold mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.href}>
                <div className="bg-card rounded-lg p-4 border border-border hover-lift flex items-center gap-3">
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">{link.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}