import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Sparkles, Briefcase, Clock, MapPin, ExternalLink, ArrowRight, Heart, TrendingUp, IndianRupee, GraduationCap, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { liveInternships } from "@/data/internships";
import { useFavorites } from "@/hooks/useFavorites";
import { usePreferences } from "@/hooks/usePreferences";
import { useAuth } from "@/hooks/useAuth";

// Map user stream preferences to career tags
const streamToCareerTags: Record<string, string[]> = {
  "MPC": ["cse", "data-science", "ai-ml", "mechanical", "ece", "civil", "automobile", "aerospace", "architecture"],
  "PCM": ["cse", "data-science", "ai-ml", "mechanical", "ece", "civil", "automobile", "aerospace", "architecture"],
  "BiPC": ["medicine", "pharmacy", "biotech", "nursing", "psychology"],
  "PCB": ["medicine", "pharmacy", "biotech", "nursing", "psychology"],
  "CEC": ["ca", "cs", "cma", "finance", "law"],
  "Commerce": ["ca", "cs", "cma", "finance", "mba"],
  "MEC": ["ca", "cs", "cma", "finance", "mba"],
  "HEC": ["mba", "hotel-management", "journalism"],
  "Arts": ["law", "journalism", "psychology", "design"],
  "Vocational": ["design", "interior-design", "hotel-management"],
};

const careerSuggestions: Record<string, { name: string; id: string; salary: string; growth: string }[]> = {
  "MPC": [
    { name: "Software Engineering", id: "cse", salary: "₹8-25 LPA", growth: "22%" },
    { name: "Data Science", id: "data-science", salary: "₹10-30 LPA", growth: "28%" },
    { name: "AI/ML Engineering", id: "ai-ml", salary: "₹10-35 LPA", growth: "30%" },
  ],
  "PCM": [
    { name: "Software Engineering", id: "cse", salary: "₹8-25 LPA", growth: "22%" },
    { name: "Mechanical Engineering", id: "mechanical", salary: "₹5-15 LPA", growth: "8%" },
    { name: "Aerospace Engineering", id: "aerospace", salary: "₹5-45 LPA", growth: "18%" },
  ],
  "BiPC": [
    { name: "Medicine (MBBS)", id: "medicine", salary: "₹10-50 LPA", growth: "15%" },
    { name: "Biotechnology", id: "biotech", salary: "₹5-18 LPA", growth: "18%" },
    { name: "Pharmacy", id: "pharmacy", salary: "₹4-20 LPA", growth: "14%" },
  ],
  "PCB": [
    { name: "Medicine (MBBS)", id: "medicine", salary: "₹10-50 LPA", growth: "15%" },
    { name: "Nursing", id: "nursing", salary: "₹3-15 LPA", growth: "18%" },
    { name: "Psychology", id: "psychology", salary: "₹4-15 LPA", growth: "20%" },
  ],
  "CEC": [
    { name: "Chartered Accountancy", id: "ca", salary: "₹8-30 LPA", growth: "10%" },
    { name: "Law", id: "law", salary: "₹5-30 LPA", growth: "10%" },
    { name: "Company Secretary", id: "cs", salary: "₹6-25 LPA", growth: "10%" },
  ],
  "Commerce": [
    { name: "Chartered Accountancy", id: "ca", salary: "₹8-30 LPA", growth: "10%" },
    { name: "Investment Banking", id: "finance", salary: "₹12-50 LPA", growth: "15%" },
    { name: "MBA / Management", id: "mba", salary: "₹10-40 LPA", growth: "15%" },
  ],
  "MEC": [
    { name: "Chartered Accountancy", id: "ca", salary: "₹8-30 LPA", growth: "10%" },
    { name: "CMA", id: "cma", salary: "₹6-20 LPA", growth: "10%" },
    { name: "Investment Banking", id: "finance", salary: "₹12-50 LPA", growth: "15%" },
  ],
  "HEC": [
    { name: "Hotel Management", id: "hotel-management", salary: "₹3-30 LPA", growth: "14%" },
    { name: "Journalism", id: "journalism", salary: "₹4-15 LPA", growth: "12%" },
    { name: "MBA / Management", id: "mba", salary: "₹10-40 LPA", growth: "15%" },
  ],
  "Arts": [
    { name: "Law", id: "law", salary: "₹5-30 LPA", growth: "10%" },
    { name: "Psychology", id: "psychology", salary: "₹4-15 LPA", growth: "20%" },
    { name: "Journalism", id: "journalism", salary: "₹4-15 LPA", growth: "12%" },
  ],
  "Vocational": [
    { name: "Design", id: "design", salary: "₹5-25 LPA", growth: "20%" },
    { name: "Interior Design", id: "interior-design", salary: "₹3-30 LPA", growth: "18%" },
    { name: "Hotel Management", id: "hotel-management", salary: "₹3-30 LPA", growth: "14%" },
  ],
};

