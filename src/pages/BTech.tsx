import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, GraduationCap, Landmark, Rocket, Code, Brain, Shield, IndianRupee, TrendingUp, BookOpen, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const careerRoles = [
  { name: "Software Engineer", salary: "₹6-25 LPA (0-5 yrs)", growth5: "₹15-40 LPA", growth10: "₹30-80 LPA", skills: ["DSA", "System Design", "Cloud", "CI/CD"], demand: "Very High" },
  { name: "Data Scientist", salary: "₹8-20 LPA (0-5 yrs)", growth5: "₹20-45 LPA", growth10: "₹35-80 LPA", skills: ["Python", "ML", "Statistics", "SQL"], demand: "Very High" },
  { name: "AI/ML Engineer", salary: "₹10-30 LPA (0-5 yrs)", growth5: "₹25-50 LPA", growth10: "₹40-1 Cr+", skills: ["Deep Learning", "NLP", "PyTorch", "MLOps"], demand: "Extremely High" },
  { name: "Cloud/DevOps Engineer", salary: "₹8-22 LPA (0-5 yrs)", growth5: "₹18-40 LPA", growth10: "₹30-70 LPA", skills: ["AWS/Azure", "Docker", "K8s", "Terraform"], demand: "Very High" },
  { name: "Cyber Security Analyst", salary: "₹6-18 LPA (0-5 yrs)", growth5: "₹15-35 LPA", growth10: "₹25-60 LPA", skills: ["Pen Testing", "SIEM", "Networking", "Compliance"], demand: "High" },
  { name: "Product Manager", salary: "₹12-30 LPA (0-5 yrs)", growth5: "₹25-50 LPA", growth10: "₹40-1 Cr+", skills: ["Strategy", "Analytics", "UX", "Communication"], demand: "High" },
];

const govtJobs = [
  { name: "UPSC Engineering Services (ESE)", eligibility: "B.Tech/B.E.", salary: "₹56,100-2,15,900/month", description: "Class 1 engineering positions in central govt – Railways, CPWD, CWC, etc." },
  { name: "GATE → PSU Jobs", eligibility: "B.Tech (Valid GATE Score)", salary: "₹40,000-1,80,000/month", description: "PSU recruitment through GATE — ONGC, BHEL, IOCL, NTPC, DRDO" },
  { name: "SSC JE (Junior Engineer)", eligibility: "B.Tech/Diploma", salary: "₹35,400-1,12,400/month", description: "Junior Engineer in CPWD, CWC, MES, Railways" },
  { name: "State PSC Engineering", eligibility: "B.Tech/B.E.", salary: "₹40,000-1,50,000/month", description: "Assistant Engineer / Executive Engineer in state govt" },
  { name: "ISRO Scientist/Engineer", eligibility: "B.Tech (Written Test)", salary: "₹56,100-1,77,500/month", description: "Space research, satellite development at ISRO" },
  { name: "DRDO Scientist 'B'", eligibility: "B.Tech (GATE/SET)", salary: "₹56,100-1,82,200/month", description: "Defence research and development projects" },
  { name: "Indian Railways (RRB)", eligibility: "B.Tech/Diploma", salary: "₹35,400-1,12,400/month", description: "Technical positions in Indian Railways" },
  { name: "Bank PO / Specialist Officer", eligibility: "Any Graduate", salary: "₹36,000-63,840/month", description: "IT Officer / Specialist Officer in banks" },
];

const higherStudies = [
  { name: "M.Tech / M.E.", description: "Specialization in chosen engineering branch. Gateway to research and teaching.", exams: "GATE", duration: "2 years" },
  { name: "MBA (IIM/Top B-Schools)", description: "Management degree for leadership roles. Top IIM grads earn ₹25-50 LPA.", exams: "CAT, XAT, GMAT", duration: "2 years" },
  { name: "MS (Abroad)", description: "Master's in USA, Canada, Germany, Australia. Higher research and career scope.", exams: "GRE, TOEFL/IELTS", duration: "1.5-2 years" },
  { name: "PhD / Research", description: "Pursue research at IITs, IISc, or international universities. Academic career.", exams: "GATE, CSIR NET", duration: "3-5 years" },
  { name: "UPSC CSE (IAS/IPS)", description: "India's most prestigious civil service. Open to any graduate.", exams: "UPSC CSE Prelims + Mains", duration: "1-3 years prep" },
];

export default function BTech() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" /> B.Tech / Degree Stage
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              B.Tech / Degree – <span className="text-gradient-primary">Career Execution</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              You're at the final stage before entering the industry. Explore career roles, government jobs, higher studies, and internship opportunities.
            </p>
          </motion.div>

          <Tabs defaultValue="roles" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="roles">💼 Career Roles</TabsTrigger>
              <TabsTrigger value="govt">🏛️ Govt Jobs</TabsTrigger>
              <TabsTrigger value="higher">🎓 Higher Studies</TabsTrigger>
              <TabsTrigger value="internships">🚀 Internships</TabsTrigger>
            </TabsList>

            <TabsContent value="roles">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Salary Growth View (0 → 5 → 10 years)</h2>
                <p className="text-muted-foreground text-sm">Real salary data from Indian tech industry</p>
              </div>
              <div className="space-y-4">
                {careerRoles.map((role, i) => (
                  <motion.div key={role.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg">{role.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${role.demand === "Extremely High" ? "bg-accent/10 text-accent" : "bg-success/10 text-success"}`}>{role.demand} Demand</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {role.skills.map((s) => (
                            <span key={s} className="text-xs bg-muted px-2 py-1 rounded-md">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 text-center">
                        <div className="bg-muted rounded-lg px-4 py-2">
                          <p className="text-xs text-muted-foreground">0-5 yrs</p>
                          <p className="text-sm font-bold text-success">{role.salary.split("(")[0].trim()}</p>
                        </div>
                        <div className="bg-muted rounded-lg px-4 py-2">
                          <p className="text-xs text-muted-foreground">5+ yrs</p>
                          <p className="text-sm font-bold text-primary">{role.growth5}</p>
                        </div>
                        <div className="bg-muted rounded-lg px-4 py-2">
                          <p className="text-xs text-muted-foreground">10+ yrs</p>
                          <p className="text-sm font-bold text-accent">{role.growth10}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="govt">
              <div className="grid md:grid-cols-2 gap-4">
                {govtJobs.map((job, i) => (
                  <motion.div key={job.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border border-border hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold">{job.name}</h4>
                      <Landmark className="w-5 h-5 text-primary shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{job.eligibility}</span>
                      <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">{job.salary}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="higher">
              <div className="space-y-4">
                {higherStudies.map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full font-medium">{item.exams}</span>
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{item.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="internships">
              <div className="text-center py-8">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-2xl font-bold mb-2">Ready to Start Your Industry Journey?</h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Explore our comprehensive internship system with step-by-step guidance, platform recommendations, and application tracking.
                </p>
                <Link to="/internships">
                  <Button className="gradient-primary text-primary-foreground gap-2 px-8">
                    Explore Internship System <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

function Button({ children, className, ...props }: any) {
  return (
    <Link {...props}>
      <button className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors ${className}`}>
        {children}
      </button>
    </Link>
  );
}