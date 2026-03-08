import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, TrendingUp, Building2, GraduationCap, IndianRupee, Shield, Rocket, Landmark, Check, X, BookOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const streamData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  bestFor: string;
  focus: string;
  pros: string[];
  cons: string[];
  higherStudies: Array<{ name: string; description: string; duration: string }>;
  privateCareers: Array<{ name: string; salary: string; growth: string; roles: string[]; href: string }>;
  govtJobs: Array<{ name: string; exam: string; salary: string; description: string }>;
  alternativePaths: Array<{ name: string; description: string }>;
  topCourses: string[];
  entranceExams: string[];
  diplomaComparison?: { description: string; bestFor: string; pros: string[]; cons: string[] };
}> = {
  "science-pcm": {
    title: "Science – PCM / MPC Stream",
    tagline: "Physics, Chemistry, Mathematics",
    description: "The MPC stream is primarily academic and theoretical. It acts as a foundation for higher education in engineering, technology, architecture, and research.",
    bestFor: "Students who want to pursue a Bachelor's degree (B.Tech, B.Sc, B.Arch) and aim for high-level competitive entrance exams like JEE Main, BITSAT, or EAMCET.",
    focus: "Strong emphasis on fundamental concepts in Physics, Chemistry, and Mathematics, plus Computer Science or English.",
    pros: [
      "Keeps your options open for a wide range of degrees",
      "Prepares you for prestigious national-level entrance exams",
      "Develops strong analytical and problem-solving skills",
      "Gateway to the highest-paying tech careers",
      "Option for lateral entry from Diploma",
    ],
    cons: [
      "Highly academic and can be stressful due to entrance exam pressure",
      "Does not provide 'job-ready' skills immediately after 12th grade",
      "Requires consistent study and coaching for competitive exams",
    ],
    higherStudies: [
      { name: "B.Tech / B.E.", description: "4-year engineering degree across 50+ branches", duration: "4 years" },
      { name: "B.Sc (Hons)", description: "Pure sciences — Physics, Mathematics, Chemistry, Data Science", duration: "3 years" },
      { name: "B.Arch", description: "Architecture and design", duration: "5 years" },
      { name: "Integrated M.Tech", description: "Combined bachelors + masters in engineering", duration: "5 years" },
      { name: "BCA", description: "Computer Applications — programming focused", duration: "3 years" },
      { name: "B.Sc Data Science", description: "Data analytics and machine learning", duration: "3 years" },
    ],
    privateCareers: [
      { name: "Software Engineering", salary: "₹8-25 LPA", growth: "22%", roles: ["Software Engineer", "Full Stack Developer", "AI/ML Engineer", "Cloud Architect", "DevOps Engineer"], href: "/careers/cse" },
      { name: "Data Science & Analytics", salary: "₹10-30 LPA", growth: "28%", roles: ["Data Scientist", "Data Analyst", "ML Engineer", "Business Analyst"], href: "/careers/data-science" },
      { name: "Mechanical Engineering", salary: "₹5-15 LPA", growth: "8%", roles: ["Design Engineer", "Production Manager", "R&D Engineer", "Quality Engineer"], href: "/careers/mechanical" },
      { name: "Electronics & Communication", salary: "₹6-18 LPA", growth: "12%", roles: ["Embedded Engineer", "VLSI Designer", "IoT Specialist", "Network Engineer"], href: "/careers/ece" },
      { name: "Civil Engineering", salary: "₹5-12 LPA", growth: "6%", roles: ["Structural Engineer", "Urban Planner", "Site Engineer", "Project Manager"], href: "/careers/civil" },
      { name: "Architecture", salary: "₹5-20 LPA", growth: "10%", roles: ["Architect", "Interior Designer", "Urban Planner", "Landscape Architect"], href: "/careers/architecture" },
    ],
    govtJobs: [
      { name: "NDA (National Defence Academy)", exam: "UPSC NDA", salary: "₹56,100-2,15,900/month", description: "Join Indian Armed Forces as an officer after 12th" },
      { name: "DRDO Scientist", exam: "DRDO SET/GATE", salary: "₹56,100-1,82,200/month", description: "Research & development in defence technology" },
      { name: "ISRO Scientist/Engineer", exam: "ISRO Centralised Recruitment", salary: "₹56,100-1,77,500/month", description: "Space research and satellite technology" },
      { name: "SSC Technical Posts", exam: "SSC CGL/CHSL", salary: "₹25,500-81,100/month", description: "Technical positions in central government" },
      { name: "Indian Engineering Services", exam: "UPSC ESE", salary: "₹56,100-2,15,900/month", description: "Civil, Mechanical, Electrical, Electronics engineering in govt" },
      { name: "State Engineering Services", exam: "State PSC", salary: "₹40,000-1,50,000/month", description: "Engineering positions in state government departments" },
    ],
    alternativePaths: [
      { name: "Merchant Navy", description: "High-paying career at sea — requires Marine Engineering or Nautical Science" },
      { name: "Aviation (Pilot)", description: "Become a commercial pilot — requires CPL license after 12th" },
      { name: "Research & Academia", description: "Pursue PhD and become a professor or researcher at top institutions" },
      { name: "Entrepreneurship / Startups", description: "Build your own tech company — India's startup ecosystem is booming" },
      { name: "Freelancing / Remote Work", description: "Work independently as a software developer, designer, or consultant" },
    ],
    topCourses: ["B.Tech/B.E.", "B.Sc Physics/Mathematics", "B.Arch", "Integrated M.Tech", "B.Sc Data Science", "BCA"],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CET/EAMCET", "COMEDK", "WBJEE"],
    diplomaComparison: {
      description: "A Diploma is practical and skill-oriented. It is designed to get you into the workforce or a specific technical field faster.",
      bestFor: "Students who prefer hands-on learning over theory and want to enter the industry or start specialized training earlier.",
      pros: [
        "Faster entry — start working or get specialized certification sooner",
        "Applied learning — less focus on pure theory, more on how systems work in the real world",
        "Direct entry — allows lateral entry into 2nd year of B.Tech if you decide to continue studies",
        "Lower fees compared to regular engineering programs",
      ],
      cons: [
        "More specialized, which might limit career pivot options later",
        "Not primarily designed for clearing competitive entrance exams like JEE",
        "Lower starting salary compared to B.Tech graduates",
      ],
    },
  },
  "science-pcb": {
    title: "Science – PCB / BiPC Stream",
    tagline: "Physics, Chemistry, Biology",
    description: "The BiPC stream leads to careers in medicine, healthcare, life sciences, and biotechnology. Perfect for those passionate about helping others and understanding life sciences.",
    bestFor: "Students passionate about biology, healthcare, and life sciences who want to become doctors, researchers, or healthcare professionals.",
    focus: "Strong emphasis on Biology, Chemistry, and Physics with focus on understanding living organisms and healthcare systems.",
    pros: [
      "Direct pathway to becoming a doctor (MBBS) — one of the most respected professions",
      "Multiple career options in healthcare, a sector with growing demand",
      "Government job opportunities in medical services",
      "Can combine with other fields like biotechnology, bioinformatics",
    ],
    cons: [
      "NEET is highly competitive — limited seats vs huge demand",
      "Medical education is long (5.5 years MBBS + 3 years specialization)",
      "High cost of medical education in private colleges",
      "Limited pivot options if you decide medicine isn't for you",
    ],
    higherStudies: [
      { name: "MBBS", description: "Bachelor of Medicine and Surgery — become a doctor", duration: "5.5 years" },
      { name: "BDS", description: "Dental Surgery — specialize in oral health", duration: "5 years" },
      { name: "B.Pharm", description: "Pharmacy — drug development and healthcare", duration: "4 years" },
      { name: "B.Sc Nursing", description: "Nursing — patient care and healthcare management", duration: "4 years" },
      { name: "BAMS / BHMS", description: "Ayurveda / Homeopathy medicine", duration: "5.5 years" },
      { name: "B.Sc Biotechnology", description: "Biological research and genetic engineering", duration: "3 years" },
    ],
    privateCareers: [
      { name: "Medicine (MBBS/MD)", salary: "₹10-50 LPA", growth: "15%", roles: ["General Physician", "Surgeon", "Cardiologist", "Neurologist", "Pediatrician"], href: "/careers/medicine" },
      { name: "Dentistry (BDS)", salary: "₹6-20 LPA", growth: "10%", roles: ["Dentist", "Orthodontist", "Oral Surgeon", "Periodontist"], href: "/careers/dentistry" },
      { name: "Pharmacy", salary: "₹4-15 LPA", growth: "12%", roles: ["Pharmacist", "Drug Inspector", "Clinical Research", "R&D Scientist"], href: "/careers/pharmacy" },
      { name: "Biotechnology", salary: "₹5-18 LPA", growth: "18%", roles: ["Biotech Researcher", "Genetic Engineer", "Bioprocess Engineer", "QC Analyst"], href: "/careers/biotech" },
      { name: "Nursing & Allied Health", salary: "₹4-12 LPA", growth: "14%", roles: ["Staff Nurse", "ICU Nurse", "Nurse Practitioner", "Healthcare Admin"], href: "/careers/nursing" },
    ],
    govtJobs: [
      { name: "Government Medical Officer", exam: "State/Central Medical Services", salary: "₹56,100-1,77,500/month", description: "Work as a doctor in government hospitals" },
      { name: "DRDO/ICMR Scientist", exam: "CSIR NET / ICMR", salary: "₹56,100-1,82,200/month", description: "Biomedical research for government agencies" },
      { name: "Drug Inspector", exam: "State Drug Controller", salary: "₹35,400-1,12,400/month", description: "Monitor and regulate pharmaceutical products" },
      { name: "Indian Forest Service", exam: "UPSC IFS", salary: "₹56,100-2,15,900/month", description: "Conservation and forest management" },
      { name: "Food Safety Officer", exam: "FSSAI", salary: "₹35,400-1,12,400/month", description: "Ensure food safety and quality standards" },
    ],
    alternativePaths: [
      { name: "Medical Tourism", description: "India is a growing hub for medical tourism — opportunity in healthcare management" },
      { name: "Health Tech Startups", description: "Combine biology knowledge with technology for health-tech innovation" },
      { name: "Research & PhD", description: "Pursue research in life sciences at national/international institutions" },
      { name: "Nutrition & Dietetics", description: "Growing demand for nutritionists and fitness experts" },
    ],
    topCourses: ["MBBS", "BDS", "B.Pharm", "B.Sc Nursing", "BAMS/BHMS", "B.Sc Biotechnology", "B.VSc"],
    entranceExams: ["NEET UG", "NEET PG", "AIIMS PG", "State Medical CET", "GPAT"],
  },
  "commerce": {
    title: "Commerce Stream",
    tagline: "Business, Economics, Accounting",
    description: "Commerce opens pathways to business management, finance, accounting, and entrepreneurship. Ideal for students interested in how businesses and economies work.",
    bestFor: "Students interested in business, finance, economics, and management who want to pursue careers in accounting, banking, or entrepreneurship.",
    focus: "Business Studies, Accountancy, Economics, and their practical applications in the real world.",
    pros: [
      "Multiple professional course options (CA, CS, CMA) with high salary potential",
      "Less dependency on entrance exams compared to Science streams",
      "Direct industry relevance — skills learned are immediately applicable",
      "Strong entrepreneurship pathway",
      "Good government job prospects through SSC, Banking exams",
    ],
    cons: [
      "Professional courses like CA have low pass rates and require years of study",
      "Starting salaries may be lower without professional qualifications",
      "Fewer options if interested in technical/engineering fields",
    ],
    higherStudies: [
      { name: "B.Com (Hons)", description: "Advanced commerce with specialization", duration: "3 years" },
      { name: "BBA", description: "Business Administration and Management", duration: "3 years" },
      { name: "CA Foundation", description: "First step to becoming a Chartered Accountant", duration: "4-5 years total" },
      { name: "CS Foundation", description: "Path to becoming a Company Secretary", duration: "3-4 years total" },
      { name: "B.Com + CMA", description: "Cost and Management Accountancy", duration: "3-4 years" },
      { name: "BA Economics (Hons)", description: "Deep dive into economic theory and policy", duration: "3 years" },
    ],
    privateCareers: [
      { name: "Chartered Accountancy (CA)", salary: "₹8-30 LPA", growth: "10%", roles: ["Chartered Accountant", "Tax Consultant", "Auditor", "Financial Advisor"], href: "/careers/ca" },
      { name: "Investment Banking & Finance", salary: "₹12-50 LPA", growth: "15%", roles: ["Investment Banker", "Equity Analyst", "Portfolio Manager", "Risk Analyst"], href: "/careers/finance" },
      { name: "Business Management (MBA)", salary: "₹10-35 LPA", growth: "12%", roles: ["Business Manager", "Consultant", "Product Manager", "Operations Head"], href: "/careers/mba" },
      { name: "Company Secretary (CS)", salary: "₹6-20 LPA", growth: "8%", roles: ["Company Secretary", "Compliance Officer", "Legal Advisor", "Board Advisor"], href: "/careers/cs" },
      { name: "Digital Marketing", salary: "₹4-15 LPA", growth: "25%", roles: ["Digital Marketer", "SEO Specialist", "Social Media Manager", "Content Strategist"], href: "/careers/marketing" },
    ],
    govtJobs: [
      { name: "RBI Grade B Officer", exam: "RBI Grade B", salary: "₹77,208/month + allowances", description: "Prestigious banking regulator position" },
      { name: "SBI PO / Clerk", exam: "SBI PO/Clerk", salary: "₹36,000-63,840/month", description: "Banking officer or clerk in State Bank of India" },
      { name: "SSC CGL (Tax Assistant/Auditor)", exam: "SSC CGL", salary: "₹25,500-81,100/month", description: "Tax assistant, auditor, or inspector in central govt" },
      { name: "Income Tax Officer", exam: "SSC CGL", salary: "₹44,900-1,42,400/month", description: "Tax assessment and investigation" },
      { name: "IBPS PO / SO", exam: "IBPS", salary: "₹36,000-63,840/month", description: "Officer in nationalized banks" },
    ],
    alternativePaths: [
      { name: "Startup / Entrepreneurship", description: "Start your own business — India's startup ecosystem offers huge opportunities" },
      { name: "Stock Market Trading", description: "Learn stock trading and become a full-time trader or investor" },
      { name: "E-Commerce Business", description: "Build an online business on platforms like Amazon, Flipkart" },
      { name: "Freelance Accounting", description: "Provide accounting and tax services independently" },
    ],
    topCourses: ["B.Com", "BBA", "CA Foundation", "CS Foundation", "B.Com (Hons)", "Economics Hons"],
    entranceExams: ["CA CPT", "CS Foundation", "CUET", "IPM Aptitude Test", "DU JAT", "CLAT (for Law)"],
  },
  "arts": {
    title: "Arts / Humanities Stream",
    tagline: "Literature, History, Social Sciences",
    description: "Arts and Humanities offer diverse career paths in law, civil services, media, design, psychology, and social work. It's for creative, analytical, and socially aware minds.",
    bestFor: "Students passionate about society, culture, creativity, language, and governance who want impactful careers in law, media, civil services, or social sectors.",
    focus: "Literature, History, Political Science, Psychology, Sociology, Geography — understanding human behavior and society.",
    pros: [
      "Gateway to India's most prestigious career — IAS/IPS through UPSC",
      "Diverse career options across creative, social, and academic fields",
      "Lower academic stress compared to Science streams",
      "Strong foundation for law, journalism, and public policy",
      "Growing demand for psychology, counseling, and social work",
    ],
    cons: [
      "Social stigma — often seen as 'weaker' stream despite having equally challenging careers",
      "Some career paths require additional competitive exams (UPSC, CLAT)",
      "Starting salaries may be lower in some fields compared to tech",
    ],
    higherStudies: [
      { name: "BA LLB (Integrated Law)", description: "Become a lawyer — one of the most powerful career paths", duration: "5 years" },
      { name: "BA (Hons)", description: "Specialization in English, History, Political Science, etc.", duration: "3 years" },
      { name: "BA Psychology", description: "Study of human behavior and mental processes", duration: "3 years" },
      { name: "BJMC", description: "Journalism and Mass Communication", duration: "3 years" },
      { name: "B.Des", description: "Design — fashion, graphic, product, UI/UX", duration: "4 years" },
      { name: "BSW (Social Work)", description: "Community development and social welfare", duration: "3 years" },
    ],
    privateCareers: [
      { name: "Law (LLB)", salary: "₹5-30 LPA", growth: "10%", roles: ["Advocate", "Corporate Lawyer", "Legal Consultant", "Judge", "Public Prosecutor"], href: "/careers/law" },
      { name: "Civil Services (IAS/IPS)", salary: "₹8-20 LPA + Perks", growth: "Stable", roles: ["IAS Officer", "IPS Officer", "IFS Officer", "IRS Officer"], href: "/careers/civil-services" },
      { name: "Journalism & Mass Media", salary: "₹4-15 LPA", growth: "12%", roles: ["Journalist", "News Anchor", "Content Creator", "PR Specialist"], href: "/careers/journalism" },
      { name: "Psychology & Counseling", salary: "₹4-15 LPA", growth: "20%", roles: ["Psychologist", "Counselor", "Therapist", "HR Specialist"], href: "/careers/psychology" },
      { name: "Design (Fashion/Graphic/UX)", salary: "₹5-20 LPA", growth: "18%", roles: ["Graphic Designer", "UX Designer", "Fashion Designer", "Product Designer"], href: "/careers/design" },
    ],
    govtJobs: [
      { name: "IAS / IPS / IFS (UPSC)", exam: "UPSC CSE", salary: "₹56,100-2,50,000/month", description: "India's most prestigious administrative service" },
      { name: "State PCS Officer", exam: "State PSC", salary: "₹40,000-1,80,000/month", description: "Administrative positions in state government" },
      { name: "SSC CGL (Various Posts)", exam: "SSC CGL", salary: "₹25,500-81,100/month", description: "Inspector, Assistant, Auditor in central govt" },
      { name: "Teaching (KVS/NVS/DSSSB)", exam: "CTET/KVS/NVS", salary: "₹35,400-1,51,100/month", description: "Teaching positions in government schools" },
      { name: "Indian Foreign Service", exam: "UPSC CSE", salary: "₹56,100-2,15,900/month", description: "Represent India in foreign countries as a diplomat" },
    ],
    alternativePaths: [
      { name: "NGO & Social Sector", description: "Work with organizations making social impact — education, health, environment" },
      { name: "Creative Writing & Publishing", description: "Author books, write for publications, or become a content creator" },
      { name: "Film & Entertainment", description: "Direction, screenwriting, acting, production — Indian film industry is massive" },
      { name: "Travel & Tourism", description: "Build a career in India's growing tourism industry" },
    ],
    topCourses: ["BA LLB", "BA (Hons)", "BA Psychology", "BJMC", "B.Des", "BSW", "BA Political Science"],
    entranceExams: ["CLAT", "UPSC CSE", "CUET", "NID DAT", "NIFT", "AILET", "Mass Communication CET"],
  },
};

