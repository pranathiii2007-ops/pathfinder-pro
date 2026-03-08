import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Briefcase, Clock, MapPin, ExternalLink, Rocket, GraduationCap, FileText, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const liveInternships = [
  { title: "Software Development Intern", company: "Google", location: "Bangalore", duration: "3 months", stipend: "₹80,000/month", applyUrl: "https://www.google.com/about/careers/applications/jobs/results/?q=intern&location=India" },
  { title: "Data Analyst Intern", company: "Amazon", location: "Hyderabad", duration: "6 months", stipend: "₹50,000/month", applyUrl: "https://www.amazon.jobs/en/search?base_query=intern&loc_query=India&country=IND" },
  { title: "ML Research Intern", company: "Microsoft", location: "Bangalore", duration: "3 months", stipend: "₹60,000/month", applyUrl: "https://careers.microsoft.com/students/us/en/search-results?keywords=intern&location=India" },
  { title: "Web Developer Intern", company: "Flipkart", location: "Bangalore", duration: "3 months", stipend: "₹40,000/month", applyUrl: "https://www.linkedin.com/company/flipkart/jobs/" },
  { title: "DRDO Project Trainee", company: "DRDO", location: "Delhi", duration: "6 months", stipend: "₹20,000/month", applyUrl: "https://rac.gov.in/" },
  { title: "Product Design Intern", company: "Swiggy", location: "Remote", duration: "3 months", stipend: "₹30,000/month", applyUrl: "https://www.linkedin.com/company/swiggy/jobs/" },
  { title: "Backend Engineer Intern", company: "Razorpay", location: "Bangalore", duration: "6 months", stipend: "₹45,000/month", applyUrl: "https://www.linkedin.com/company/razorpay/jobs/" },
  { title: "Marketing Intern", company: "Zomato", location: "Gurugram", duration: "2 months", stipend: "₹25,000/month", applyUrl: "https://www.linkedin.com/company/zomato/jobs/" },
  { title: "Cloud Engineering Intern", company: "TCS", location: "Mumbai", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://www.tcs.com/careers/tcs-nextstep-portal" },
  { title: "AI Research Intern", company: "IIT Madras", location: "Chennai", duration: "2 months", stipend: "₹15,000/month", applyUrl: "https://internshala.com/internships/internship-in-chennai" },
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
              <div className="grid md:grid-cols-2 gap-4">
                {liveInternships.map((item, i) => (
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
