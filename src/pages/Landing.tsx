import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Footprints, GraduationCap, BookOpen, Sparkles, Briefcase, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { useFavorites } from "@/hooks/useFavorites";
import { usePreferences } from "@/hooks/usePreferences";
import { liveInternships } from "@/data/internships";

const stages = [
  { title: "After 10th", desc: "Choose your stream — Science, Commerce, Arts, or Diploma", icon: GraduationCap, href: "/streams", color: "gradient-primary" },
  { title: "After Intermediate", desc: "Branches, specializations & entrance exams", icon: BookOpen, href: "/intermediate", color: "gradient-secondary" },
];

const streamToCareerTags: Record<string, string[]> = {
  "MPC": ["cse", "data-science", "ai-ml", "mechanical", "ece", "civil"],
  "PCM": ["cse", "data-science", "ai-ml", "mechanical", "ece", "civil"],
  "BiPC": ["medicine", "pharmacy", "biotech", "nursing", "psychology"],
  "PCB": ["medicine", "pharmacy", "biotech", "nursing", "psychology"],
  "CEC": ["ca", "cs", "cma", "finance", "law"],
  "Commerce": ["ca", "cs", "cma", "finance", "mba"],
  "MEC": ["ca", "cs", "cma", "finance", "mba"],
  "HEC": ["mba", "hotel-management", "journalism"],
  "Arts": ["law", "journalism", "psychology", "design"],
  "Vocational": ["design", "interior-design", "hotel-management"],
};

export default function Landing() {
  const { user } = useAuth();
  const { favorites } = useFavorites();
  const { preferences } = usePreferences();

  const recommendedInternships = useMemo(() => {
    if (!user) return [];
    const tags = new Set<string>();
    favorites.forEach(id => tags.add(id));
    if (preferences?.selected_stream) {
      const st = streamToCareerTags[preferences.selected_stream];
      if (st) st.forEach(t => tags.add(t));
    }
    if (tags.size === 0) return [];
    return liveInternships
      .map(i => ({ internship: i, score: i.tags.filter(t => tags.has(t)).length }))
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(s => s.internship);
  }, [user, favorites, preferences]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Every Future Begins
              <span className="text-gradient-primary block">With The Right Step</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            >
              Guided career discovery for students — from choosing your stream after 10th to landing your dream career.
            </motion.p>

          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            Where Are You <span className="text-gradient-primary">Right Now?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={stage.href}>
                  <div className="group bg-card rounded-xl p-6 border border-border hover-lift h-full text-center">
                    <div className={`w-14 h-14 rounded-xl ${stage.color} flex items-center justify-center mx-auto mb-4`}>
                      <stage.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{stage.title}</h3>
                    <p className="text-muted-foreground text-sm">{stage.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Recommendations for logged-in users */}
      {user && recommendedInternships.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Recommended For You</h2>
              </div>
              <Link to="/recommendations">
                <Button variant="outline" size="sm" className="gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {recommendedInternships.map((item, i) => (
                <motion.div
                  key={item.title + item.company}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-5 border-2 border-accent/20 hover-lift relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-accent/10 text-accent text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">⭐ FOR YOU</div>
                  <h3 className="text-base font-bold mb-1">{item.title}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{item.company}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{item.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{item.duration}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{item.stipend}</span>
                  </div>
                  <a href={item.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gradient-primary text-primary-foreground gap-1 text-xs h-8">
                      Apply Now <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {user ? (
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-95" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center text-primary-foreground"
            >
              <h2 className="text-3xl font-bold mb-4">About PathFinder</h2>
              <p className="text-lg opacity-90">
                PathFinder is a guided career discovery platform built for Indian students. We help you navigate every milestone — from choosing your stream after 10th, to picking the right branch after Intermediate, to landing internships and building your dream career. Your journey, simplified.
              </p>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-95" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center text-primary-foreground"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Shape Your Future?</h2>
              <p className="text-lg opacity-90 mb-8">Create a free profile to save your progress and get personalized guidance.</p>
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="gap-2 px-8">
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-10 bg-card border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Footprints className="w-5 h-5 text-primary" />
            <span className="font-bold">PathFinder</span>
          </div>
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} PathFinder. Empowering informed career choices.</p>
        </div>
      </footer>
    </div>
  );
}
