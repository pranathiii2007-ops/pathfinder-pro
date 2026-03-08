import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Code, Stethoscope, TrendingUp, Scale, Brain, Shield, Cpu, Building2, Wrench, Zap, IndianRupee } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const engineeringBranches = [
  { name: "Computer Science & Engineering (CSE)", icon: Code, salary: "₹8-25 LPA", growth: "22%", skills: ["Programming", "DSA", "System Design", "Cloud"], roles: ["Software Engineer", "AI/ML Engineer", "Full Stack Dev", "Cloud Architect"], href: "/careers/cse",
    subBranches: ["Artificial Intelligence & ML", "Data Science", "Cyber Security", "Cloud Computing", "Full Stack Development", "Blockchain"] },
  { name: "AI & Machine Learning", icon: Brain, salary: "₹12-35 LPA", growth: "30%", skills: ["Python", "Mathematics", "Deep Learning", "NLP"], roles: ["AI Engineer", "ML Researcher", "Data Scientist", "NLP Engineer"], href: "/careers/ai-ml",
    subBranches: ["Natural Language Processing", "Computer Vision", "Robotics", "Generative AI"] },
  { name: "Electronics & Communication (ECE)", icon: Cpu, salary: "₹6-18 LPA", growth: "12%", skills: ["VLSI", "Embedded Systems", "Signal Processing", "IoT"], roles: ["Embedded Engineer", "VLSI Designer", "IoT Specialist", "Network Engineer"], href: "/careers/ece",
    subBranches: ["VLSI Design", "Embedded Systems", "IoT", "Telecommunications"] },
  { name: "Mechanical Engineering", icon: Wrench, salary: "₹5-15 LPA", growth: "8%", skills: ["CAD/CAM", "Thermodynamics", "Manufacturing", "Robotics"], roles: ["Design Engineer", "Production Manager", "R&D Engineer", "Quality Engineer"], href: "/careers/mechanical",
    subBranches: ["Automobile", "Aerospace", "Robotics", "Manufacturing"] },
  { name: "Civil Engineering", icon: Building2, salary: "₹5-12 LPA", growth: "6%", skills: ["Structural Analysis", "AutoCAD", "Project Management", "Surveying"], roles: ["Structural Engineer", "Site Engineer", "Urban Planner", "Project Manager"], href: "/careers/civil",
    subBranches: ["Structural", "Transportation", "Environmental", "Geotechnical"] },
  { name: "Electrical Engineering (EEE)", icon: Zap, salary: "₹5-15 LPA", growth: "10%", skills: ["Power Systems", "Control Systems", "Machines", "Renewable Energy"], roles: ["Power Engineer", "Electrical Designer", "Energy Consultant", "Automation Engineer"], href: "/careers/eee",
    subBranches: ["Power Systems", "Renewable Energy", "Electric Vehicles", "Automation"] },
];

const medicalPaths = [
  { name: "MBBS → Specialization (MD/MS)", description: "General Medicine, Surgery, Cardiology, Neurology, Orthopedics, Gynecology", salary: "₹10-50+ LPA", href: "/careers/medicine" },
  { name: "BDS → MDS", description: "Orthodontics, Oral Surgery, Prosthodontics, Periodontics", salary: "₹6-20 LPA", href: "/careers/dentistry" },
  { name: "B.Pharm → M.Pharm / MBA", description: "Pharma industry, Drug Development, Clinical Research", salary: "₹4-15 LPA", href: "/careers/pharmacy" },
  { name: "B.Sc Nursing → M.Sc / Administration", description: "Hospital management, specialized nursing, public health", salary: "₹4-12 LPA", href: "/careers/nursing" },
  { name: "BAMS/BHMS → Practice", description: "Ayurveda/Homeopathy doctor, wellness centers, research", salary: "₹4-15 LPA", href: "/careers/medicine" },
  { name: "Biotechnology → Research / Industry", description: "Genetic engineering, biopharmaceuticals, agricultural biotech", salary: "₹5-18 LPA", href: "/careers/biotech" },
];