export default function Recommendations() {
  const { user } = useAuth();
  const { favorites } = useFavorites();
  const { preferences } = usePreferences();

  const relevantTags = useMemo(() => {
    const tags = new Set<string>();
    favorites.forEach(id => tags.add(id));
    if (preferences?.selected_stream) {
      const streamTags = streamToCareerTags[preferences.selected_stream];
      if (streamTags) streamTags.forEach(t => tags.add(t));
    }
    return tags;
  }, [favorites, preferences]);

  const recommendedInternships = useMemo(() => {
    if (relevantTags.size === 0) return [];
    return liveInternships
      .map(i => ({ internship: i, score: i.tags.filter(t => relevantTags.has(t)).length }))
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 9)
      .map(s => s.internship);
  }, [relevantTags]);

  const recommendedCareers = useMemo(() => {
    if (preferences?.selected_stream && careerSuggestions[preferences.selected_stream]) {
      return careerSuggestions[preferences.selected_stream];
    }
    // Fallback: suggest based on favorites
    if (favorites.length > 0) return [];
    return [];
  }, [preferences, favorites]);

  const hasData = relevantTags.size > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Smart Recommendations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Personalized</span> For You
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {user
                ? "Curated careers and internships based on your interests, favorites, and selected stream."
                : "Sign in to get personalized career and internship recommendations."}
            </p>
          </motion.div>

          {!user ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto text-center bg-card rounded-2xl p-10 border border-border">
              <LogIn className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Login to Get Recommendations</h2>
              <p className="text-muted-foreground text-sm mb-6">
                We use your selected stream and favorited careers to suggest the best internships and career paths for you.
              </p>
              <div className="flex gap-3 justify-center">
                <Link to="/login"><Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="gradient-primary text-primary-foreground">Sign Up Free</Button></Link>
              </div>
            </motion.div>
          ) : !hasData ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto text-center bg-card rounded-2xl p-10 border border-border">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Set Your Preferences First</h2>
              <p className="text-muted-foreground text-sm mb-6">
                To get personalized recommendations, select your academic stream or favorite some careers from the Career Paths page.
              </p>
              <div className="flex gap-3 justify-center">
                <Link to="/streams"><Button variant="outline" className="gap-1">Choose Stream <ArrowRight className="w-4 h-4" /></Button></Link>
                <Link to="/careers"><Button className="gradient-primary text-primary-foreground gap-1">Explore Careers <Heart className="w-4 h-4" /></Button></Link>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {/* Source info */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 justify-center">
                {preferences?.selected_stream && (
                  <span className="text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full font-medium">
                    🎓 Stream: {preferences.selected_stream}
                  </span>
                )}
                {favorites.length > 0 && (
                  <span className="text-xs bg-destructive/10 text-destructive px-3 py-1.5 rounded-full font-medium">
                    ❤️ {favorites.length} Favorited Career{favorites.length !== 1 ? "s" : ""}
                  </span>
                )}
              </motion.div>

              {/* Recommended Careers */}
              {recommendedCareers.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Recommended Careers</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {recommendedCareers.map((career, i) => (
                      <motion.div key={career.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Link to={`/careers/${career.id}`}>
                          <div className="group bg-card rounded-xl p-6 border-2 border-primary/20 hover-lift h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">⭐ MATCH</div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{career.name}</h3>
                            <div className="flex items-center gap-4 mb-3">
                              <span className="flex items-center gap-1 text-sm text-success"><IndianRupee className="w-3.5 h-3.5" />{career.salary}</span>
                              <span className="flex items-center gap-1 text-sm text-primary"><TrendingUp className="w-3.5 h-3.5" />{career.growth}</span>
                            </div>
                            <div className="flex items-center text-primary text-sm font-medium">
                              View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Recommended Internships */}
              {recommendedInternships.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent" />
                      <h2 className="text-2xl font-bold">Recommended Internships</h2>
                    </div>
                    <Link to="/internships">
                      <Button variant="outline" size="sm" className="gap-1">
                        View All <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recommendedInternships.map((item, i) => (
                      <motion.div key={item.title + item.company} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border-2 border-accent/20 hover-lift relative overflow-hidden">
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
                </section>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
