import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Briefcase, Clock, MapPin, ArrowRight, Rocket, Building2, GraduationCap, FileText, ExternalLink, ChevronDown, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const internshipTypes = [
  { name: "Corporate Internships", description: "Work at top companies like Google, Amazon, Microsoft, TCS, Infosys", examples: ["Software Development", "Data Analytics", "Product Management", "Marketing"], stipend: "₹20,000-80,000/month" },
  { name: "Startup Internships", description: "High-impact roles at fast-growing startups with steep learning curves", examples: ["Full Stack Dev", "Growth Marketing", "Business Development", "UI/UX Design"], stipend: "₹10,000-40,000/month" },
  { name: "Government Internships", description: "Research & technical internships at DRDO, ISRO, BARC, PSUs", examples: ["DRDO Internship", "ISRO Project Trainee", "BHEL/NTPC Internship", "Municipal Corp Internship"], stipend: "₹8,000-25,000/month" },
  { name: "Research Internships", description: "Research at IITs, IISc, IIIT, and national labs — great for higher studies", examples: ["IIT Summer Fellowship", "IISc Summer Research", "IIIT Internship", "CSIR Labs"], stipend: "₹10,000-20,000/month" },
  { name: "Academic Internships", description: "Mandatory internships as part of B.Tech curriculum (6th/7th sem)", examples: ["Industry Training", "Mini Project", "Capstone Project", "Field Work"], stipend: "Varies" },
];

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
  { name: "LinkedIn", description: "Professional networking + job board — great for referrals", url: "https://linkedin.com", tag: "Networking" },
  { name: "AICTE Internship Portal", description: "Government-backed internship opportunities for engineering students", url: "https://internship.aicte-india.org", tag: "Government" },
  { name: "Unstop (formerly D2C)", description: "Competitions, hackathons, and internship opportunities", url: "https://unstop.com", tag: "Competitions" },
  { name: "Company Career Pages", description: "Apply directly on company websites — Google, Microsoft, Amazon, TCS, Infosys", url: "#", tag: "Direct Apply" },
  { name: "AngelList / Wellfound", description: "Startup-focused job board — find roles at innovative startups", url: "https://wellfound.com", tag: "Startups" },
];

const sampleInternships = [
  { title: "Software Development Intern", company: "Google", location: "Bangalore", duration: "3 months", stipend: "₹80,000/month", type: "Corporate" },
  { title: "Data Analyst Intern", company: "Amazon", location: "Hyderabad", duration: "6 months", stipend: "₹50,000/month", type: "Corporate" },
  { title: "ML Research Intern", company: "IIT Madras", location: "Chennai", duration: "2 months", stipend: "₹15,000/month", type: "Research" },
  { title: "Web Dev Intern", company: "Startup Hub", location: "Remote", duration: "3 months", stipend: "₹25,000/month", type: "Startup" },
  { title: "DRDO Project Trainee", company: "DRDO", location: "Delhi", duration: "6 months", stipend: "₹20,000/month", type: "Government" },
  { title: "Marketing Intern", company: "Flipkart", location: "Bangalore", duration: "2 months", stipend: "₹30,000/month", type: "Corporate" },
];

export default function Internships() {
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
              Complete guide to finding, applying, and succeeding in internships — with step-by-step roadmap, platform recommendations, and application tracking.
            </p>
          </motion.div>

          <Tabs defaultValue="roadmap" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="roadmap">🗺️ Roadmap</TabsTrigger>
              <TabsTrigger value="types">📋 Types</TabsTrigger>
              <TabsTrigger value="platforms">🌐 Platforms</TabsTrigger>
              <TabsTrigger value="listings">💼 Listings</TabsTrigger>
            </TabsList>

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

            <TabsContent value="types">
              <div className="space-y-4">
                {internshipTypes.map((type, i) => (
                  <motion.div key={type.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{type.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {type.examples.map((ex) => (
                            <span key={ex} className="text-xs bg-muted px-2 py-1 rounded-md">{ex}</span>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm bg-success/10 text-success px-3 py-1.5 rounded-full font-medium shrink-0">{type.stipend}</span>
                    </div>
                  </motion.div>
                ))}
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

            <TabsContent value="listings">
              <div className="grid md:grid-cols-2 gap-4">
                {sampleInternships.map((item, i) => (
                  <motion.div key={item.title + item.company} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        item.type === "Corporate" ? "bg-primary/10 text-primary" :
                        item.type === "Research" ? "bg-secondary/10 text-secondary" :
                        item.type === "Startup" ? "bg-accent/10 text-accent" :
                        "bg-success/10 text-success"
                      }`}>{item.type}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{item.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{item.duration}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{item.stipend}</span>
                    </div>
                    <Button size="sm" className="gradient-primary text-primary-foreground">Apply Now</Button>
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