const commercePaths = [
  { name: "CA (Chartered Accountancy)", stages: "Foundation → Inter → Final → Articleship", salary: "₹8-30 LPA", duration: "4-5 years", href: "/careers/ca" },
  { name: "MBA (Post B.Com/BBA)", stages: "B.Com/BBA → CAT/MAT → MBA", salary: "₹10-35 LPA", duration: "2 years (after graduation)", href: "/careers/mba" },
  { name: "CS (Company Secretary)", stages: "Foundation → Executive → Professional", salary: "₹6-20 LPA", duration: "3-4 years", href: "/careers/cs" },
  { name: "CMA (Cost & Management Accountant)", stages: "Foundation → Intermediate → Final", salary: "₹6-18 LPA", duration: "3-4 years", href: "/careers/cma" },
  { name: "CFA / FRM (Finance)", stages: "B.Com → CFA Level 1/2/3", salary: "₹12-50 LPA", duration: "2-3 years", href: "/careers/finance" },
];

const artsPaths = [
  { name: "Law (LLB / BA LLB)", path: "CLAT → 5-year BA LLB or 3-year LLB", career: "Advocate, Corporate Lawyer, Judge", salary: "₹5-30 LPA", href: "/careers/law" },
  { name: "Civil Services (IAS/IPS)", path: "Graduation → UPSC CSE → Training", career: "IAS, IPS, IFS, IRS Officer", salary: "₹8-20 LPA + Perks", href: "/careers/civil-services" },
  { name: "Journalism (BJMC)", path: "BJMC → Media industry / PG Diploma", career: "Journalist, Anchor, Editor, PR", salary: "₹4-15 LPA", href: "/careers/journalism" },
  { name: "Psychology (BA → MA → MPhil)", path: "BA Psychology → MA → RCI License", career: "Psychologist, Counselor, Therapist", salary: "₹4-15 LPA", href: "/careers/psychology" },
  { name: "Design (B.Des / NID)", path: "NID DAT / NIFT → B.Des", career: "UX Designer, Fashion Designer, Graphic Designer", salary: "₹5-20 LPA", href: "/careers/design" },
];

export default function Intermediate() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" /> After Intermediate
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              After Intermediate – <span className="text-gradient-primary">Specializations</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              After completing Intermediate/12th, explore detailed branches, specializations, career roles, salary progressions, and entrance exams.
            </p>
          </motion.div>

          <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="engineering">🔧 Engineering</TabsTrigger>
              <TabsTrigger value="medical">🩺 Medical</TabsTrigger>
              <TabsTrigger value="commerce">💼 Commerce</TabsTrigger>
              <TabsTrigger value="arts">🎭 Arts/Law</TabsTrigger>
            </TabsList>

            <TabsContent value="engineering">
              <div className="space-y-4">
                {engineeringBranches.map((branch, i) => (
                  <motion.div key={branch.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link to={branch.href}>
                      <div className="group bg-card rounded-xl p-6 border border-border hover-lift">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                          <div className="flex items-center gap-3 lg:w-1/3">
                            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                              <branch.icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{branch.name}</h3>
                              <div className="flex gap-3 mt-1">
                                <span className="text-xs text-success font-medium flex items-center gap-0.5"><IndianRupee className="w-3 h-3" />{branch.salary}</span>
                                <span className="text-xs text-primary font-medium flex items-center gap-0.5"><TrendingUp className="w-3 h-3" />{branch.growth}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Specializations:</p>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {branch.subBranches.map((sb) => (
                                <span key={sb} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{sb}</span>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Key Roles:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {branch.roles.map((role) => (
                                <span key={role} className="text-xs bg-muted px-2 py-1 rounded-md">{role}</span>
                              ))}
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 self-center" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="medical">
              <div className="grid md:grid-cols-2 gap-4">
                {medicalPaths.map((path, i) => (
                  <motion.div key={path.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link to={path.href}>
                      <div className="group bg-card rounded-xl p-6 border border-border hover-lift h-full">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{path.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{path.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">{path.salary}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commerce">
              <div className="space-y-4">
                {commercePaths.map((path, i) => (
                  <motion.div key={path.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link to={path.href}>
                      <div className="group bg-card rounded-xl p-6 border border-border hover-lift">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{path.name}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{path.stages}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xs bg-success/10 text-success px-3 py-1.5 rounded-full font-medium">{path.salary}</span>
                            <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{path.duration}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="arts">
              <div className="space-y-4">
                {artsPaths.map((path, i) => (
                  <motion.div key={path.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link to={path.href}>
                      <div className="group bg-card rounded-xl p-6 border border-border hover-lift">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{path.name}</h3>
                        <p className="text-muted-foreground text-sm mb-1"><strong>Path:</strong> {path.path}</p>
                        <p className="text-muted-foreground text-sm mb-3"><strong>Careers:</strong> {path.career}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">{path.salary}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </Link>
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