export default function StreamDetail() {
  const { streamId } = useParams();
  const stream = streamData[streamId || ""] || streamData["science-pcm"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/streams">
            <Button variant="ghost" className="mb-6 gap-2"><ArrowLeft className="w-4 h-4" />Back to Streams</Button>
          </Link>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">{stream.tagline}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{stream.title}</h1>
            <p className="text-muted-foreground text-lg max-w-4xl">{stream.description}</p>
          </motion.div>

          {/* Best For & Focus */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" />Best For</h3>
              <p className="text-muted-foreground">{stream.bestFor}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-secondary" />Focus</h3>
              <p className="text-muted-foreground">{stream.focus}</p>
            </motion.div>
          </div>

          {/* Pros & Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-success flex items-center gap-2"><Check className="w-5 h-5" />Pros</h3>
              <ul className="space-y-2">
                {stream.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-success mt-0.5 shrink-0" />{pro}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-destructive flex items-center gap-2"><X className="w-5 h-5" />Cons</h3>
              <ul className="space-y-2">
                {stream.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{con}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Diploma Comparison (PCM only) */}
          {stream.diplomaComparison && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl p-6 border border-border mb-10">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><Rocket className="w-5 h-5 text-accent" />Alternative: Diploma Courses</h3>
              <p className="text-muted-foreground mb-2">{stream.diplomaComparison.description}</p>
              <p className="text-sm mb-4"><strong>Best For:</strong> {stream.diplomaComparison.bestFor}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-success text-sm mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {stream.diplomaComparison.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm"><Check className="w-3 h-3 text-success mt-1 shrink-0" />{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-destructive text-sm mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {stream.diplomaComparison.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm"><X className="w-3 h-3 text-destructive mt-1 shrink-0" />{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Top Courses & Entrance Exams */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg">Top Courses</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stream.topCourses.map((course) => (
                  <span key={course} className="bg-muted px-3 py-1.5 rounded-lg text-sm">{course}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-lg">Entrance Exams</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stream.entranceExams.map((exam) => (
                  <span key={exam} className="bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm font-medium">{exam}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tabbed Career Options */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Tabs defaultValue="private" className="w-full">
              <h2 className="text-2xl font-bold mb-4">Career Options in {stream.title}</h2>
              <TabsList className="grid w-full max-w-lg grid-cols-4 mb-6">
                <TabsTrigger value="higher">🎓 Higher Studies</TabsTrigger>
                <TabsTrigger value="private">💼 Private</TabsTrigger>
                <TabsTrigger value="govt">🏛️ Govt Jobs</TabsTrigger>
                <TabsTrigger value="alt">🚀 Alternative</TabsTrigger>
              </TabsList>

              <TabsContent value="higher">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stream.higherStudies.map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border border-border hover-lift">
                      <h4 className="font-bold mb-1">{item.name}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item.duration}</span>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="private">
                <div className="grid gap-4">
                  {stream.privateCareers.map((career, i) => (
                    <motion.div key={career.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link to={career.href}>
                        <div className="group bg-card rounded-xl p-5 border border-border hover-lift">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{career.name}</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {career.roles.map((role) => (
                                  <span key={role} className="text-xs bg-muted px-2 py-1 rounded-md">{role}</span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-center">
                                <div className="flex items-center gap-1 text-success font-bold text-sm"><IndianRupee className="w-3.5 h-3.5" />{career.salary}</div>
                                <p className="text-xs text-muted-foreground">Salary</p>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center gap-1 text-primary font-bold text-sm"><TrendingUp className="w-3.5 h-3.5" />{career.growth}</div>
                                <p className="text-xs text-muted-foreground">Growth</p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="govt">
                <div className="grid md:grid-cols-2 gap-4">
                  {stream.govtJobs.map((job, i) => (
                    <motion.div key={job.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border border-border hover-lift">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold">{job.name}</h4>
                        <Landmark className="w-5 h-5 text-primary shrink-0" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-medium">{job.exam}</span>
                        <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">{job.salary}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="alt">
                <div className="grid md:grid-cols-2 gap-4">
                  {stream.alternativePaths.map((path, i) => (
                    <motion.div key={path.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border border-border hover-lift">
                      <div className="flex items-center gap-2 mb-2">
                        <Rocket className="w-5 h-5 text-accent" />
                        <h4 className="font-bold">{path.name}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{path.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
}