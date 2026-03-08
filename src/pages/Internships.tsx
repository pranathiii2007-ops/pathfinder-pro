import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Briefcase, Clock, MapPin, ExternalLink, Rocket, GraduationCap, FileText, CheckCircle2, Target, X, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { liveInternships, type Internship } from "@/data/internships";
import { useFavorites } from "@/hooks/useFavorites";
import { usePreferences } from "@/hooks/usePreferences";
import { useAuth } from "@/hooks/useAuth";

const roadmapSteps = [
  { step: 1, title: "Choose Your Career Role", description: "Identify 2-3 career roles you're interested in (e.g., Software Engineer, Data Scientist)", icon: Target },
  { step: 2, title: "Learn Required Skills", description: "Master the key skills for your chosen role through online courses and self-study", icon: GraduationCap },
  { step: 3, title: "Build Mini Projects", description: "Create 3-5 projects showcasing your skills. Host on GitHub. Document everything.", icon: FileText },
  { step: 4, title: "Prepare Your Resume", description: "Create an ATS-friendly resume highlighting projects, skills, and education", icon: FileText },
  { step: 5, title: "Apply on Platforms", description: "Apply strategically on Internshala, LinkedIn, company career pages, and AICTE portal", icon: ExternalLink },
  { step: 6, title: "Track Applications", description: "Keep a tracker for all applications — company, role, status, follow-up dates", icon: CheckCircle2 },
];

const platforms = [
  { name: "Internshala", description: "India's largest internship platform — filter by location, stipend, duration", url: "https://internshala.com", tag: "Most Popular" },
  { name: "LinkedIn", description: "Professional networking + job board — great for referrals", url: "https://linkedin.com/jobs", tag: "Networking" },
  { name: "AICTE Internship Portal", description: "Government-backed internship opportunities for engineering students", url: "https://internship.aicte-india.org", tag: "Government" },
  { name: "Unstop (formerly D2C)", description: "Competitions, hackathons, and internship opportunities", url: "https://unstop.com", tag: "Competitions" },
  { name: "Naukri.com", description: "One of India's biggest job portals with internship listings", url: "https://www.naukri.com/internship-jobs", tag: "Jobs" },
  { name: "AngelList / Wellfound", description: "Startup-focused job board — find roles at innovative startups", url: "https://wellfound.com", tag: "Startups" },
];

const careerLabels: Record<string, string> = {
  cse: "Software Engineering",
  "data-science": "Data Science",
  "ai-ml": "AI/ML",
  medicine: "Medicine",
  ca: "Chartered Accountancy",
  law: "Law",
  finance: "Finance",
  mechanical: "Mechanical Engineering",
  ece: "Electronics & Communication",
  civil: "Civil Engineering",
  biotech: "Biotechnology",
  psychology: "Psychology",
  journalism: "Journalism",
  pharmacy: "Pharmacy",
  architecture: "Architecture",
  mba: "MBA / Management",
  cs: "Company Secretary",
  cma: "CMA",
  nursing: "Nursing",
  design: "Design",
  automobile: "Automobile Engineering",
  aerospace: "Aerospace Engineering",
  "hotel-management": "Hotel Management",
  aviation: "Aviation",
  "interior-design": "Interior Design",
  "cloud-devops": "Cloud/DevOps",
  "cyber-security": "Cyber Security",
};

// Stream-based groupings for filter
const streamFilters: { label: string; careers: string[] }[] = [
  { label: "Software / IT", careers: ["cse", "cloud-devops", "cyber-security"] },
  { label: "Data Science / AI", careers: ["data-science", "ai-ml"] },
  { label: "Engineering (Core)", careers: ["mechanical", "ece", "civil", "automobile", "aerospace"] },
  { label: "Medicine / Health", careers: ["medicine", "pharmacy", "biotech", "nursing", "psychology"] },
  { label: "Commerce / Finance", careers: ["ca", "cs", "cma", "finance"] },
  { label: "Management / MBA", careers: ["mba", "hotel-management"] },
  { label: "Design / Media", careers: ["design", "interior-design", "journalism"] },
  { label: "Law", careers: ["law"] },
  { label: "Aviation", careers: ["aviation"] },
  { label: "Architecture", careers: ["architecture"] },
];

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

export default function Internships() {
  const [searchParams, setSearchParams] = useSearchParams();
  const careerFilter = searchParams.get("career");
  const [searchQuery, setSearchQuery] = useState("");
  const [streamFilter, setStreamFilter] = useState("all");

  const filteredInternships = liveInternships.filter(i => {
    if (careerFilter && !i.tags.includes(careerFilter)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      if (!i.title.toLowerCase().includes(q) && !i.company.toLowerCase().includes(q)) return false;
    }
    if (streamFilter !== "all") {
      const stream = streamFilters.find(s => s.label === streamFilter);
      if (stream && !i.tags.some(t => stream.careers.includes(t))) return false;
    }
    return true;
  });

  const clearAllFilters = () => {
    setSearchParams({});
    setSearchQuery("");
    setStreamFilter("all");
  };

  const hasActiveFilters = !!careerFilter || !!searchQuery || streamFilter !== "all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" /> Internship System
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Internship</span> Discovery & Roadmap
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Find live internships, follow the roadmap, and explore top platforms to land your dream internship.
            </p>
          </motion.div>

          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="listings">💼 Live Internships</TabsTrigger>
              <TabsTrigger value="roadmap">🗺️ Roadmap</TabsTrigger>
              <TabsTrigger value="platforms">🌐 Platforms</TabsTrigger>
            </TabsList>

            <TabsContent value="listings">
              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-6 items-center">
                <div className="relative flex-1 min-w-[200px] max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by role or company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={streamFilter} onValueChange={setStreamFilter}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Stream" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Streams</SelectItem>
                    {streamFilters.map(s => (
                      <SelectItem key={s.label} value={s.label}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters} className="gap-1 text-muted-foreground">
                    <X className="w-3.5 h-3.5" /> Clear All
                  </Button>
                )}
              </div>

              {careerFilter && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-6 justify-center">
                  <span className="text-sm text-muted-foreground">Filtered by career:</span>
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                    {careerLabels[careerFilter] || careerFilter}
                    <button onClick={() => setSearchParams({})} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                </motion.div>
              )}

              <p className="text-sm text-muted-foreground mb-4">{filteredInternships.length} internship{filteredInternships.length !== 1 ? 's' : ''} found</p>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredInternships.map((item, i) => (
                  <motion.div key={item.title + item.company} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{item.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{item.duration}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{item.stipend}</span>
                    </div>
                    <a href={item.applyUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gradient-primary text-primary-foreground gap-1">
                        Apply Now <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  </motion.div>
                ))}
                {filteredInternships.length === 0 && (
                  <div className="col-span-2 text-center py-12 text-muted-foreground">
                    <p className="text-lg mb-2">No internships found matching your filters.</p>
                    <Button variant="outline" onClick={clearAllFilters}>Clear All Filters</Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="roadmap">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Internship Roadmap</h2>
                <div className="space-y-4">
                  {roadmapSteps.map((item, i) => (
                    <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                          {item.step}
                        </div>
                        {i < roadmapSteps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                      </div>
                      <div className="pb-8">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="platforms">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((platform, i) => (
                  <motion.div key={platform.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="bg-card rounded-xl p-6 border border-border hover-lift h-full">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{platform.tag}</span>
                        <h3 className="font-bold text-lg mt-3 mb-2">{platform.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{platform.description}</p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Visit Platform <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
