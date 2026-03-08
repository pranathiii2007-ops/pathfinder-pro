import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, IndianRupee, TrendingUp, GraduationCap, Building2, Landmark, BookOpen, Check, Briefcase, Clock, Star, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const careerDetails: Record<string, {
  title: string;
  stream: string;
  tagline: string;
  overview: string;
  whatTheyDo: string;
  dayInLife: string[];
  salary: { entry: string; mid: string; senior: string; top: string };
  skills: string[];
  education: Array<{ path: string; duration: string }>;
  entranceExams: string[];
  topColleges: string[];
  govtOpportunities: Array<{ name: string; salary: string }>;
  topCompanies: string[];
  pros: string[];
  cons: string[];
  futureOutlook: string;
  relatedCareers: Array<{ name: string; href: string }>;
}> = {
  "cse": {
    title: "Software Engineering / CSE",
    stream: "PCM / Science",
    tagline: "Build the technology that powers the world",
    overview: "Software Engineering is one of the highest-paying and fastest-growing career paths in India. Computer Science engineers design, develop, and maintain software systems — from mobile apps to AI systems to cloud infrastructure. With India being a global IT hub, demand for software engineers is consistently high across startups, MNCs, and product companies.",
    whatTheyDo: "Software engineers write code to solve problems. They build applications, websites, mobile apps, databases, and complex systems. They work in teams using agile methodologies, conduct code reviews, debug issues, and deploy software to millions of users.",
    dayInLife: [
      "Morning standup meeting with the team to discuss progress",
      "Write and review code for new features or bug fixes",
      "Collaborate with product managers and designers on requirements",
      "Debug and troubleshoot production issues",
      "Learn new technologies and tools through self-study",
      "Participate in technical discussions and architecture reviews",
    ],
    salary: { entry: "₹4-8 LPA (Fresher)", mid: "₹12-25 LPA (3-5 yrs)", senior: "₹25-50 LPA (5-10 yrs)", top: "₹50 LPA - 1 Cr+ (10+ yrs / FAANG)" },
    skills: ["Data Structures & Algorithms", "Programming (Python, Java, JavaScript)", "System Design", "Databases (SQL/NoSQL)", "Git & Version Control", "Cloud (AWS/Azure/GCP)", "API Design (REST/GraphQL)", "Problem Solving & Logical Thinking"],
    education: [
      { path: "B.Tech CSE → Campus Placement", duration: "4 years" },
      { path: "B.Tech CSE → M.Tech → Research/Teaching", duration: "6 years" },
      { path: "B.Tech CSE → MS Abroad → International Career", duration: "6 years" },
      { path: "BCA → MCA → Software Development", duration: "6 years" },
      { path: "Self-taught → Bootcamp → Freelance/Startup", duration: "1-2 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CET/EAMCET", "COMEDK"],
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIIT Hyderabad", "BITS Pilani", "NIT Warangal", "DTU Delhi", "VIT Vellore"],
    govtOpportunities: [
      { name: "ISRO Scientist/Engineer SC", salary: "₹56,100/month" },
      { name: "DRDO Scientist 'B'", salary: "₹56,100/month" },
      { name: "NIC Scientist 'B'", salary: "₹56,100/month" },
      { name: "Indian Railways (IT)", salary: "₹35,400/month" },
      { name: "Bank IT Specialist Officer", salary: "₹36,000/month" },
    ],
    topCompanies: ["Google", "Microsoft", "Amazon", "Apple", "Meta", "Flipkart", "Razorpay", "TCS", "Infosys", "Wipro"],
    pros: ["Highest-paying career in India for freshers", "Remote work opportunities globally", "Constant learning and growth", "Multiple sub-specializations (AI, Cloud, Security)", "Strong freelancing and startup potential", "High demand — recession-resistant career"],
    cons: ["Requires continuous learning — technology changes fast", "Can involve long hours and tight deadlines", "Sedentary work — health impact if not managed", "Competitive job market for top companies", "Initial years can feel repetitive (bug fixing, maintenance)"],
    futureOutlook: "Software engineering will remain one of the top careers for the next 20+ years. AI, cloud computing, cybersecurity, and full-stack development are growing rapidly. India produces 1.5M+ engineers/year, so standing out requires strong skills and projects. The shift to AI is creating new roles while transforming existing ones.",
    relatedCareers: [
      { name: "Data Science", href: "/careers/data-science" },
      { name: "AI/ML Engineering", href: "/careers/ai-ml" },
      { name: "Cyber Security", href: "/careers/cyber-security" },
      { name: "Cloud/DevOps", href: "/careers/cloud-devops" },
    ],
  },
  "medicine": {
    title: "Medicine (MBBS / MD)",
    stream: "PCB / BiPC",
    tagline: "Save lives and serve humanity",
    overview: "Medicine is one of the most respected and rewarding career paths in India. Doctors diagnose, treat, and prevent diseases. After completing MBBS (5.5 years), doctors can specialize through MD/MS (3 years) in fields like Cardiology, Neurology, Orthopedics, or Surgery. While the journey is long, the combination of service, respect, and good income makes it highly sought-after.",
    whatTheyDo: "Doctors examine patients, diagnose illnesses, prescribe medications, perform surgeries, and provide preventive care. They work in hospitals, clinics, research labs, and public health organizations.",
    dayInLife: [
      "Morning rounds — check on admitted patients",
      "OPD (Outpatient Department) consultations",
      "Perform or assist in surgeries/procedures",
      "Review diagnostic reports (X-rays, blood tests, MRI)",
      "Prescribe treatment plans and medications",
      "Emergency duty / on-call shifts",
    ],
    salary: { entry: "₹5-10 LPA (MBBS)", mid: "₹15-30 LPA (MD/MS)", senior: "₹30-50 LPA (Specialist)", top: "₹50 LPA - 2 Cr+ (Super Specialist / Own Practice)" },
    skills: ["Strong Biology & Chemistry foundation", "Empathy & Patient Communication", "Clinical Decision Making", "Attention to Detail", "Stress Management", "Manual Dexterity (for surgeons)", "Continuous Medical Education", "Research Aptitude"],
    education: [
      { path: "NEET UG → MBBS → Internship → Practice", duration: "6.5 years" },
      { path: "MBBS → NEET PG → MD/MS → Specialist", duration: "9.5 years" },
      { path: "MBBS → MD → DM/MCh → Super Specialist", duration: "12.5 years" },
      { path: "MBBS → USMLE → Practice in USA", duration: "8+ years" },
    ],
    entranceExams: ["NEET UG", "NEET PG", "AIIMS PG", "INI CET", "USMLE (for abroad)"],
    topColleges: ["AIIMS Delhi", "CMC Vellore", "JIPMER", "Maulana Azad Medical College", "Grant Medical College Mumbai", "KEM Hospital Mumbai", "AFMC Pune"],
    govtOpportunities: [
      { name: "Government Medical Officer", salary: "₹56,100/month + NPA" },
      { name: "AIIMS Faculty", salary: "₹1,00,000+/month" },
      { name: "Armed Forces Medical Services", salary: "₹56,100/month + perks" },
      { name: "Railway Medical Officer", salary: "₹56,100/month" },
      { name: "District Health Officer", salary: "₹56,100/month" },
    ],
    topCompanies: ["AIIMS", "Apollo Hospitals", "Fortis", "Max Healthcare", "Narayana Health", "Medanta", "Manipal Hospitals"],
    pros: ["One of the most respected professions in India", "Job security — doctors are always needed", "Excellent earning potential after specialization", "Ability to save lives and help people directly", "Government job opportunities with good perks", "Can open your own practice/clinic"],
    cons: ["Very long education journey (10+ years for specialization)", "NEET is extremely competitive (18 lakh+ applicants)", "High cost of private medical colleges (₹50L-1Cr+)", "Long working hours and emotional stress", "Delayed financial independence compared to tech"],
    futureOutlook: "Healthcare demand in India is growing rapidly due to increasing population and health awareness. Telemedicine, AI in diagnostics, and health-tech are emerging areas. Super-specialists in Cardiology, Neurology, and Oncology will be in highest demand.",
    relatedCareers: [
      { name: "Dentistry (BDS)", href: "/careers/dentistry" },
      { name: "Pharmacy", href: "/careers/pharmacy" },
      { name: "Biotechnology", href: "/careers/biotech" },
      { name: "Nursing", href: "/careers/nursing" },
    ],
  },
  "ca": {
    title: "Chartered Accountancy (CA)",
    stream: "Commerce",
    tagline: "Master the language of business — numbers",
    overview: "Chartered Accountancy is one of the most prestigious professional courses in India. CAs are experts in accounting, taxation, auditing, and financial management. Despite the challenging exams (only 5-10% pass rate), successful CAs earn very well and are essential to every business. The CA qualification is globally recognized.",
    whatTheyDo: "CAs audit financial statements, prepare tax returns, advise on tax planning, ensure regulatory compliance, manage financial risks, and provide strategic business advice. They work in audit firms, corporations, banks, and consulting firms.",
    dayInLife: [
      "Review and audit financial statements of companies",
      "Prepare and file tax returns (GST, Income Tax)",
      "Advise clients on tax planning and compliance",
      "Analyze financial data and prepare reports",
      "Meet with clients to discuss financial strategies",
      "Stay updated on new tax laws and accounting standards",
    ],
    salary: { entry: "₹7-12 LPA (Newly Qualified CA)", mid: "₹15-25 LPA (3-5 yrs)", senior: "₹25-40 LPA (CFO / Partner)", top: "₹40 LPA - 1 Cr+ (Big 4 Partner / Own Practice)" },
    skills: ["Accounting & Financial Analysis", "Taxation (Direct & Indirect)", "Auditing & Assurance", "Corporate Law & Compliance", "Excel & Financial Modeling", "Communication & Client Management", "Analytical & Logical Thinking", "Attention to Detail"],
    education: [
      { path: "12th Commerce → CA Foundation → Inter → Final → Articleship", duration: "4.5-5 years" },
      { path: "B.Com + CA simultaneously", duration: "5 years" },
      { path: "CA → MBA → CFO track", duration: "7+ years" },
    ],
    entranceExams: ["CA Foundation (after 12th)", "CA Intermediate", "CA Final"],
    topColleges: ["ICAI (Institute of Chartered Accountants of India) — sole body", "Self-study + Coaching institutes"],
    govtOpportunities: [
      { name: "CAG (Comptroller & Auditor General)", salary: "₹56,100/month+" },
      { name: "Income Tax Department", salary: "₹44,900/month+" },
      { name: "RBI Grade B", salary: "₹77,208/month" },
      { name: "SEBI Grade A", salary: "₹44,500/month+" },
      { name: "PSU Finance Officer", salary: "₹50,000/month+" },
    ],
    topCompanies: ["Deloitte", "PwC", "EY", "KPMG", "Grant Thornton", "BDO", "Own Practice"],
    pros: ["High demand — every company needs CAs", "Excellent salary after qualification", "Can start own practice — be your own boss", "Globally recognized qualification", "Diverse career options — audit, tax, consulting, CFO"],
    cons: ["Very tough exams — only 5-10% pass rate", "Long articleship period (3 years) with low stipend", "Requires immense dedication and self-study", "Work can be stressful during audit season", "Takes 4-5 years minimum to qualify"],
    futureOutlook: "CAs will remain in high demand due to growing businesses, GST complexity, and regulatory requirements. AI may automate some routine tasks, but advisory and complex taxation work will always need human expertise. CAs with tech skills will be especially valued.",
    relatedCareers: [
      { name: "Company Secretary (CS)", href: "/careers/cs" },
      { name: "Investment Banking", href: "/careers/finance" },
      { name: "MBA / Management", href: "/careers/mba" },
    ],
  },
  "data-science": {
    title: "Data Science & Analytics",
    stream: "PCM / Science",
    tagline: "Turn data into decisions",
    overview: "Data Science is the fastest-growing career in the world. Data Scientists analyze large datasets to extract insights, build predictive models, and help businesses make data-driven decisions. With the explosion of data in every industry, companies are desperately hiring skilled data professionals. India's data science market is projected to reach $100B by 2027.",
    whatTheyDo: "Data Scientists collect, clean, and analyze data. They build machine learning models, create visualizations, and present insights to stakeholders. They use Python, SQL, and ML frameworks to solve business problems.",
    dayInLife: [
      "Analyze data to find patterns and insights",
      "Build and train machine learning models",
      "Create dashboards and data visualizations",
      "Collaborate with business teams to define metrics",
      "Clean and preprocess messy data",
      "Present findings to stakeholders",
    ],
    salary: { entry: "₹6-12 LPA (Fresher)", mid: "₹15-30 LPA (3-5 yrs)", senior: "₹30-50 LPA (Lead/Manager)", top: "₹50 LPA - 1 Cr+ (Director / Chief Data Officer)" },
    skills: ["Python & R Programming", "Statistics & Probability", "Machine Learning & Deep Learning", "SQL & Database Management", "Data Visualization (Tableau, Power BI)", "Excel & Spreadsheets", "Communication & Storytelling", "Domain Knowledge (Finance, Healthcare, etc.)"],
    education: [
      { path: "B.Tech CSE/IT → Data Science role", duration: "4 years" },
      { path: "B.Sc Statistics/Maths → M.Sc Data Science", duration: "5 years" },
      { path: "Any degree → Online Bootcamp → Data Analyst", duration: "1-2 years" },
      { path: "B.Tech → MS Data Science (Abroad)", duration: "6 years" },
    ],
    entranceExams: ["JEE Main (for B.Tech)", "CUET (for B.Sc)", "GRE (for MS abroad)"],
    topColleges: ["IIT Madras (B.Sc DS)", "IIIT Hyderabad", "ISI Kolkata", "IIM Calcutta (Business Analytics)", "BITS Pilani"],
    govtOpportunities: [
      { name: "NIC Data Analyst", salary: "₹44,900/month" },
      { name: "DRDO Data Scientist", salary: "₹56,100/month" },
      { name: "RBI Data Analyst", salary: "₹50,000/month+" },
    ],
    topCompanies: ["Google", "Amazon", "Microsoft", "Flipkart", "Mu Sigma", "Tiger Analytics", "Fractal", "McKinsey"],
    pros: ["Highest-demand skill globally", "Excellent salary growth trajectory", "Can work in any industry", "Remote work friendly", "Creative problem-solving work", "Strong freelancing potential"],
    cons: ["Requires strong math/statistics foundation", "Data cleaning is 70% of the work (tedious)", "Rapidly evolving — continuous learning needed", "Can be ambiguous — unclear business requirements", "Competition from AI tools automating basic analysis"],
    futureOutlook: "Data Science is evolving rapidly with Generative AI, but the core skill of asking the right questions and interpreting data remains human. Specialized roles like MLOps, AI Engineering, and Analytics Engineering are emerging. Demand will continue growing across all industries.",
    relatedCareers: [
      { name: "Software Engineering", href: "/careers/cse" },
      { name: "AI/ML Engineering", href: "/careers/ai-ml" },
      { name: "Business Analytics (MBA)", href: "/careers/mba" },
    ],
  },
  "law": {
    title: "Law (LLB / BA LLB)",
    stream: "Arts / Any Stream",
    tagline: "Fight for justice and shape society",
    overview: "Law is one of the most powerful and impactful career paths available. Lawyers interpret and apply laws, represent clients in court, draft contracts, and advise on legal matters. In India, the legal profession offers diverse paths — from litigation (courtroom practice) to corporate law (working with companies) to civil services (IAS via law background).",
    whatTheyDo: "Lawyers research case law, draft legal documents, represent clients in courts, negotiate settlements, advise on compliance, and handle corporate transactions like mergers, IPOs, and contracts.",
    dayInLife: [
      "Research case laws and legal precedents",
      "Draft contracts, petitions, and legal documents",
      "Appear in court for hearings and arguments",
      "Meet clients to understand their legal issues",
      "Negotiate settlements and deals",
      "Review corporate compliance documents",
    ],
    salary: { entry: "₹3-8 LPA (Junior Associate)", mid: "₹10-25 LPA (3-5 yrs)", senior: "₹25-50 LPA (Partner/Senior)", top: "₹50 LPA - 2 Cr+ (Top Law Firm Partner / Senior Advocate)" },
    skills: ["Legal Research & Analysis", "Drafting & Writing", "Public Speaking & Argumentation", "Critical Thinking", "Negotiation Skills", "Knowledge of Indian Constitution & Acts", "Client Management", "Attention to Detail"],
    education: [
      { path: "After 12th → CLAT → 5-year BA LLB", duration: "5 years" },
      { path: "After Graduation → 3-year LLB", duration: "3 years" },
      { path: "LLB → LLM (Specialization) → Practice", duration: "6-7 years" },
      { path: "LLB → Judicial Services → Judge", duration: "5+ years" },
    ],
    entranceExams: ["CLAT", "AILET", "LSAT India", "MH CET Law", "State CET Law"],
    topColleges: ["NLSIU Bangalore", "NLU Delhi", "NALSAR Hyderabad", "NLU Jodhpur", "NUJS Kolkata", "Gujarat NLU", "Symbiosis Law School"],
    govtOpportunities: [
      { name: "Judicial Services (Judge)", salary: "₹56,100/month+" },
      { name: "Public Prosecutor", salary: "₹44,900/month+" },
      { name: "Law Officer in PSUs", salary: "₹50,000/month+" },
      { name: "Legal Advisor (Govt)", salary: "₹44,900/month+" },
      { name: "UPSC CSE (IAS/IPS)", salary: "₹56,100/month+" },
    ],
    topCompanies: ["AZB & Partners", "Cyril Amarchand Mangaldas", "Khaitan & Co", "Trilegal", "Shardul Amarchand", "Luthra & Luthra"],
    pros: ["Highly respected profession", "Can directly impact justice and society", "Multiple career paths (litigation, corporate, govt)", "Excellent earning potential in corporate law", "Can become a judge — one of the most powerful positions", "No age limit for practice — lifelong career"],
    cons: ["Takes years to establish in litigation", "Junior lawyers earn very low initially", "High stress and long working hours in corporate law", "Court appearances can be physically and mentally demanding", "Oversupply of law graduates in India"],
    futureOutlook: "Legal tech, cybercrime law, data privacy (DPDP Act), and corporate governance are fast-growing areas. AI tools are helping lawyers with research but cannot replace courtroom advocacy. Top NLU graduates are increasingly in demand globally.",
    relatedCareers: [
      { name: "Civil Services (IAS/IPS)", href: "/careers/civil-services" },
      { name: "Journalism", href: "/careers/journalism" },
    ],
  },
  "finance": {
    title: "Investment Banking & Finance",
    stream: "Commerce / Any",
    tagline: "Work at the intersection of money and strategy",
    overview: "Investment Banking is one of the most lucrative careers in finance. Investment bankers help companies raise capital, manage mergers and acquisitions, and advise on financial strategy. It's extremely competitive and demanding, but the rewards — both financial and intellectual — are significant.",
    whatTheyDo: "Investment bankers analyze financial data, create financial models, prepare pitch books, advise on M&A deals, manage IPOs, and help companies raise debt or equity capital. They work long hours in high-pressure environments.",
    dayInLife: [
      "Build financial models and valuation analyses",
      "Prepare pitch books and client presentations",
      "Research industry trends and company financials",
      "Coordinate with clients on deal structuring",
      "Attend team meetings and deal discussions",
      "Review legal and regulatory documentation",
    ],
    salary: { entry: "₹10-20 LPA (Analyst)", mid: "₹25-50 LPA (Associate/VP)", senior: "₹50-80 LPA (Director)", top: "₹1 Cr - 5 Cr+ (Managing Director)" },
    skills: ["Financial Modeling & Valuation", "Excel & PowerPoint", "Accounting & Finance Fundamentals", "Industry Research & Analysis", "Communication & Presentation", "Attention to Detail", "Ability to work under pressure", "Networking & Relationship Building"],
    education: [
      { path: "B.Com/BBA → MBA (IIM) → Investment Banking", duration: "5 years" },
      { path: "B.Tech → MBA → Finance career", duration: "6 years" },
      { path: "CA → Investment Banking", duration: "5 years" },
      { path: "B.Com → CFA → Equity Research/IB", duration: "5-6 years" },
    ],
    entranceExams: ["CAT (for MBA)", "CFA Level 1/2/3", "CA Foundation", "GMAT (for abroad MBA)"],
    topColleges: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "ISB Hyderabad", "XLRI Jamshedpur", "FMS Delhi"],
    govtOpportunities: [
      { name: "RBI Grade B Officer", salary: "₹77,208/month" },
      { name: "SEBI Grade A Officer", salary: "₹44,500/month+" },
      { name: "NABARD Manager", salary: "₹44,500/month+" },
      { name: "SBI PO", salary: "₹36,000/month+" },
    ],
    topCompanies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Kotak IB", "Axis Capital", "ICICI Securities", "Avendus"],
    pros: ["One of the highest-paying careers", "Intellectually stimulating work", "Fast career progression", "Global exposure and networking", "Exit opportunities to PE, VC, or startups"],
    cons: ["Extremely long working hours (80-100 hrs/week)", "Very stressful and high-pressure", "Requires top MBA for entry", "Work-life balance is poor", "Highly competitive — limited positions"],
    futureOutlook: "India's growing economy means more IPOs, M&As, and capital raises. Fintech is disrupting traditional banking but IB advisory remains human-driven. Knowledge of AI and data analytics will be a differentiator for future IB professionals.",
    relatedCareers: [
      { name: "Chartered Accountancy", href: "/careers/ca" },
      { name: "MBA / Management", href: "/careers/mba" },
    ],
  },
};

// Fallback for career IDs not yet detailed
const fallbackCareer = {
  title: "Career Details Coming Soon",
  stream: "",
  tagline: "Detailed information is being prepared",
  overview: "We're working on adding comprehensive details for this career path. Check back soon!",
  whatTheyDo: "",
  dayInLife: [],
  salary: { entry: "—", mid: "—", senior: "—", top: "—" },
  skills: [],
  education: [],
  entranceExams: [],
  topColleges: [],
  govtOpportunities: [],
  topCompanies: [],
  pros: [],
  cons: [],
  futureOutlook: "",
  relatedCareers: [],
};

export default function CareerDetail() {
  const { careerId } = useParams();
  const career = careerDetails[careerId || ""] || fallbackCareer;

  if (!careerDetails[careerId || ""]) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4 text-center">
          <Link to="/careers"><Button variant="ghost" className="mb-6 gap-2"><ArrowLeft className="w-4 h-4" />Back to Careers</Button></Link>
          <GraduationCap className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Career Details Coming Soon</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">We're preparing detailed information for this career path. Meanwhile, explore other careers.</p>
          <Link to="/careers"><Button className="gradient-primary text-primary-foreground">Browse All Careers</Button></Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/careers"><Button variant="ghost" className="mb-6 gap-2"><ArrowLeft className="w-4 h-4" />Back to Careers</Button></Link>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{career.stream}</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-2">{career.title}</h1>
            <p className="text-lg text-muted-foreground italic">{career.tagline}</p>
          </motion.div>

          {/* Overview */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-card rounded-xl p-6 border border-border mb-6">
            <h2 className="font-bold text-xl mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{career.overview}</p>
          </motion.div>

          {/* What They Do + Day in Life */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-xl mb-3 flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary" />What They Do</h2>
              <p className="text-muted-foreground leading-relaxed">{career.whatTheyDo}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-xl mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-secondary" />A Day in the Life</h2>
              <ul className="space-y-2">
                {career.dayInLife.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Salary Progression */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-xl p-6 border border-border mb-6">
            <h2 className="font-bold text-xl mb-4 flex items-center gap-2"><IndianRupee className="w-5 h-5 text-success" />Salary Progression</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Entry Level", value: career.salary.entry, color: "bg-muted" },
                { label: "Mid Level", value: career.salary.mid, color: "bg-success/10" },
                { label: "Senior Level", value: career.salary.senior, color: "bg-primary/10" },
                { label: "Top Level", value: career.salary.top, color: "bg-accent/10" },
              ].map((tier) => (
                <div key={tier.label} className={`${tier.color} rounded-lg p-4 text-center`}>
                  <p className="text-xs text-muted-foreground mb-1">{tier.label}</p>
                  <p className="font-bold text-sm">{tier.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Required */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card rounded-xl p-6 border border-border mb-6">
            <h2 className="font-bold text-xl mb-3 flex items-center gap-2"><Star className="w-5 h-5 text-warning" />Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {career.skills.map((skill) => (
                <span key={skill} className="bg-muted px-3 py-1.5 rounded-lg text-sm">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Education Paths */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl p-6 border border-border mb-6">
            <h2 className="font-bold text-xl mb-4 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" />Education Paths</h2>
            <div className="space-y-3">
              {career.education.map((path) => (
                <div key={path.path} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                  <p className="text-sm font-medium">{path.path}</p>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full shrink-0 ml-2">{path.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Entrance Exams & Top Colleges */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-lg mb-3">Entrance Exams</h2>
              <div className="flex flex-wrap gap-2">
                {career.entranceExams.map((exam) => (
                  <span key={exam} className="bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm font-medium">{exam}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-lg mb-3">Top Colleges</h2>
              <div className="flex flex-wrap gap-2">
                {career.topColleges.map((college) => (
                  <span key={college} className="bg-muted px-3 py-1.5 rounded-lg text-sm">{college}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Govt Opportunities & Top Companies */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2"><Landmark className="w-5 h-5 text-primary" />Government Opportunities</h2>
              <div className="space-y-2">
                {career.govtOpportunities.map((opp) => (
                  <div key={opp.name} className="flex items-center justify-between text-sm">
                    <span>{opp.name}</span>
                    <span className="text-success font-medium">{opp.salary}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2"><Building2 className="w-5 h-5 text-accent" />Top Companies</h2>
              <div className="flex flex-wrap gap-2">
                {career.topCompanies.map((company) => (
                  <span key={company} className="bg-accent/10 text-accent px-3 py-1.5 rounded-lg text-sm font-medium">{company}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Pros & Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-lg mb-3 text-success">✅ Pros</h2>
              <ul className="space-y-2">
                {career.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-success mt-0.5 shrink-0" />{pro}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-lg mb-3 text-destructive">⚠️ Cons</h2>
              <ul className="space-y-2">
                {career.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm"><span className="text-destructive mt-0.5 shrink-0">•</span>{con}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Future Outlook */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="bg-card rounded-xl p-6 border border-border mb-6">
            <h2 className="font-bold text-xl mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" />Future Outlook</h2>
            <p className="text-muted-foreground leading-relaxed">{career.futureOutlook}</p>
          </motion.div>

          {/* Related Careers */}
          {career.relatedCareers.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-secondary" />Related Careers</h2>
              <div className="flex flex-wrap gap-3">
                {career.relatedCareers.map((rc) => (
                  <Link key={rc.name} to={rc.href}>
                    <Button variant="outline" size="sm" className="gap-1">{rc.name}</Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}