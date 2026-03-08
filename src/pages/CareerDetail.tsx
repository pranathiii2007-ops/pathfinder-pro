import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, IndianRupee, TrendingUp, GraduationCap, Building2, Landmark, BookOpen, Check, Briefcase, Clock, Star, Users, ExternalLink, MapPin } from "lucide-react";
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
  "mechanical": {
    title: "Mechanical Engineering",
    stream: "PCM / Science",
    tagline: "Design the machines that move the world",
    overview: "Mechanical Engineering is one of the oldest and broadest engineering disciplines. It deals with the design, manufacturing, and maintenance of mechanical systems — from tiny micro-sensors to massive power plants. In India, mechanical engineers work across automotive, aerospace, manufacturing, energy, and robotics sectors. While not as hyped as tech, it remains foundational to industrial growth.",
    whatTheyDo: "Mechanical engineers design machines, engines, and tools. They analyze thermal and mechanical systems, oversee manufacturing processes, improve product designs, and ensure quality standards. They use CAD/CAM software, run simulations, and work closely with production teams.",
    dayInLife: [
      "Design components using CAD software (SolidWorks, AutoCAD)",
      "Analyze stress, heat, and fluid dynamics using simulation tools",
      "Visit manufacturing floors to check production processes",
      "Collaborate with R&D teams on product improvements",
      "Review quality reports and ensure compliance",
      "Attend project meetings with cross-functional teams",
    ],
    salary: { entry: "₹3-6 LPA (Fresher)", mid: "₹8-15 LPA (3-5 yrs)", senior: "₹15-25 LPA (8-10 yrs)", top: "₹25-50 LPA (Senior Manager / Director)" },
    skills: ["CAD/CAM (SolidWorks, CATIA, AutoCAD)", "Thermodynamics & Heat Transfer", "Fluid Mechanics", "Manufacturing Processes", "Material Science", "FEA / CFD Simulation", "Project Management", "Problem Solving & Analytical Skills"],
    education: [
      { path: "B.Tech Mechanical → Campus Placement", duration: "4 years" },
      { path: "B.Tech → M.Tech (Thermal/Design/Manufacturing)", duration: "6 years" },
      { path: "B.Tech → GATE → PSU Jobs", duration: "4-5 years" },
      { path: "B.Tech → MS Abroad → International Career", duration: "6 years" },
      { path: "Diploma → Lateral Entry → B.Tech", duration: "5 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "State CET/EAMCET", "GATE (for M.Tech/PSU)"],
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "NIT Trichy", "BITS Pilani", "VIT Vellore", "DTU Delhi"],
    govtOpportunities: [
      { name: "ISRO Scientist/Engineer", salary: "₹56,100/month" },
      { name: "DRDO Scientist 'B'", salary: "₹56,100/month" },
      { name: "Indian Railways (Mechanical)", salary: "₹35,400/month+" },
      { name: "BHEL / NTPC / ONGC (via GATE)", salary: "₹40,000-60,000/month" },
      { name: "Defence (Indian Army Technical)", salary: "₹56,100/month" },
    ],
    topCompanies: ["Tata Motors", "Mahindra", "L&T", "Bosch", "Maruti Suzuki", "Bajaj Auto", "Siemens", "GE", "Honda", "Caterpillar"],
    pros: ["Evergreen branch — industries always need mechanical engineers", "Wide range of industries to work in", "Good government/PSU job opportunities via GATE", "Foundation for MBA, UPSC, or cross-domain roles", "Hands-on and tangible work — you see what you build"],
    cons: ["Lower starting salaries compared to CS/IT", "Core jobs can be location-dependent (factories, plants)", "Less remote work flexibility", "Slower salary growth in traditional manufacturing", "Heavy competition for limited core placements"],
    futureOutlook: "Electric vehicles, robotics, 3D printing, and renewable energy are revitalizing mechanical engineering. Engineers with skills in EV design, automation, and computational methods will be in highest demand. The 'Make in India' initiative is boosting manufacturing jobs.",
    relatedCareers: [
      { name: "Civil Engineering", href: "/careers/civil" },
      { name: "Electrical Engineering", href: "/careers/eee" },
      { name: "Automobile Engineering", href: "/careers/automobile" },
    ],
  },
  "ece": {
    title: "Electronics & Communication Engineering",
    stream: "PCM / Science",
    tagline: "Power the devices that connect the world",
    overview: "Electronics & Communication Engineering (ECE) deals with electronic circuits, communication systems, signal processing, and embedded systems. ECE engineers build the hardware and firmware that powers everything from smartphones to satellites. In India, ECE graduates work in VLSI, telecom, IoT, embedded systems, and even software roles.",
    whatTheyDo: "ECE engineers design electronic circuits, develop embedded systems, work on VLSI chip design, build communication networks, and program microcontrollers. They also work in signal processing, antenna design, and IoT product development.",
    dayInLife: [
      "Design and test electronic circuits and PCBs",
      "Program microcontrollers and embedded systems",
      "Simulate circuit behavior using tools like MATLAB, LTSpice",
      "Debug hardware and firmware issues",
      "Collaborate with software teams for hardware-software integration",
      "Test and validate communication protocols",
    ],
    salary: { entry: "₹3.5-7 LPA (Fresher)", mid: "₹10-18 LPA (3-5 yrs)", senior: "₹18-35 LPA (8-10 yrs)", top: "₹35-70 LPA (VLSI Lead / Principal Engineer)" },
    skills: ["Analog & Digital Electronics", "VLSI Design (Verilog, VHDL)", "Embedded C/C++ Programming", "Signal Processing", "Communication Systems", "PCB Design", "MATLAB/Simulink", "IoT & Sensor Technologies"],
    education: [
      { path: "B.Tech ECE → Campus Placement (IT/Core)", duration: "4 years" },
      { path: "B.Tech → M.Tech VLSI/Embedded → Core Jobs", duration: "6 years" },
      { path: "B.Tech → GATE → PSU / IIT M.Tech", duration: "4-5 years" },
      { path: "B.Tech → MS Abroad (VLSI/Telecom)", duration: "6 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "State CET/EAMCET", "GATE ECE"],
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "NIT Trichy", "BITS Pilani", "IIIT Hyderabad", "DTU Delhi", "NIT Warangal"],
    govtOpportunities: [
      { name: "ISRO Scientist/Engineer (Electronics)", salary: "₹56,100/month" },
      { name: "DRDO Scientist 'B'", salary: "₹56,100/month" },
      { name: "BSNL JTO (via GATE)", salary: "₹35,400/month" },
      { name: "Indian Navy (Technical Branch)", salary: "₹56,100/month" },
      { name: "ECIL / BEL (via GATE)", salary: "₹40,000-50,000/month" },
    ],
    topCompanies: ["Qualcomm", "Intel", "Texas Instruments", "Samsung Semiconductor", "Broadcom", "MediaTek", "NVIDIA", "Analog Devices", "Bosch", "Cisco"],
    pros: ["High demand in VLSI — India is becoming a chip design hub", "Good PSU opportunities via GATE", "Can switch to software/IT easily", "Hardware skills are rare and valued", "Growing IoT and embedded systems market"],
    cons: ["Core ECE jobs are fewer than software jobs", "VLSI roles concentrated in specific cities (Bangalore, Hyderabad)", "Requires strong fundamentals in physics and math", "Hardware debugging can be time-consuming", "Lower starting salary in core compared to CS"],
    futureOutlook: "India's semiconductor push (₹76,000 Cr incentive) is creating massive demand for VLSI engineers. 5G deployment, IoT expansion, and EV electronics are driving growth. ECE with VLSI or embedded specialization will see strong demand in the next decade.",
    relatedCareers: [
      { name: "Software Engineering", href: "/careers/cse" },
      { name: "Electrical Engineering", href: "/careers/eee" },
      { name: "Data Science", href: "/careers/data-science" },
    ],
  },
  "civil": {
    title: "Civil Engineering",
    stream: "PCM / Science",
    tagline: "Build the infrastructure that defines nations",
    overview: "Civil Engineering is the backbone of a country's infrastructure. Civil engineers design and build roads, bridges, buildings, dams, airports, and water systems. In India, with massive infrastructure projects like highways, metros, smart cities, and bullet trains, civil engineers play a critical role. It's one of the most stable engineering careers with strong government job opportunities.",
    whatTheyDo: "Civil engineers plan, design, and oversee construction projects. They analyze soil conditions, calculate structural loads, create blueprints, manage construction sites, and ensure buildings meet safety codes. They work with architects, contractors, and government agencies.",
    dayInLife: [
      "Visit construction sites to monitor progress and quality",
      "Design structural plans using AutoCAD and STAAD Pro",
      "Calculate material quantities and project costs",
      "Coordinate with contractors and laborers",
      "Ensure compliance with building codes and safety standards",
      "Prepare project reports and documentation",
    ],
    salary: { entry: "₹3-5 LPA (Fresher)", mid: "₹7-12 LPA (3-5 yrs)", senior: "₹12-25 LPA (8-10 yrs)", top: "₹25-50 LPA (Project Director / Own Firm)" },
    skills: ["Structural Analysis & Design", "AutoCAD & Revit", "STAAD Pro / ETABS", "Surveying & Geotechnical Engineering", "Project Management", "Quantity Estimation & Costing", "Concrete & Steel Design", "Environmental Engineering Basics"],
    education: [
      { path: "B.Tech Civil → Site Engineer → Project Manager", duration: "4 years" },
      { path: "B.Tech → M.Tech Structural/Geotech → Specialist", duration: "6 years" },
      { path: "B.Tech → GATE → PSU/Govt Jobs", duration: "4-5 years" },
      { path: "B.Tech → UPSC Engineering Services", duration: "4-5 years" },
      { path: "Diploma Civil → Site Supervisor → Contractor", duration: "3 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "State CET/EAMCET", "GATE CE", "UPSC ESE (Engineering Services)"],
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Roorkee", "IIT Madras", "NIT Trichy", "BITS Pilani", "NIT Warangal", "College of Engineering Pune"],
    govtOpportunities: [
      { name: "UPSC Engineering Services (IES)", salary: "₹56,100/month+" },
      { name: "State PWD Engineer", salary: "₹35,400/month+" },
      { name: "NHAI (National Highways)", salary: "₹40,000-60,000/month" },
      { name: "Indian Railways Civil Engineer", salary: "₹35,400/month" },
      { name: "Smart City Project Manager", salary: "₹50,000/month+" },
    ],
    topCompanies: ["L&T", "Shapoorji Pallonji", "Tata Projects", "Afcons", "DLF", "Godrej Properties", "Sobha", "Prestige", "GMR", "Adani Infrastructure"],
    pros: ["Massive government job opportunities", "India's infrastructure boom means high demand", "Tangible impact — you see what you build", "Good for UPSC Engineering Services exam", "Can start own construction/consultancy firm"],
    cons: ["Often requires site visits in tough conditions", "Lower starting salaries compared to IT", "Project delays and bureaucracy in govt projects", "Physical demands of site work", "Slower career growth in some segments"],
    futureOutlook: "India's $1.4 trillion infrastructure pipeline (highways, metros, smart cities, bullet train) ensures strong demand. Green building, sustainable design, and BIM (Building Information Modeling) are emerging trends. Civil engineers with project management and tech skills will lead the industry.",
    relatedCareers: [
      { name: "Mechanical Engineering", href: "/careers/mechanical" },
      { name: "Architecture", href: "/careers/architecture" },
      { name: "Urban Planning", href: "/careers/urban-planning" },
    ],
  },
  "biotech": {
    title: "Biotechnology",
    stream: "PCB / BiPC",
    tagline: "Engineer life at the molecular level",
    overview: "Biotechnology combines biology with technology to develop products and solutions in healthcare, agriculture, and the environment. Biotech professionals work on genetic engineering, drug development, bioinformatics, and agricultural innovation. India's biotech industry is valued at $80+ billion and growing at 14% annually, driven by pharma, vaccines (like Covaxin), and agricultural biotech.",
    whatTheyDo: "Biotech professionals conduct research on genes, proteins, and cells. They develop new drugs, vaccines, and diagnostic tools. They work in labs doing experiments, analyzing data, and publishing research. In industry, they manage clinical trials, quality control, and regulatory compliance.",
    dayInLife: [
      "Conduct laboratory experiments (PCR, gel electrophoresis, cell culture)",
      "Analyze genomic and proteomic data",
      "Document experimental results and write research papers",
      "Collaborate with cross-functional R&D teams",
      "Review clinical trial data and regulatory submissions",
      "Attend seminars and stay updated on research trends",
    ],
    salary: { entry: "₹3-6 LPA (Fresher)", mid: "₹8-15 LPA (3-5 yrs)", senior: "₹15-25 LPA (8-10 yrs)", top: "₹25-50 LPA (Director R&D / CSO)" },
    skills: ["Molecular Biology & Genetics", "Bioinformatics", "Cell Culture Techniques", "Clinical Research & Trials", "Statistical Analysis (R, Python)", "Regulatory Affairs (FDA, CDSCO)", "Research Methodology", "Scientific Writing"],
    education: [
      { path: "B.Tech/B.Sc Biotech → Lab Researcher", duration: "4 years" },
      { path: "B.Tech → M.Tech/M.Sc Biotech → R&D Scientist", duration: "6 years" },
      { path: "B.Sc → PhD → Academic/Industry Researcher", duration: "8-9 years" },
      { path: "B.Tech Biotech → MBA → Pharma Management", duration: "6 years" },
    ],
    entranceExams: ["JEE Main", "GATE Biotech", "ICAR AIEEA", "JAM (for M.Sc)", "DBT JRF (for PhD)"],
    topColleges: ["IIT Delhi", "IIT Madras", "IIT Kharagpur", "ICT Mumbai", "JNU Delhi", "University of Hyderabad", "Anna University", "Manipal University"],
    govtOpportunities: [
      { name: "CSIR Scientist", salary: "₹56,100/month" },
      { name: "DBT Research Associate", salary: "₹47,000/month" },
      { name: "ICMR Scientist", salary: "₹56,100/month" },
      { name: "ICAR Scientist", salary: "₹56,100/month" },
      { name: "Drug Inspector (CDSCO)", salary: "₹35,400/month+" },
    ],
    topCompanies: ["Biocon", "Serum Institute", "Dr. Reddy's", "Bharat Biotech", "Panacea Biotec", "Syngene", "Novozymes", "Genentech (Roche)", "Cipla", "Sun Pharma"],
    pros: ["Directly contributes to healthcare and saving lives", "Growing industry — India is a global vaccine hub", "Diverse career paths (research, pharma, agriculture)", "Good government research opportunities", "Intellectually stimulating and impactful work"],
    cons: ["Requires higher degrees (M.Sc/PhD) for good roles", "Lower starting salaries compared to IT", "Research can be slow and frustrating", "Lab work can be repetitive", "Industry jobs concentrated in specific cities"],
    futureOutlook: "Personalized medicine, CRISPR gene editing, mRNA vaccines, and agricultural biotech are the future. India's biotech sector is expected to reach $150 billion by 2025. Bioinformatics and computational biology are bridging biotech with AI, creating exciting new roles.",
    relatedCareers: [
      { name: "Medicine (MBBS)", href: "/careers/medicine" },
      { name: "Pharmacy", href: "/careers/pharmacy" },
      { name: "Data Science (Bioinformatics)", href: "/careers/data-science" },
    ],
  },
  "psychology": {
    title: "Psychology & Counseling",
    stream: "Arts / Any Stream",
    tagline: "Understand the mind, heal the soul",
    overview: "Psychology is the scientific study of human behavior and mental processes. Psychologists help people cope with mental health challenges, relationship issues, stress, and trauma. In India, mental health awareness is growing rapidly, creating huge demand for trained psychologists and counselors. It's one of the most fulfilling careers for empathetic individuals.",
    whatTheyDo: "Psychologists assess mental health conditions, provide therapy (CBT, DBT, psychoanalysis), conduct psychological testing, offer career and relationship counseling, and work with organizations on employee wellbeing. Clinical psychologists treat disorders like depression, anxiety, PTSD, and OCD.",
    dayInLife: [
      "Conduct one-on-one therapy sessions with clients",
      "Administer and interpret psychological assessments",
      "Develop personalized treatment plans",
      "Maintain detailed case notes and records",
      "Attend supervision sessions and case conferences",
      "Conduct workshops on stress management or mental health awareness",
    ],
    salary: { entry: "₹3-6 LPA (Fresher)", mid: "₹6-12 LPA (3-5 yrs)", senior: "₹12-20 LPA (8-10 yrs)", top: "₹20-40 LPA (Private Practice / Senior Consultant)" },
    skills: ["Active Listening & Empathy", "Cognitive Behavioral Therapy (CBT)", "Psychological Assessment & Testing", "Research Methods & Statistics", "Communication & Rapport Building", "Ethics & Confidentiality", "Crisis Intervention", "Cultural Sensitivity"],
    education: [
      { path: "BA Psychology → MA Psychology → RCI Registration", duration: "5 years" },
      { path: "BA → MA Clinical Psychology → MPhil → License", duration: "7 years" },
      { path: "BA → MA → PhD Psychology → Academic/Research", duration: "9-10 years" },
      { path: "BA → MA Counseling Psychology → School/Corporate Counselor", duration: "5 years" },
    ],
    entranceExams: ["CUET (for BA)", "Delhi University MA Entrance", "TISS Entrance", "JMI Entrance", "RCI Registration (for clinical practice)"],
    topColleges: ["NIMHANS Bangalore", "TISS Mumbai", "Delhi University", "Christ University Bangalore", "Jamia Millia Islamia", "Amity University", "Fergusson College Pune"],
    govtOpportunities: [
      { name: "NIMHANS Clinical Psychologist", salary: "₹56,100/month" },
      { name: "Government Hospital Psychologist", salary: "₹35,400/month+" },
      { name: "School Counselor (KVS/NVS)", salary: "₹35,400/month" },
      { name: "Defence Psychologist", salary: "₹56,100/month" },
      { name: "UPSC Psychologist (Selection Board)", salary: "₹44,900/month+" },
    ],
    topCompanies: ["NIMHANS", "Vandrevala Foundation", "Practo", "iCall (TISS)", "Mindpeers", "Amaha", "YourDOST", "1to1Help", "Fortis Mental Health"],
    pros: ["Deeply meaningful and fulfilling work", "Growing demand — India needs 3x more psychologists", "Flexible work — private practice, hospitals, schools, online", "Can specialize in many areas (child, forensic, sports, organizational)", "Work-life balance is generally good"],
    cons: ["Requires MPhil (2 years after MA) for clinical license", "Long education path for clinical psychology", "Lower starting salaries compared to corporate jobs", "Emotional toll of dealing with clients' trauma", "Limited awareness in smaller cities — building client base takes time"],
    futureOutlook: "Mental health is finally getting the attention it deserves in India. The Mental Healthcare Act 2017 and growing awareness are driving demand. Online therapy platforms, AI-assisted mental health tools, and corporate wellness programs are expanding rapidly. India needs 1,50,000+ psychologists — currently has only ~10,000.",
    relatedCareers: [
      { name: "Medicine (Psychiatry)", href: "/careers/medicine" },
      { name: "Social Work", href: "/careers/social-work" },
      { name: "Human Resources", href: "/careers/hr" },
    ],
  },
  "journalism": {
    title: "Journalism & Mass Communication",
    stream: "Arts / Any Stream",
    tagline: "Tell the stories that shape the world",
    overview: "Journalism is the practice of gathering, verifying, and presenting news and information to the public. In the digital age, journalism has expanded beyond newspapers and TV to include digital media, podcasts, YouTube, and social media. Indian media is one of the largest in the world with 900+ TV channels and 1000+ digital news platforms. If you love writing, storytelling, and truth-seeking, this is your career.",
    whatTheyDo: "Journalists research stories, interview sources, write articles, shoot videos, present news on TV/digital platforms, and investigate corruption or social issues. They work as reporters, editors, anchors, documentary filmmakers, content creators, and public relations professionals.",
    dayInLife: [
      "Research and identify newsworthy stories",
      "Interview sources and conduct field reporting",
      "Write articles, scripts, or create video content",
      "Edit and fact-check content before publishing",
      "Attend press conferences and events",
      "Manage social media accounts and audience engagement",
    ],
    salary: { entry: "₹3-6 LPA (Fresher)", mid: "₹6-15 LPA (3-5 yrs)", senior: "₹15-30 LPA (Editor/Senior Anchor)", top: "₹30-80 LPA (Editor-in-Chief / Top Anchor)" },
    skills: ["News Writing & Storytelling", "Video Production & Editing", "Research & Investigation", "Interview Techniques", "Social Media Management", "Photo/Video Journalism", "Critical Thinking & Ethics", "Hindi & English Proficiency"],
    education: [
      { path: "BJMC (Bachelor of Journalism & Mass Communication)", duration: "3 years" },
      { path: "BA → PG Diploma in Journalism (IIMC)", duration: "4 years" },
      { path: "Any degree → MA Mass Communication → Media", duration: "5 years" },
      { path: "BA → Digital Media & Content Creation → Freelance", duration: "3 years" },
    ],
    entranceExams: ["IIMC Entrance", "JMI Entrance", "CUET (for BA Journalism)", "Xavier's Mumbai Mass Media", "Symbiosis SET"],
    topColleges: ["IIMC Delhi", "AJK MCRC (Jamia)", "Xavier's Mumbai", "Symbiosis Pune", "ACJ Chennai", "Lady Shri Ram College", "IP University"],
    govtOpportunities: [
      { name: "Doordarshan (Prasar Bharati)", salary: "₹35,400/month+" },
      { name: "AIR (All India Radio)", salary: "₹35,400/month+" },
      { name: "PIB (Press Information Bureau)", salary: "₹44,900/month+" },
      { name: "Films Division of India", salary: "₹35,400/month+" },
      { name: "DAVP (Advertising)", salary: "₹35,400/month+" },
    ],
    topCompanies: ["NDTV", "India Today", "Times of India", "The Hindu", "Republic", "Hindustan Times", "BBC India", "Reuters", "ANI", "The Quint", "Scroll"],
    pros: ["Every day is different — exciting and dynamic work", "Power to influence public opinion and drive change", "Can specialize in many beats (politics, sports, tech, business)", "Digital media has opened unlimited opportunities", "Freelancing and content creation offer independence"],
    cons: ["Long and irregular working hours", "Can be physically dangerous (conflict reporting)", "Job security can be uncertain in print media", "Starting salaries are relatively low", "Pressure to chase TRP/clicks can compromise quality"],
    futureOutlook: "Digital journalism, data journalism, and podcast/video content are the fastest-growing segments. AI tools are helping with research and content creation, but original reporting and investigation remain irreplaceable. Independent digital media and content creation offer new career paths beyond traditional newsrooms.",
    relatedCareers: [
      { name: "Psychology", href: "/careers/psychology" },
      { name: "Law", href: "/careers/law" },
      { name: "Public Relations", href: "/careers/pr" },
    ],
  },
  "pharmacy": {
    title: "Pharmacy (B.Pharm / D.Pharm)",
    stream: "PCB / BiPC",
    tagline: "Develop medicines that heal the world",
    overview: "Pharmacy is the science of developing, producing, and dispensing medications. Pharmacists play a crucial role in healthcare — from drug development in pharmaceutical companies to managing hospital and retail pharmacies. India is the 'Pharmacy of the World', producing 60% of global vaccines and 20% of generic medicines. The pharma industry is worth $50+ billion and growing rapidly.",
    whatTheyDo: "Pharmacists formulate drugs, ensure drug quality, advise patients on medication use, manage pharmacy operations, conduct clinical trials, and work in regulatory affairs. In the pharmaceutical industry, they work in R&D, production, quality control, and marketing of drugs.",
    dayInLife: [
      "Dispense medications and counsel patients on drug usage",
      "Review prescriptions for drug interactions and allergies",
      "Conduct quality control tests on drug batches",
      "Research and develop new drug formulations",
      "Maintain inventory and manage pharmacy operations",
      "Stay updated on new drugs and regulatory guidelines",
    ],
    salary: { entry: "₹3-6 LPA (Fresher)", mid: "₹8-15 LPA (3-5 yrs)", senior: "₹15-25 LPA (8-10 yrs)", top: "₹25-50 LPA (Director R&D / Regulatory Head)" },
    skills: ["Pharmacology & Drug Chemistry", "Clinical Research & Trials", "Drug Regulatory Affairs (CDSCO, FDA)", "Quality Control & Assurance", "Pharmaceutical Marketing", "Good Manufacturing Practices (GMP)", "Patient Counseling", "Analytical Chemistry"],
    education: [
      { path: "D.Pharm (Diploma in Pharmacy) → Retail/Hospital Pharmacist", duration: "2 years" },
      { path: "B.Pharm → Pharma Industry / Hospital Pharmacist", duration: "4 years" },
      { path: "B.Pharm → M.Pharm → Research / Teaching", duration: "6 years" },
      { path: "B.Pharm → MBA Pharma Management", duration: "6 years" },
      { path: "B.Pharm → PharmD (Doctor of Pharmacy) → Clinical Practice", duration: "6 years" },
    ],
    entranceExams: ["GPAT (for M.Pharm)", "NIPER JEE", "State Pharmacy Entrance", "CUET"],
    topColleges: ["NIPER (Mohali, Hyderabad)", "ICT Mumbai (UDCT)", "Jamia Hamdard Delhi", "Manipal College of Pharmacy", "JSS Mysore", "Bombay College of Pharmacy", "BITS Pilani (Pharmacy)"],
    govtOpportunities: [
      { name: "Drug Inspector (CDSCO)", salary: "₹44,900/month+" },
      { name: "Government Hospital Pharmacist", salary: "₹35,400/month" },
      { name: "DRDO Scientist (Pharma)", salary: "₹56,100/month" },
      { name: "Railway Pharmacist", salary: "₹29,200/month+" },
      { name: "Armed Forces Pharmacist", salary: "₹35,400/month" },
    ],
    topCompanies: ["Sun Pharma", "Cipla", "Dr. Reddy's", "Lupin", "Zydus", "Biocon", "Divis Labs", "Aurobindo Pharma", "Pfizer India", "Abbott"],
    pros: ["India is global pharma hub — massive job opportunities", "Diverse career paths (R&D, clinical, retail, regulatory)", "Can open own pharmacy — entrepreneurship potential", "Healthcare sector ensures job stability", "Growing demand for clinical research professionals", "Good government job opportunities"],
    cons: ["D.Pharm/B.Pharm alone limits growth — M.Pharm needed for R&D", "Retail pharmacy work can be monotonous", "Lower starting salaries in retail pharmacy", "Regulatory changes can impact job roles", "Night shifts in hospital pharmacy"],
    futureOutlook: "India's pharma industry is projected to reach $130 billion by 2030. Biosimilars, personalized medicine, and AI-driven drug discovery are transforming the field. Clinical research and regulatory affairs professionals are in high demand globally. The COVID-19 pandemic highlighted India's pharma strength.",
    relatedCareers: [
      { name: "Medicine (MBBS)", href: "/careers/medicine" },
      { name: "Biotechnology", href: "/careers/biotech" },
      { name: "Nursing", href: "/careers/nursing" },
    ],
  },
  "architecture": {
    title: "Architecture (B.Arch)",
    stream: "PCM / Science",
    tagline: "Shape the spaces where life happens",
    overview: "Architecture is the art and science of designing buildings and spaces. Architects create functional, aesthetic, and sustainable structures — from homes and offices to airports and cities. In India, rapid urbanization, smart city projects, and green building initiatives are driving strong demand. It's one of the most creative engineering-adjacent careers with a unique 5-year degree program.",
    whatTheyDo: "Architects design buildings and spaces, create blueprints and 3D models, select materials, coordinate with engineers and contractors, ensure building code compliance, and manage construction projects. They balance aesthetics, functionality, sustainability, and budget.",
    dayInLife: [
      "Sketch concepts and create detailed architectural drawings",
      "Build 3D models using Revit, SketchUp, or AutoCAD",
      "Visit construction sites to oversee project progress",
      "Meet clients to understand requirements and present designs",
      "Coordinate with structural and MEP engineers",
      "Research sustainable materials and green building techniques",
    ],
    salary: { entry: "₹3-6 LPA (Fresher)", mid: "₹8-15 LPA (3-5 yrs)", senior: "₹15-30 LPA (8-10 yrs)", top: "₹30-80 LPA (Principal Architect / Own Firm)" },
    skills: ["Architectural Design & Drawing", "AutoCAD, Revit, SketchUp", "3D Rendering (V-Ray, Lumion)", "Building Codes & Regulations", "Sustainable Design & Green Architecture", "Structural Understanding", "Client Communication", "Project Management"],
    education: [
      { path: "NATA/JEE → B.Arch → Junior Architect", duration: "5 years" },
      { path: "B.Arch → M.Arch (Urban Design/Landscape)", duration: "7 years" },
      { path: "B.Arch → M.Plan (Urban & Regional Planning)", duration: "7 years" },
      { path: "B.Arch → Own Practice / Freelance", duration: "5+ years" },
    ],
    entranceExams: ["NATA (National Aptitude Test in Architecture)", "JEE Main Paper 2 (B.Arch)", "State Architecture CET"],
    topColleges: ["IIT Kharagpur", "IIT Roorkee", "SPA Delhi", "SPA Bhopal", "CEPT Ahmedabad", "NIT Trichy", "Chandigarh College of Architecture", "JJ School of Art Mumbai"],
    govtOpportunities: [
      { name: "CPWD Architect", salary: "₹56,100/month+" },
      { name: "Smart City Project Architect", salary: "₹50,000/month+" },
      { name: "Town Planner (State Govt)", salary: "₹44,900/month+" },
      { name: "Archaeological Survey of India", salary: "₹35,400/month+" },
      { name: "Housing Board Architect", salary: "₹44,900/month+" },
    ],
    topCompanies: ["Hafeez Contractor", "CP Kukreja Architects", "Morphogenesis", "RSP Design", "Gensler India", "HCP Design", "Sikka Associates", "Studio Lotus"],
    pros: ["Highly creative and visually rewarding career", "Can start own firm — entrepreneurial freedom", "Growing demand with urbanization and smart cities", "Blend of art and engineering", "Green architecture is a booming field", "Every project is unique and challenging"],
    cons: ["Long 5-year degree program", "Low starting salaries — takes years to earn well", "Long working hours, especially before deadlines", "Client management can be stressful", "Requires continuous portfolio building"],
    futureOutlook: "Smart cities, sustainable design, parametric architecture, and BIM are transforming the field. India's $1.4T infrastructure pipeline and urban growth ensure strong demand. Architects with tech skills (computational design, VR/AR visualization) will lead the next generation.",
    relatedCareers: [
      { name: "Civil Engineering", href: "/careers/civil" },
      { name: "Design (B.Des)", href: "/careers/design" },
      { name: "Interior Design", href: "/careers/interior-design" },
    ],
  },
  "mba": {
    title: "MBA / Management",
    stream: "Any Stream",
    tagline: "Lead businesses and drive strategic growth",
    overview: "MBA (Master of Business Administration) is one of the most versatile post-graduate degrees globally. It prepares professionals for leadership roles in marketing, finance, operations, HR, and strategy. In India, an MBA from a top B-school (IIMs, ISB, XLRI) can transform your career trajectory. It's pursued after any undergraduate degree — engineering, commerce, arts, or science.",
    whatTheyDo: "MBA graduates lead teams, develop business strategies, manage finances, drive marketing campaigns, optimize operations, and make data-driven decisions. They work as consultants, brand managers, investment bankers, product managers, and entrepreneurs.",
    dayInLife: [
      "Analyze market data and develop business strategies",
      "Lead cross-functional team meetings",
      "Present business proposals to senior leadership",
      "Review financial reports and budgets",
      "Negotiate with clients, vendors, and partners",
      "Develop and launch new products or campaigns",
    ],
    salary: { entry: "₹8-15 LPA (Tier 2 B-school)", mid: "₹15-30 LPA (IIM/ISB Fresher)", senior: "₹30-60 LPA (Director/VP)", top: "₹60 LPA - 2 Cr+ (CXO / Partner)" },
    skills: ["Business Strategy & Analytics", "Financial Management", "Marketing & Brand Management", "Leadership & Team Management", "Operations & Supply Chain", "Communication & Negotiation", "Data-Driven Decision Making", "Entrepreneurial Thinking"],
    education: [
      { path: "Any UG → CAT → IIM → MBA (2 years)", duration: "2 years (after graduation)" },
      { path: "Any UG → GMAT → ISB (1-year PGP)", duration: "1 year (after 2+ yrs work exp)" },
      { path: "B.Tech → Work Experience → MBA → Product/Consulting", duration: "2 years" },
      { path: "B.Com/BBA → MBA → Finance/Marketing", duration: "2 years" },
      { path: "Any UG → Executive MBA (Part-time)", duration: "2-3 years" },
    ],
    entranceExams: ["CAT (Common Admission Test)", "XAT (XLRI)", "GMAT (Global)", "SNAP (Symbiosis)", "NMAT (NMIMS)", "MAT", "CMAT"],
    topColleges: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "ISB Hyderabad", "XLRI Jamshedpur", "FMS Delhi", "IIM Lucknow", "IIM Kozhikode", "MDI Gurgaon", "SPJIMR Mumbai"],
    govtOpportunities: [
      { name: "UPSC CSE (IAS/IPS) — MBA background valued", salary: "₹56,100/month+" },
      { name: "RBI Grade B", salary: "₹77,208/month" },
      { name: "NABARD Manager", salary: "₹44,500/month+" },
      { name: "PSU Management Trainee (IOCL, ONGC, NTPC)", salary: "₹50,000-80,000/month" },
    ],
    topCompanies: ["McKinsey", "BCG", "Bain", "Goldman Sachs", "Google", "Amazon", "Hindustan Unilever", "P&G", "Aditya Birla Group", "Reliance", "Tata Group"],
    pros: ["Massive salary jump — especially from top B-schools", "Opens doors to consulting, banking, and leadership roles", "Strong alumni network for life", "Can pivot to any industry or function", "Develops holistic business thinking", "Entrepreneurship support and incubation at top B-schools"],
    cons: ["Very competitive — CAT has 2-3 lakh aspirants for ~5,000 IIM seats", "High fees — ₹20-25 LPA at IIMs", "ROI is poor from tier-3/4 B-schools", "Requires 2-3 years work experience for best outcomes", "Intense 2-year program with heavy workload"],
    futureOutlook: "MBA remains one of the best career accelerators. Product management, data analytics, and sustainability are emerging MBA specializations. AI-savvy managers who can bridge business and technology will be in highest demand. The startup ecosystem also values MBA graduates for operations and growth roles.",
    relatedCareers: [
      { name: "Chartered Accountancy (CA)", href: "/careers/ca" },
      { name: "Investment Banking", href: "/careers/finance" },
      { name: "Data Science", href: "/careers/data-science" },
    ],
  },
  "cs": {
    title: "Company Secretary (CS)",
    stream: "Commerce / Any",
    tagline: "Guardian of corporate governance",
    overview: "Company Secretary (CS) is a premier professional course governed by ICSI (Institute of Company Secretaries of India). CS professionals are experts in corporate law, governance, compliance, and secretarial practices. Every listed company in India is legally required to appoint a Company Secretary, ensuring constant demand. It's one of the best career paths for commerce students who love law and compliance.",
    whatTheyDo: "Company Secretaries ensure companies comply with legal and regulatory requirements. They manage board meetings, maintain statutory records, handle share transfers, advise on corporate governance, file regulatory returns with MCA/SEBI, and act as the bridge between the company, board, and regulators.",
    dayInLife: [
      "Prepare agendas and minutes for board meetings",
      "Ensure compliance with Companies Act, SEBI, and FEMA regulations",
      "File annual returns and forms with MCA (Ministry of Corporate Affairs)",
      "Advise the board on corporate governance best practices",
      "Handle share transfers and investor grievances",
      "Coordinate with auditors, legal teams, and regulators",
    ],
    salary: { entry: "₹5-8 LPA (Newly Qualified CS)", mid: "₹10-18 LPA (3-5 yrs)", senior: "₹18-30 LPA (Chief Compliance Officer)", top: "₹30-60 LPA (CS in Practice / Board Advisor)" },
    skills: ["Companies Act 2013", "SEBI Regulations & Listing Obligations", "Corporate Governance & Ethics", "Secretarial Standards & Practices", "FEMA & RBI Regulations", "Board Meeting Management", "Legal Drafting", "Compliance Management Systems"],
    education: [
      { path: "After 12th → CS Foundation → Executive → Professional", duration: "3-4 years" },
      { path: "After Graduation → CS Executive → Professional (skip Foundation)", duration: "2-3 years" },
      { path: "CS + LLB — powerful combination for corporate law", duration: "5-6 years" },
      { path: "CS + CA — dual qualification for finance & compliance", duration: "5-6 years" },
    ],
    entranceExams: ["CS Foundation (after 12th)", "CS Executive", "CS Professional"],
    topColleges: ["ICSI (Institute of Company Secretaries of India) — sole body", "Self-study + ICSI study centers across India"],
    govtOpportunities: [
      { name: "Govt Company Secretary (PSUs)", salary: "₹50,000/month+" },
      { name: "SEBI Legal Officer", salary: "₹44,500/month+" },
      { name: "MCA (Ministry of Corporate Affairs)", salary: "₹44,900/month+" },
      { name: "RBI Compliance Officer", salary: "₹50,000/month+" },
    ],
    topCompanies: ["Reliance Industries", "Tata Group", "Infosys", "HDFC Bank", "ICICI Bank", "Adani Group", "Wipro", "L&T", "CS in Practice (Own Firm)"],
    pros: ["Legally mandated role — every listed company needs a CS", "Can practice independently — own firm", "Combine with CA or LLB for powerful dual qualification", "Growing demand with increasing regulatory complexity", "Good work-life balance in corporate roles", "Board-level exposure from early career"],
    cons: ["Less well-known than CA — perception issue", "CS Professional exam is tough (~10-15% pass rate)", "Limited roles in smaller companies", "Articleship/training period has low stipend", "Career growth can plateau without additional qualifications"],
    futureOutlook: "With increasing regulatory complexity (GST, SEBI changes, ESG reporting), CS professionals are more important than ever. Corporate governance, ESG compliance, and data privacy laws are creating new demand areas. CS with tech skills for digital compliance will be highly valued.",
    relatedCareers: [
      { name: "Chartered Accountancy (CA)", href: "/careers/ca" },
      { name: "Law (LLB)", href: "/careers/law" },
      { name: "CMA", href: "/careers/cma" },
    ],
  },
  "cma": {
    title: "CMA (Cost & Management Accountant)",
    stream: "Commerce / Any",
    tagline: "Master the strategy behind every business number",
    overview: "CMA (Cost & Management Accountancy) is a professional qualification governed by ICMAI (Institute of Cost Accountants of India). CMAs specialize in cost management, financial planning, strategic decision-making, and performance evaluation. While less popular than CA, CMAs play a critical role in manufacturing, infrastructure, and government organizations where cost management is essential.",
    whatTheyDo: "CMAs analyze costs, prepare budgets, develop financial strategies, optimize resource allocation, conduct internal audits, and advise management on cost reduction and profitability improvement. They work in cost accounting, financial planning, and strategic management roles.",
    dayInLife: [
      "Analyze production costs and prepare cost sheets",
      "Develop budgets and financial forecasts",
      "Conduct variance analysis — actual vs budgeted costs",
      "Advise management on pricing strategies and cost optimization",
      "Prepare management reports and dashboards",
      "Ensure compliance with cost audit regulations",
    ],
    salary: { entry: "₹5-8 LPA (Newly Qualified CMA)", mid: "₹10-18 LPA (3-5 yrs)", senior: "₹18-30 LPA (CFO / Controller)", top: "₹30-50 LPA (VP Finance / Own Practice)" },
    skills: ["Cost Accounting & Analysis", "Financial Planning & Budgeting", "Management Accounting", "Strategic Financial Management", "Performance Evaluation", "SAP / ERP Systems", "Taxation (Direct & Indirect)", "Business Valuation"],
    education: [
      { path: "After 12th → CMA Foundation → Intermediate → Final", duration: "3-4 years" },
      { path: "After Graduation → CMA Intermediate → Final (skip Foundation)", duration: "2-3 years" },
      { path: "CMA + CA — dual qualification for complete finance expertise", duration: "5-6 years" },
      { path: "CMA + MBA — strategic management roles", duration: "5-6 years" },
    ],
    entranceExams: ["CMA Foundation (after 12th)", "CMA Intermediate", "CMA Final"],
    topColleges: ["ICMAI (Institute of Cost Accountants of India) — sole body", "Self-study + Regional councils"],
    govtOpportunities: [
      { name: "Cost Auditor (Govt mandated)", salary: "₹50,000/month+" },
      { name: "CAG Office (Cost Audit)", salary: "₹56,100/month+" },
      { name: "PSU Finance Manager (IOCL, NTPC, SAIL)", salary: "₹50,000-80,000/month" },
      { name: "Defence Accounts Service", salary: "₹44,900/month+" },
      { name: "Central Excise & GST Dept", salary: "₹44,900/month+" },
    ],
    topCompanies: ["Tata Steel", "Reliance Industries", "IOCL", "NTPC", "L&T", "Hindustan Unilever", "ITC", "JSW Steel", "Maruti Suzuki", "Own Practice"],
    pros: ["Mandatory cost audit in many industries — assured demand", "Lower competition than CA (fewer candidates)", "Strong in manufacturing and infrastructure sectors", "Can practice independently as Cost Accountant", "Government recognizes CMA for many finance roles", "Excellent for PSU and government job eligibility"],
    cons: ["Less brand recognition than CA", "Fewer private sector roles compared to CA", "Pass rates are moderate (~15-20%)", "Training period has low stipend", "Career options narrower without additional qualifications"],
    futureOutlook: "With India's manufacturing push (Make in India, PLI schemes), cost management professionals are increasingly important. ESG cost reporting, digital transformation of finance, and data-driven cost analytics are emerging areas. CMAs who combine cost expertise with technology skills will thrive.",
    relatedCareers: [
      { name: "Chartered Accountancy (CA)", href: "/careers/ca" },
      { name: "Company Secretary (CS)", href: "/careers/cs" },
      { name: "MBA (Finance)", href: "/careers/mba" },
    ],
  },
  "nursing": {
    title: "Nursing (B.Sc / GNM)",
    stream: "PCB / BiPC",
    tagline: "The backbone of healthcare — care, compassion, and skill",
    overview: "Nursing is one of the most essential and noble healthcare professions. Nurses provide direct patient care, assist doctors, manage hospital operations, and play a critical role in public health. India has a massive shortage of nurses — WHO recommends 3 nurses per 1,000 people, but India has only 1.7. This creates strong domestic and international demand. Nursing also offers excellent opportunities to work abroad (UK, USA, Australia, Gulf countries).",
    whatTheyDo: "Nurses monitor patient vital signs, administer medications, assist in surgeries, provide wound care, educate patients on health management, coordinate with doctors on treatment plans, and manage ward operations. Specialized nurses work in ICU, OT, neonatal, and community health.",
    dayInLife: [
      "Check patient vitals (BP, temperature, pulse, oxygen)",
      "Administer medications and injections as prescribed",
      "Assist doctors during surgeries and procedures",
      "Update patient records and care plans",
      "Educate patients and families on post-discharge care",
      "Manage ward operations and coordinate with healthcare team",
    ],
    salary: { entry: "₹2.5-5 LPA (Fresher India)", mid: "₹5-10 LPA (3-5 yrs)", senior: "₹10-18 LPA (Nursing Superintendent)", top: "₹15-40 LPA (Abroad: UK/USA/Gulf)" },
    skills: ["Patient Care & Clinical Skills", "Medication Administration", "Vital Signs Monitoring", "Wound Care & Infection Control", "Communication & Empathy", "Emergency & Critical Care", "Health Education & Counseling", "Medical Record Management"],
    education: [
      { path: "GNM (General Nursing & Midwifery) → Staff Nurse", duration: "3.5 years" },
      { path: "B.Sc Nursing → Staff Nurse / Head Nurse", duration: "4 years" },
      { path: "B.Sc Nursing → M.Sc Nursing → Teaching / Administration", duration: "6 years" },
      { path: "B.Sc Nursing → Abroad (IELTS + Registration) → International Career", duration: "4-5 years" },
      { path: "Post Basic B.Sc Nursing (for GNM holders)", duration: "2 years" },
    ],
    entranceExams: ["NEET UG (for B.Sc Nursing at Govt colleges)", "AIIMS Nursing Entrance", "JIPMER Nursing", "State Nursing CET"],
    topColleges: ["AIIMS Delhi (Nursing)", "CMC Vellore", "JIPMER", "RAK College of Nursing Mumbai", "Armed Forces Nursing College Pune", "Manipal College of Nursing", "PGIMER Chandigarh"],
    govtOpportunities: [
      { name: "Staff Nurse (Govt Hospital)", salary: "₹35,400/month" },
      { name: "AIIMS Nursing Officer", salary: "₹44,900/month" },
      { name: "Railway Nursing Staff", salary: "₹29,200/month+" },
      { name: "Armed Forces Nursing (Military Nursing Service)", salary: "₹56,100/month" },
      { name: "Community Health Nurse (PHC/CHC)", salary: "₹29,200/month+" },
    ],
    topCompanies: ["AIIMS", "Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Medanta", "Narayana Health", "Manipal Hospitals", "Abroad: NHS (UK), Kaiser (USA)"],
    pros: ["Massive demand — India and globally", "Excellent international opportunities (UK, USA, Australia, Gulf)", "Noble profession — directly save lives", "Government job security and benefits", "Multiple specialization options (ICU, OT, Neonatal)", "Can advance to nursing management and teaching"],
    cons: ["Physically demanding — long shifts (12 hours)", "Emotional stress from dealing with critical patients", "Lower starting salary in India compared to other healthcare roles", "Night shifts and weekend work is common", "Undervalued profession in India despite its importance"],
    futureOutlook: "India needs 2 million+ more nurses. The UK, USA, and Gulf countries actively recruit Indian nurses with attractive packages (₹30-80 LPA abroad). Nursing informatics, telehealth nursing, and specialized critical care nursing are emerging fields. The profession is gaining more recognition and better pay structures.",
    relatedCareers: [
      { name: "Medicine (MBBS)", href: "/careers/medicine" },
      { name: "Pharmacy", href: "/careers/pharmacy" },
      { name: "Psychology", href: "/careers/psychology" },
    ],
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    stream: "PCM / Science",
    tagline: "Shape the future with intelligent systems",
    overview: "AI & Machine Learning is the fastest-growing tech field globally. India is becoming an AI hub with demand from startups, MNCs, and government. AI/ML engineers build systems that learn from data — powering everything from chatbots and self-driving cars to medical diagnosis and fraud detection.",
    whatTheyDo: "AI/ML engineers design and train machine learning models, work with large datasets, build neural networks, develop NLP and computer vision systems, and deploy AI solutions at scale. They work closely with data engineers, product teams, and researchers.",
    dayInLife: ["Analyze datasets and preprocess data for model training", "Build and fine-tune ML models using Python/TensorFlow/PyTorch", "Experiment with different algorithms and architectures", "Deploy models to production and monitor performance", "Read research papers and stay updated with latest AI advances", "Collaborate with product teams to integrate AI features"],
    salary: { entry: "₹8-15 LPA", mid: "₹18-35 LPA", senior: "₹35-60 LPA", top: "₹60-1.5 Cr+" },
    skills: ["Python", "Mathematics & Statistics", "Machine Learning", "Deep Learning", "TensorFlow/PyTorch", "NLP", "Computer Vision", "Data Engineering", "MLOps", "Linear Algebra"],
    education: [
      { path: "B.Tech CSE/AI → M.Tech AI/ML", duration: "4-6 years" },
      { path: "B.Sc Mathematics/Statistics → MS in AI", duration: "5-6 years" },
      { path: "B.Tech + Online AI/ML Specialization", duration: "4-5 years" },
      { path: "PhD in AI/ML (Research path)", duration: "7-8 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "GATE (CS/DA)", "GRE (for MS abroad)"],
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IISc Bangalore", "IIIT Hyderabad", "CMU", "Stanford", "MIT"],
    govtOpportunities: [
      { name: "DRDO AI Research Scientist", salary: "₹56,100-1,82,200/month" },
      { name: "ISRO Data Scientist", salary: "₹56,100-1,77,500/month" },
      { name: "NIC AI Projects", salary: "₹44,900-1,42,400/month" },
      { name: "CDAC Research Engineer", salary: "₹40,000-1,20,000/month" },
    ],
    topCompanies: ["Google DeepMind", "OpenAI", "Microsoft Research", "Meta AI", "Amazon", "NVIDIA", "Flipkart", "Ola", "Fractal Analytics", "Mu Sigma"],
    pros: ["Highest-paying tech career currently", "Cutting-edge and intellectually stimulating work", "Remote-friendly with global opportunities", "Huge demand exceeding supply of talent", "Can be applied to any industry — healthcare, finance, gaming"],
    cons: ["Requires strong math and statistics foundation", "Field evolves very rapidly — constant learning needed", "PhD often preferred for research roles", "Can be overhyped — many roles are more data engineering than AI", "Ethical concerns around AI bias and job displacement"],
    futureOutlook: "AI is transforming every industry. India's National AI Strategy, growing AI startups, and global demand make this one of the most future-proof careers. Generative AI, autonomous systems, and AI in healthcare will drive massive growth through 2030 and beyond.",
    relatedCareers: [
      { name: "Software Engineering", href: "/careers/cse" },
      { name: "Data Science", href: "/careers/data-science" },
      { name: "Electronics & Communication", href: "/careers/ece" },
    ],
  },
  "eee": {
    title: "Electrical & Electronics Engineering (EEE)",
    stream: "PCM / Science",
    tagline: "Power the world with electrical innovation",
    overview: "EEE combines electrical power systems with electronics. It covers power generation, transmission, electric vehicles, renewable energy, and automation. With India's push for electrification, smart grids, and EVs, EEE engineers are in high demand across government and private sectors.",
    whatTheyDo: "EEE engineers design and maintain electrical systems — from power plants and transmission lines to electric vehicles and solar installations. They work on power electronics, control systems, automation, and renewable energy projects.",
    dayInLife: ["Design electrical circuits and power systems", "Test and troubleshoot electrical equipment", "Work on renewable energy and EV projects", "Simulate systems using MATLAB/Simulink", "Coordinate with civil and mechanical teams on projects", "Ensure safety compliance and quality standards"],
    salary: { entry: "₹4-8 LPA", mid: "₹8-18 LPA", senior: "₹18-30 LPA", top: "₹30-50 LPA" },
    skills: ["Power Systems", "Control Systems", "Electrical Machines", "Power Electronics", "Renewable Energy", "MATLAB/Simulink", "PLC/SCADA", "AutoCAD Electrical", "IoT", "EV Technology"],
    education: [
      { path: "B.Tech EEE → Job/M.Tech", duration: "4-6 years" },
      { path: "Diploma in EEE → B.Tech Lateral Entry", duration: "5-6 years" },
      { path: "B.Tech + GATE → PSU/M.Tech", duration: "4-6 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "GATE (EE)", "State CET/EAMCET", "UPSC ESE"],
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Kharagpur", "NIT Trichy", "NIT Warangal", "BITS Pilani", "VIT Vellore"],
    govtOpportunities: [
      { name: "NTPC/BHEL/PowerGrid Engineer", salary: "₹50,000-1,50,000/month" },
      { name: "UPSC ESE (Electrical)", salary: "₹56,100-2,15,900/month" },
      { name: "State Electricity Board", salary: "₹35,400-1,12,400/month" },
      { name: "Indian Railways (Electrical)", salary: "₹35,400-1,12,400/month" },
      { name: "ISRO/DRDO Scientist", salary: "₹56,100-1,77,500/month" },
    ],
    topCompanies: ["Siemens", "ABB", "Schneider Electric", "L&T", "Tata Power", "Adani Green", "Tesla", "Ola Electric", "NTPC", "BHEL"],
    pros: ["Strong government job prospects through GATE/ESE", "Growing EV and renewable energy sector", "Stable demand across power sector", "Good PSU salaries with job security", "Can transition to software/automation roles"],
    cons: ["Field work can be physically demanding", "Lower starting salaries in private sector vs CSE", "Core jobs concentrated in specific locations", "Slow career growth in traditional power companies", "Requires GATE for best opportunities"],
    futureOutlook: "India's $50 billion renewable energy push, EV revolution, and smart grid modernization will drive huge demand for EEE engineers. Electric vehicles, solar/wind energy, and battery technology are the future growth areas.",
    relatedCareers: [
      { name: "Mechanical Engineering", href: "/careers/mechanical" },
      { name: "Electronics & Communication", href: "/careers/ece" },
      { name: "Civil Engineering", href: "/careers/civil" },
    ],
  },
  "dentistry": {
    title: "Dentistry (BDS / MDS)",
    stream: "PCB / BiPC",
    tagline: "Create healthy smiles and transform lives",
    overview: "Dentistry is a respected healthcare profession focused on oral health. BDS graduates can practice as dentists, and with MDS specialization, earn significantly more. With growing awareness of dental health and cosmetic dentistry in India, demand for dentists is steadily increasing.",
    whatTheyDo: "Dentists diagnose and treat oral health issues — from routine cleanings and fillings to root canals, braces, implants, and cosmetic procedures. MDS specialists focus on orthodontics, oral surgery, prosthodontics, or periodontics.",
    dayInLife: ["Examine patients and diagnose dental conditions", "Perform procedures — fillings, extractions, root canals", "Take and analyze dental X-rays", "Advise patients on oral hygiene and preventive care", "Manage clinic operations and staff", "Stay updated on new dental technologies and materials"],
    salary: { entry: "₹4-8 LPA", mid: "₹8-15 LPA", senior: "₹15-30 LPA", top: "₹30-50+ LPA (own clinic)" },
    skills: ["Clinical Dentistry", "Oral Surgery", "Patient Communication", "Dental Materials", "Radiology", "Prosthodontics", "Orthodontics", "Business Management", "Infection Control"],
    education: [
      { path: "12th PCB → NEET → BDS", duration: "5 years (incl. internship)" },
      { path: "BDS → NEET MDS → MDS Specialization", duration: "3 years after BDS" },
      { path: "BDS → MBA Healthcare", duration: "2 years after BDS" },
    ],
    entranceExams: ["NEET UG", "NEET MDS", "AIIMS PG Dental", "State Dental CET"],
    topColleges: ["Maulana Azad Dental College", "Manipal MCODS", "SRM Dental College", "AB Shetty Dental College", "Government Dental Colleges"],
    govtOpportunities: [
      { name: "Government Hospital Dentist", salary: "₹56,100-1,77,500/month" },
      { name: "Army/Navy/Air Force Dental Corps", salary: "₹56,100+/month + allowances" },
      { name: "District Hospital Dental Surgeon", salary: "₹40,000-1,20,000/month" },
      { name: "PHC Dental Officer", salary: "₹35,400-1,00,000/month" },
    ],
    topCompanies: ["Clove Dental", "Sabka Dentist", "Apollo Dental", "Dental Hub", "MyDentist", "Private Practice"],
    pros: ["Can open own clinic — high earning potential", "Respected healthcare profession", "Good work-life balance compared to MBBS", "Growing demand for cosmetic dentistry", "Less stressful than general medicine"],
    cons: ["BDS salaries are lower than MBBS initially", "NEET MDS is very competitive for good specializations", "Setting up own clinic requires significant investment", "Standing for long hours during procedures", "Market saturation in metro cities"],
    futureOutlook: "Cosmetic dentistry, dental implants, and digital dentistry (3D printing, AI diagnosis) are transforming the field. Growing health awareness and dental insurance coverage in India will drive demand. Tele-dentistry is also emerging as a new avenue.",
    relatedCareers: [
      { name: "Medicine (MBBS)", href: "/careers/medicine" },
      { name: "Pharmacy", href: "/careers/pharmacy" },
      { name: "Nursing", href: "/careers/nursing" },
    ],
  },
  "civil-services": {
    title: "Civil Services (IAS / IPS / IFS)",
    stream: "Any Stream",
    tagline: "Serve the nation and shape policy",
    overview: "Indian Civil Services (IAS, IPS, IFS) are the most prestigious administrative careers in India. Officers wield significant authority in governance, law enforcement, and diplomacy. The UPSC CSE exam is one of the toughest in the world, but the rewards — power, respect, and the ability to create real change — are unmatched.",
    whatTheyDo: "IAS officers manage districts, implement government policies, and oversee development programs. IPS officers lead law enforcement. IFS officers represent India in foreign countries. They are the backbone of Indian administration and governance.",
    dayInLife: ["Review district administration reports and development metrics", "Meet with department heads and coordinate policy implementation", "Address public grievances and resolve local issues", "Attend meetings with state/central government officials", "Oversee law and order (IPS) or diplomatic missions (IFS)", "Make critical decisions affecting millions of people"],
    salary: { entry: "₹56,100/month + DA + perks", mid: "₹1,00,000-1,50,000/month + perks", senior: "₹1,82,200-2,50,000/month + perks", top: "₹2,50,000/month + (Cabinet Secretary)" },
    skills: ["Public Administration", "Leadership", "Decision Making", "Policy Analysis", "Communication", "Crisis Management", "Current Affairs", "Ethics & Integrity", "Negotiation"],
    education: [
      { path: "Any Graduation → UPSC CSE → LBSNAA Training", duration: "1-3 years prep + 2 years training" },
      { path: "BA Political Science/History/Sociology → UPSC", duration: "3 + 1-3 years" },
      { path: "Engineering/Medical degree → UPSC", duration: "4-5 + 1-3 years" },
    ],
    entranceExams: ["UPSC CSE (Prelims + Mains + Interview)", "State PCS", "IFS (Indian Forest Service)"],
    topColleges: ["LBSNAA Mussoorie (Training)", "Sardar Vallabhbhai Patel NPA (IPS)", "Any top university for graduation", "Coaching: Vajiram, Vision IAS, Unacademy"],
    govtOpportunities: [
      { name: "IAS (District Collector/Secretary)", salary: "₹56,100-2,50,000/month + perks" },
      { name: "IPS (SP/DGP)", salary: "₹56,100-2,25,000/month + perks" },
      { name: "IFS (Ambassador/High Commissioner)", salary: "₹56,100-2,25,000/month + foreign allowances" },
      { name: "IRS (Tax Commissioner)", salary: "₹56,100-2,15,900/month" },
      { name: "State PCS Officer", salary: "₹40,000-1,80,000/month" },
    ],
    topCompanies: ["Government of India", "State Governments", "United Nations (post-retirement)", "Think Tanks", "Policy Institutes"],
    pros: ["Most respected career in India — immense social status", "Power to create real change and impact millions", "Job security with excellent perks (housing, car, staff)", "Diverse postings — district, state, central, international", "Fast career progression with increasing responsibility"],
    cons: ["UPSC is extremely competitive — <0.1% selection rate", "Preparation takes 1-3+ years with no guaranteed success", "Frequent transfers and postings in remote areas", "Political interference can be challenging", "Work-life balance can suffer especially in field postings"],
    futureOutlook: "Civil services remain the most aspirational career in India. With governance reforms, digital India initiatives, and growing international diplomacy, the role of civil servants is evolving. Technology and data-driven governance are creating new opportunities within the service.",
    relatedCareers: [
      { name: "Law", href: "/careers/law" },
      { name: "MBA (Public Policy)", href: "/careers/mba" },
      { name: "Journalism", href: "/careers/journalism" },
    ],
  },
  "marketing": {
    title: "Digital Marketing & Marketing Management",
    stream: "Commerce / Any",
    tagline: "Drive growth through creative strategy and data",
    overview: "Digital Marketing has exploded with India's internet boom. From SEO and social media to performance marketing and brand strategy, marketers drive business growth. With every company needing an online presence, demand for skilled digital marketers is at an all-time high. It's one of the most accessible and fast-growing career paths.",
    whatTheyDo: "Digital marketers plan and execute online campaigns, manage social media, optimize websites for search engines (SEO), run paid advertising (Google/Meta Ads), create content strategies, analyze marketing data, and drive customer acquisition and retention.",
    dayInLife: ["Plan and schedule social media content across platforms", "Analyze campaign performance metrics and ROI", "Optimize Google Ads and Meta Ads campaigns", "Create content briefs and coordinate with designers", "Monitor SEO rankings and implement improvements", "Prepare marketing reports and present to stakeholders"],
    salary: { entry: "₹3-6 LPA", mid: "₹8-15 LPA", senior: "₹15-30 LPA", top: "₹30-50+ LPA (CMO/VP Marketing)" },
    skills: ["SEO/SEM", "Google Ads", "Meta Ads", "Content Marketing", "Social Media Management", "Analytics", "Email Marketing", "Copywriting", "Marketing Automation", "Data Analysis"],
    education: [
      { path: "BBA/B.Com → MBA Marketing", duration: "3 + 2 years" },
      { path: "Any Degree → Digital Marketing Certification", duration: "3-6 months" },
      { path: "BJMC → Marketing specialization", duration: "3-4 years" },
      { path: "BBA → Google/HubSpot Certifications → Job", duration: "3 years + certs" },
    ],
    entranceExams: ["CAT/MAT (for MBA Marketing)", "CUET", "IPM Aptitude Test"],
    topColleges: ["IIM Ahmedabad", "IIM Bangalore", "MICA Ahmedabad", "FMS Delhi", "XLRI Jamshedpur", "SP Jain Mumbai"],
    govtOpportunities: [
      { name: "DAVP (Directorate of Advertising)", salary: "₹35,400-1,12,400/month" },
      { name: "Information & Broadcasting Ministry", salary: "₹44,900-1,42,400/month" },
      { name: "PSU Marketing Officer", salary: "₹40,000-1,40,000/month" },
    ],
    topCompanies: ["Google", "Meta", "Amazon", "Flipkart", "HUL", "P&G", "Ogilvy", "Dentsu", "Zomato", "Swiggy", "CRED", "Razorpay"],
    pros: ["Low barrier to entry — can start with certifications", "Freelancing and remote work opportunities", "Creative and dynamic work environment", "High demand across every industry", "Can start your own agency or consultancy"],
    cons: ["Very competitive entry-level market", "Constant platform changes require continuous learning", "Results pressure — ROI-driven can be stressful", "Long hours during campaign launches", "Many low-quality courses in the market"],
    futureOutlook: "With India's digital economy growing rapidly, marketing careers will only expand. AI-powered marketing, influencer marketing, voice search optimization, and video-first strategies are the future. Brands are increasing digital ad spend year over year, ensuring strong demand.",
    relatedCareers: [
      { name: "MBA", href: "/careers/mba" },
      { name: "Journalism", href: "/careers/journalism" },
      { name: "Design (UX/UI)", href: "/careers/design" },
    ],
  },
  "design": {
    title: "Design (B.Des / NID)",
    stream: "Any Stream",
    tagline: "Create experiences that delight and solve problems",
    overview: "Design is one of the most creative and fast-growing career fields. Designers shape how products look, feel, and function — from mobile apps and websites to clothing, furniture, and automobiles. India's design industry is booming with the growth of tech companies, D2C brands, and digital platforms. Top design institutes like NID, NIFT, and IIT IDC produce world-class designers who work globally.",
    whatTheyDo: "Designers research user needs, create wireframes and prototypes, design visual interfaces, develop brand identities, craft fashion collections, and design products and spaces. They use tools like Figma, Adobe Suite, and 3D modeling software. UX/UI designers work closely with developers to build digital products.",
    dayInLife: [
      "Research user behavior and market trends",
      "Sketch concepts and create wireframes",
      "Design high-fidelity mockups in Figma or Adobe XD",
      "Conduct user testing and gather feedback",
      "Collaborate with developers and product managers",
      "Present design concepts to clients or stakeholders",
    ],
    salary: { entry: "₹4-8 LPA (Fresher)", mid: "₹10-20 LPA (3-5 yrs)", senior: "₹20-40 LPA (Lead/Director)", top: "₹40-80 LPA (Design Director / VP Design / Own Studio)" },
    skills: ["UX/UI Design (Figma, Sketch, Adobe XD)", "Visual Design & Typography", "User Research & Testing", "Prototyping & Wireframing", "Adobe Creative Suite (Photoshop, Illustrator)", "Design Thinking & Problem Solving", "Color Theory & Composition", "Communication & Presentation"],
    education: [
      { path: "NID DAT → B.Des (4 years)", duration: "4 years" },
      { path: "NIFT Entrance → B.Des Fashion/Textile/Accessory", duration: "4 years" },
      { path: "UCEED → B.Des at IIT (Bombay, Delhi, Guwahati)", duration: "4 years" },
      { path: "Any degree → M.Des (NID/IIT/NIFT)", duration: "2 years" },
      { path: "Self-taught → Portfolio → UX/UI Career", duration: "1-2 years" },
    ],
    entranceExams: ["NID DAT (Design Aptitude Test)", "NIFT Entrance", "UCEED (IIT B.Des)", "CEED (IIT M.Des)", "State Design CET"],
    topColleges: ["NID Ahmedabad", "NID Bangalore", "NIFT Delhi", "IIT Bombay (IDC)", "IIT Delhi (Design)", "IIT Guwahati (Design)", "Srishti Manipal", "DJ Academy of Design"],
    govtOpportunities: [
      { name: "NID/NIFT Faculty", salary: "₹56,100/month+" },
      { name: "Govt Design Consultant (Smart City)", salary: "₹50,000/month+" },
      { name: "National Design Policy Projects", salary: "₹44,900/month+" },
      { name: "Indian Railways Design (Station Redesign)", salary: "₹35,400/month+" },
    ],
    topCompanies: ["Google", "Apple", "Microsoft", "Flipkart", "Swiggy", "Razorpay", "CRED", "PhonePe", "Titan", "Fabindia", "Nike India", "Studio Lotus"],
    pros: ["Highly creative and fulfilling career", "UX/UI design pays as well as software engineering", "Can freelance or start own design studio", "Growing demand across tech, fashion, and product industries", "Design thinking is valued in leadership roles", "Remote work friendly — especially in UX/UI"],
    cons: ["Subjective work — client feedback can be frustrating", "Top design colleges are very competitive (NID, NIFT)", "Fashion/product design has seasonal demand", "Requires constant portfolio updates", "Non-tech design roles may have lower salaries"],
    futureOutlook: "Design is becoming central to business strategy. AI-powered design tools, AR/VR experiences, and sustainable design are the future. India's D2C boom and tech growth ensure strong demand for UX/UI, product, and brand designers. Designers who understand business and technology will be most valued.",
    relatedCareers: [
      { name: "Architecture", href: "/careers/architecture" },
      { name: "Software Engineering (UX)", href: "/careers/cse" },
      { name: "Journalism (Content Design)", href: "/careers/journalism" },
    ],
  },
  "automobile": {
    title: "Automobile Engineering",
    stream: "PCM / Science",
    tagline: "Design the vehicles that drive the future",
    overview: "Automobile Engineering focuses on the design, development, manufacturing, and testing of vehicles — from cars and bikes to trucks and electric vehicles. India is the world's 3rd largest automobile market, and with the EV revolution, this field is experiencing a massive transformation. Engineers work on engine design, vehicle dynamics, safety systems, and increasingly on electric powertrains and autonomous driving.",
    whatTheyDo: "Automobile engineers design vehicle components, develop powertrains, test vehicle performance and safety, work on EV battery systems, improve fuel efficiency, and manage manufacturing processes. They use CAD/CAE tools, conduct crash simulations, and work on production lines.",
    dayInLife: [
      "Design vehicle components using CATIA/SolidWorks",
      "Run simulations for crash testing and aerodynamics",
      "Test engine performance and emissions on dynamometers",
      "Collaborate with production teams on assembly line optimization",
      "Research new materials and lightweight structures",
      "Work on EV battery management and charging systems",
    ],
    salary: { entry: "₹4-7 LPA (Fresher)", mid: "₹8-18 LPA (3-5 yrs)", senior: "₹18-35 LPA (8-10 yrs)", top: "₹35-60 LPA (VP Engineering / CTO)" },
    skills: ["Automotive Design (CATIA, SolidWorks)", "Vehicle Dynamics & NVH", "IC Engines & Powertrains", "EV Technology & Battery Systems", "CAE/FEA (ANSYS, HyperMesh)", "Manufacturing Processes", "Automotive Electronics", "Quality Management (Six Sigma)"],
    education: [
      { path: "B.Tech Automobile/Mechanical → Auto Industry", duration: "4 years" },
      { path: "B.Tech → M.Tech Automotive Engineering", duration: "6 years" },
      { path: "B.Tech → GATE → M.Tech at IIT/NIT", duration: "6 years" },
      { path: "Diploma in Automobile → B.Tech Lateral Entry", duration: "5 years" },
      { path: "B.Tech → MS Abroad (Automotive Engineering)", duration: "6 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "State CET/EAMCET", "GATE (Mechanical)"],
    topColleges: ["IIT Madras", "IIT Delhi", "NIT Warangal", "VIT Vellore", "Manipal Institute", "PSG Tech Coimbatore", "College of Engineering Pune", "Madras Institute of Technology"],
    govtOpportunities: [
      { name: "ISRO Vehicle Assembly Engineer", salary: "₹56,100/month" },
      { name: "DRDO Vehicle Research", salary: "₹56,100/month" },
      { name: "Indian Railways (Mechanical)", salary: "₹35,400/month+" },
      { name: "BHEL/HAL (via GATE)", salary: "₹40,000-60,000/month" },
      { name: "Defence (EME Corps)", salary: "₹56,100/month" },
    ],
    topCompanies: ["Tata Motors", "Maruti Suzuki", "Mahindra", "Hyundai India", "Bajaj Auto", "TVS Motor", "Ola Electric", "Ather Energy", "Tesla", "BMW", "Mercedes-Benz India", "Bosch"],
    pros: ["India's booming auto market ensures job availability", "EV revolution creating exciting new roles", "Hands-on work — see your designs on roads", "Good PSU opportunities through GATE", "Can transition to motorsport engineering", "Global career opportunities with MNCs"],
    cons: ["Core auto jobs often in factory locations", "Lower starting salaries than IT/software", "Physically demanding — factory floor work", "Cyclical industry — affected by economic slowdowns", "Requires continuous upskilling for EV tech"],
    futureOutlook: "India's EV policy targets 30% electric vehicles by 2030. Companies like Tata, Ola Electric, and Ather are hiring aggressively. Connected cars, autonomous driving, hydrogen fuel cells, and lightweight materials are the future. Automobile engineers with EV and software skills will be in highest demand.",
    relatedCareers: [
      { name: "Mechanical Engineering", href: "/careers/mechanical" },
      { name: "Electrical Engineering", href: "/careers/eee" },
      { name: "Aerospace Engineering", href: "/careers/aerospace" },
    ],
  },
  "aerospace": {
    title: "Aerospace Engineering",
    stream: "PCM / Science",
    tagline: "Reach for the stars — literally",
    overview: "Aerospace Engineering deals with the design, development, and testing of aircraft, spacecraft, satellites, missiles, and drones. India's aerospace sector is booming with ISRO's space missions, HAL's aircraft manufacturing, and the emerging private space industry (Skyroot, Agnikul). It's one of the most prestigious and intellectually challenging engineering fields.",
    whatTheyDo: "Aerospace engineers design aircraft structures, develop propulsion systems, work on aerodynamics and flight mechanics, build satellite systems, test components in wind tunnels, and ensure flight safety. They work in defence, space agencies, airlines, and private aerospace companies.",
    dayInLife: [
      "Design aircraft/spacecraft components using CATIA/NX",
      "Run CFD simulations for aerodynamic analysis",
      "Test materials and structures in controlled environments",
      "Analyze flight test data and performance metrics",
      "Collaborate with avionics and propulsion teams",
      "Review safety protocols and compliance standards",
    ],
    salary: { entry: "₹5-10 LPA (Fresher)", mid: "₹12-25 LPA (3-5 yrs)", senior: "₹25-45 LPA (8-10 yrs)", top: "₹45-80 LPA (Chief Engineer / Director)" },
    skills: ["Aerodynamics & Flight Mechanics", "Propulsion Systems", "Aircraft Structures & Materials", "CFD (Computational Fluid Dynamics)", "CATIA/NX/ANSYS", "Avionics & Control Systems", "Orbital Mechanics", "Composite Materials"],
    education: [
      { path: "B.Tech Aerospace → ISRO/HAL/DRDO", duration: "4 years" },
      { path: "B.Tech → M.Tech Aerospace at IIT/IISc", duration: "6 years" },
      { path: "B.Tech → GATE → PSU/Research Labs", duration: "4-5 years" },
      { path: "B.Tech → MS Abroad (Aerospace) → Global Career", duration: "6 years" },
      { path: "B.Tech → PhD → Space Research/Faculty", duration: "8-9 years" },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "GATE (Aerospace/Mechanical)", "ISRO Centralized Recruitment", "HAL Management Trainee Exam"],
    topColleges: ["IIT Bombay", "IIT Madras", "IIT Kanpur", "IISc Bangalore", "IIT Kharagpur", "Manipal Institute", "PEC Chandigarh", "MIT Pune", "Amity University"],
    govtOpportunities: [
      { name: "ISRO Scientist/Engineer SC", salary: "₹56,100/month" },
      { name: "DRDO Scientist 'B'", salary: "₹56,100/month" },
      { name: "HAL Management Trainee", salary: "₹40,000-60,000/month" },
      { name: "Indian Air Force (Technical Branch)", salary: "₹56,100/month + perks" },
      { name: "NAL (National Aerospace Labs)", salary: "₹56,100/month" },
    ],
    topCompanies: ["ISRO", "HAL", "DRDO", "Boeing India", "Airbus India", "Lockheed Martin", "GE Aviation", "Rolls-Royce India", "Skyroot Aerospace", "Agnikul Cosmos", "Tata Advanced Systems"],
    pros: ["One of the most prestigious engineering branches", "Work on cutting-edge technology — rockets, satellites, aircraft", "Strong government job opportunities (ISRO, DRDO, HAL)", "India's growing private space industry", "Intellectual satisfaction of solving complex problems", "Global career opportunities"],
    cons: ["Very limited core aerospace jobs in India", "Highly specialized — fewer lateral movement options", "Requires strong fundamentals in physics and math", "Many graduates end up in IT/software instead", "Research roles often require higher degrees"],
    futureOutlook: "India's space sector is being opened to private players (IN-SPACe policy). ISRO's Gaganyaan mission, private launch vehicles (Skyroot PSLV), and defence modernization are creating unprecedented demand. Drones, urban air mobility (flying taxis), and satellite internet are emerging areas.",
    relatedCareers: [
      { name: "Mechanical Engineering", href: "/careers/mechanical" },
      { name: "Automobile Engineering", href: "/careers/automobile" },
      { name: "Electronics & Communication", href: "/careers/ece" },
    ],
  },
  "hotel-management": {
    title: "Hotel Management & Hospitality",
    stream: "Any Stream",
    tagline: "Create world-class experiences in hospitality",
    overview: "Hotel Management is a dynamic career path covering hotels, restaurants, resorts, cruise ships, airlines, and event management. India's hospitality industry is worth $250+ billion and growing rapidly with tourism, business travel, and the food & beverage boom. Top hotel management graduates from IHMs work in luxury hotels worldwide and can rise to General Manager positions with attractive salaries and global exposure.",
    whatTheyDo: "Hotel management professionals manage hotel operations, oversee food & beverage services, handle guest relations, manage events, ensure quality standards, and lead hospitality teams. They work in front office, housekeeping, kitchen management, and sales & marketing roles.",
    dayInLife: [
      "Oversee daily hotel/restaurant operations",
      "Manage guest check-ins, complaints, and VIP services",
      "Coordinate food & beverage service and kitchen operations",
      "Train and supervise hospitality staff",
      "Monitor revenue, occupancy rates, and budgets",
      "Plan and execute events, conferences, and banquets",
    ],
    salary: { entry: "₹3-6 LPA (Fresher India)", mid: "₹8-15 LPA (3-5 yrs)", senior: "₹15-30 LPA (8-10 yrs)", top: "₹30-60 LPA (GM / VP Operations / Own Restaurant)" },
    skills: ["Hotel Operations Management", "Food & Beverage Management", "Guest Relations & Customer Service", "Revenue Management", "Event Planning & Coordination", "Culinary Arts & Kitchen Management", "Communication & Leadership", "Financial Management"],
    education: [
      { path: "NCHMCT JEE → B.Sc Hotel Management (IHM)", duration: "3 years" },
      { path: "BHM (Bachelor of Hotel Management)", duration: "4 years" },
      { path: "Hotel Management Diploma → Operations", duration: "1-2 years" },
      { path: "B.Sc HM → MBA Hospitality → Management", duration: "5 years" },
      { path: "Culinary Arts Diploma → Chef Career", duration: "1-3 years" },
    ],
    entranceExams: ["NCHMCT JEE (National Council for Hotel Management)", "AIMA UGAT", "State HM CET", "Manipal Entrance"],
    topColleges: ["IHM Mumbai (Dadar)", "IHM Delhi (Pusa)", "IHM Bangalore", "IHM Hyderabad", "IHM Chennai", "Welcome Group Graduate School (Manipal)", "Christ University", "Amity University"],
    govtOpportunities: [
      { name: "ITDC (India Tourism Development Corporation)", salary: "₹35,400/month+" },
      { name: "State Tourism Department", salary: "₹35,400/month+" },
      { name: "Indian Railways Catering (IRCTC)", salary: "₹35,400/month+" },
      { name: "Air India Catering", salary: "₹30,000/month+" },
      { name: "Govt Guest House Manager", salary: "₹35,400/month+" },
    ],
    topCompanies: ["Taj Hotels (IHCL)", "Oberoi Hotels", "ITC Hotels", "Marriott", "Hyatt", "Hilton", "Accor", "Radisson", "Leela Palace", "Zomato", "Swiggy", "OYO"],
    pros: ["Work in luxury environments worldwide", "Global career opportunities — work in any country", "Free meals and accommodation in many roles", "Diverse career paths (hotels, airlines, cruise, events)", "Can start own restaurant or hospitality business", "Meet people from diverse backgrounds"],
    cons: ["Long and irregular working hours (12-16 hrs)", "Physically demanding — always on your feet", "Weekend and holiday work is mandatory", "Starting salaries are relatively low in India", "Guest complaints can be stressful", "Career growth can be slow without switching companies"],
    futureOutlook: "India's tourism is projected to reach $512 billion by 2028. Luxury hospitality, food-tech startups, experiential travel, and eco-tourism are growing rapidly. Hotel management graduates with digital marketing, revenue management, and sustainability skills will lead the next wave.",
    relatedCareers: [
      { name: "Aviation", href: "/careers/aviation" },
      { name: "MBA", href: "/careers/mba" },
      { name: "Design (Interior)", href: "/careers/interior-design" },
    ],
  },
  "aviation": {
    title: "Aviation (Pilot / Cabin Crew / Airport Management)",
    stream: "PCM / Any Stream",
    tagline: "Take your career to new heights — literally",
    overview: "Aviation is one of the most glamorous and well-paying career paths. India is the world's 3rd largest aviation market with 700+ million passengers expected by 2030. Careers range from being a commercial pilot to cabin crew, air traffic controller, airport manager, and aircraft maintenance engineer. The industry offers travel, adventure, and excellent compensation.",
    whatTheyDo: "Pilots fly commercial aircraft carrying passengers and cargo. Cabin crew ensure passenger safety and comfort. Airport managers handle terminal operations, security, and logistics. Aircraft maintenance engineers (AMEs) ensure aircraft are safe and airworthy. Air traffic controllers manage aircraft movements.",
    dayInLife: [
      "Pre-flight briefing and aircraft inspection (Pilot/AME)",
      "Navigate and operate aircraft systems during flight (Pilot)",
      "Ensure passenger safety, serve meals, handle emergencies (Cabin Crew)",
      "Manage airport terminal operations and passenger flow (Airport Mgmt)",
      "Coordinate aircraft takeoff/landing sequences (ATC)",
      "Conduct routine and scheduled aircraft maintenance (AME)",
    ],
    salary: { entry: "₹5-12 LPA (Co-Pilot / Cabin Crew)", mid: "₹15-35 LPA (Captain / Senior Crew)", senior: "₹35-60 LPA (Senior Captain)", top: "₹60 LPA - 1.5 Cr (Chief Pilot / Airline VP)" },
    skills: ["Aviation Regulations (DGCA)", "Navigation & Meteorology", "Aircraft Systems Knowledge", "Communication & Decision Making", "Emergency Procedures", "Customer Service Excellence", "Physical Fitness & Grooming", "Stress Management"],
    education: [
      { path: "12th PCM → CPL (Commercial Pilot License) → Airline", duration: "2-3 years + hours building" },
      { path: "12th Any → Cabin Crew Training → Airlines", duration: "6 months - 1 year" },
      { path: "12th PCM → AME (Aircraft Maintenance Engineering)", duration: "3 years" },
      { path: "12th → BBA Aviation → Airport Management", duration: "3 years" },
      { path: "Graduate → MBA Aviation → Airport/Airline Management", duration: "2 years" },
    ],
    entranceExams: ["DGCA CPL Exams (for Pilots)", "IGRUA Entrance (for Pilot training)", "AME CET (Aircraft Maintenance)", "Air India / IndiGo Cabin Crew Selection"],
    topColleges: ["IGRUA (Indira Gandhi Rashtriya Uran Akademi)", "Rajiv Gandhi Aviation Academy", "Bombay Flying Club", "National Flying Training Institute (Gondia)", "RGNAU", "Hindustan Institute of Technology (AME)"],
    govtOpportunities: [
      { name: "Indian Air Force Pilot", salary: "₹56,100/month + flying allowance" },
      { name: "Air India Pilot", salary: "₹2-5 LPA/month (Capt)" },
      { name: "AAI (Airports Authority of India) — ATC", salary: "₹40,000-1,40,000/month" },
      { name: "AAI Airport Manager", salary: "₹40,000-1,20,000/month" },
      { name: "DGCA Inspector", salary: "₹44,900/month+" },
    ],
    topCompanies: ["IndiGo", "Air India", "SpiceJet", "Vistara", "Akasa Air", "GoFirst", "Emirates", "Singapore Airlines", "Lufthansa", "Boeing India", "Airbus India"],
    pros: ["One of the highest-paying careers (Pilots)", "Travel the world as part of your job", "Glamorous and respected profession", "Free air travel benefits for self and family", "Cabin crew requires no specific degree — accessible", "Growing Indian aviation market = more jobs"],
    cons: ["Pilot training is very expensive (₹50L-1Cr+)", "Long time away from family (Pilots/Cabin Crew)", "Irregular schedules — jet lag and fatigue", "Strict medical fitness requirements", "Industry vulnerable to economic downturns and pandemics", "Cabin crew career span can be limited"],
    futureOutlook: "India plans to have 220+ airports by 2025. The UDAN scheme is connecting tier-2/3 cities. New airlines (Akasa Air) are hiring aggressively. Drone piloting, space tourism, and sustainable aviation fuel are emerging areas. India needs 2,000+ new pilots annually to meet demand.",
    relatedCareers: [
      { name: "Aerospace Engineering", href: "/careers/aerospace" },
      { name: "Hotel Management", href: "/careers/hotel-management" },
      { name: "Mechanical Engineering", href: "/careers/mechanical" },
    ],
  },
  "interior-design": {
    title: "Interior Design",
    stream: "Any Stream",
    tagline: "Transform spaces into experiences",
    overview: "Interior Design is the art and science of enhancing interior spaces for aesthetics, functionality, and comfort. With India's booming real estate, hospitality, and retail sectors, interior designers are in high demand. From luxury homes and corporate offices to hotels and retail stores, interior designers shape the environments where people live, work, and play. It's perfect for creative individuals who love art, architecture, and problem-solving.",
    whatTheyDo: "Interior designers plan and design interior spaces, select materials, furniture, lighting, and color schemes, create 2D/3D layouts, manage renovation projects, and ensure designs meet building codes and client budgets. They work with architects, contractors, and clients to bring spaces to life.",
    dayInLife: [
      "Meet clients to understand their vision and requirements",
      "Create 2D floor plans and 3D renders using AutoCAD/SketchUp",
      "Select materials, furniture, fabrics, and lighting fixtures",
      "Visit sites to oversee construction and installation",
      "Coordinate with contractors, carpenters, and vendors",
      "Present design concepts and mood boards to clients",
    ],
    salary: { entry: "₹3-6 LPA (Fresher)", mid: "₹6-15 LPA (3-5 yrs)", senior: "₹15-30 LPA (8-10 yrs)", top: "₹30-60 LPA (Principal Designer / Own Studio)" },
    skills: ["Space Planning & Layout Design", "AutoCAD & SketchUp", "3D Visualization (3ds Max, V-Ray)", "Material & Color Knowledge", "Lighting Design", "Furniture Design", "Client Communication & Presentation", "Project & Budget Management"],
    education: [
      { path: "B.Sc Interior Design → Junior Designer", duration: "3-4 years" },
      { path: "B.Des Interior Design (CEPT/NID)", duration: "4 years" },
      { path: "Diploma in Interior Design → Practice", duration: "1-2 years" },
      { path: "B.Arch → Interior Design Specialization", duration: "5 years" },
      { path: "Self-taught + Portfolio → Freelance Designer", duration: "1-2 years" },
    ],
    entranceExams: ["NID DAT", "NIFT Entrance", "CEPT Entrance", "JJ School of Art Entrance", "State Design CET"],
    topColleges: ["CEPT Ahmedabad", "NID Ahmedabad", "JJ School of Art Mumbai", "Srishti Manipal", "Raffles Design Institute", "INIFD", "Pearl Academy", "Lovely Professional University"],
    govtOpportunities: [
      { name: "CPWD Interior Designer", salary: "₹44,900/month+" },
      { name: "Indian Railways (Station Redesign)", salary: "₹35,400/month+" },
      { name: "Smart City Interior Projects", salary: "₹40,000/month+" },
      { name: "Govt Museum/Gallery Designer", salary: "₹35,400/month+" },
      { name: "Airport Interior Design (AAI)", salary: "₹44,900/month+" },
    ],
    topCompanies: ["Livspace", "HomeLane", "Design Cafe", "Studio Lotus", "Morphogenesis", "Godrej Interio", "IKEA India", "Asian Paints (Beautiful Homes)", "Homelane", "Square Yards Design"],
    pros: ["Highly creative and visually rewarding career", "Can start own studio or freelance from day one", "Growing demand with real estate and hospitality boom", "Tangible results — see your designs come to life", "Diverse projects — homes, offices, hotels, retail", "Good work-life balance in freelance/own studio"],
    cons: ["Client management can be challenging — subjective tastes", "Project delays and budget overruns are common", "Physical site visits in all weather conditions", "Irregular income for freelancers initially", "Competition from unqualified designers", "Need to continuously update design trends"],
    futureOutlook: "India's interior design market is projected to reach $40 billion by 2027. Smart homes, sustainable design, biophilic design (bringing nature indoors), and AR/VR visualization are transforming the field. Online platforms like Livspace are democratizing access. Designers who combine aesthetics with technology and sustainability will thrive.",
    relatedCareers: [
      { name: "Architecture", href: "/careers/architecture" },
      { name: "Design (B.Des)", href: "/careers/design" },
      { name: "Civil Engineering", href: "/careers/civil" },
    ],
  },
};
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

          {/* Related Internships */}
          {(() => {
            const careerInternshipMap: Record<string, Array<{ title: string; company: string; location: string; stipend: string; applyUrl: string }>> = {
              "cse": [
                { title: "Software Development Intern", company: "Google", location: "Bangalore", stipend: "₹80,000/month", applyUrl: "https://www.google.com/about/careers/applications/jobs/results/?q=intern&location=India" },
                { title: "ML Research Intern", company: "Microsoft", location: "Bangalore", stipend: "₹60,000/month", applyUrl: "https://careers.microsoft.com/students/us/en/search-results?keywords=intern&location=India" },
                { title: "Full Stack Intern", company: "Adobe", location: "Noida", stipend: "₹55,000/month", applyUrl: "https://careers.adobe.com/us/en/search-results?keywords=intern%20india" },
                { title: "SWE Intern", company: "Meta", location: "Remote", stipend: "₹70,000/month", applyUrl: "https://www.metacareers.com/jobs?q=intern&location=India" },
              ],
              "medicine": [
                { title: "Clinical Research Intern", company: "Apollo Hospitals", location: "Chennai", stipend: "₹15,000/month", applyUrl: "https://www.apollohospitals.com/careers/" },
                { title: "Healthcare Analytics Intern", company: "Fortis", location: "Delhi", stipend: "₹12,000/month", applyUrl: "https://www.fortishealthcare.com/careers" },
              ],
              "ca": [
                { title: "Audit Intern", company: "Deloitte", location: "Mumbai", stipend: "₹30,000/month", applyUrl: "https://www2.deloitte.com/in/en/careers/students.html" },
                { title: "Tax Advisory Intern", company: "EY", location: "Bangalore", stipend: "₹25,000/month", applyUrl: "https://www.ey.com/en_in/careers/students" },
                { title: "Consulting Intern", company: "KPMG", location: "Mumbai", stipend: "₹25,000/month", applyUrl: "https://www.kpmg.com/in/en/home/careers.html" },
              ],
              "data-science": [
                { title: "Data Analyst Intern", company: "Amazon", location: "Hyderabad", stipend: "₹50,000/month", applyUrl: "https://www.amazon.jobs/en/search?base_query=intern&loc_query=India&country=IND" },
                { title: "Data Science Intern", company: "Salesforce", location: "Hyderabad", stipend: "₹50,000/month", applyUrl: "https://careers.salesforce.com/en/jobs/?search=intern&country=India" },
                { title: "AI/ML Intern", company: "NVIDIA", location: "Bangalore/Pune", stipend: "₹60,000/month", applyUrl: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=intern" },
                { title: "AI Intern", company: "OpenAI", location: "Remote", stipend: "₹90,000/month", applyUrl: "https://openai.com/careers/" },
              ],
              "law": [
                { title: "Legal Intern", company: "AZB & Partners", location: "Mumbai", stipend: "₹15,000/month", applyUrl: "https://www.azbpartners.com/careers" },
                { title: "Corporate Law Intern", company: "Cyril Amarchand", location: "Mumbai", stipend: "₹15,000/month", applyUrl: "https://cyrilshroff.com/careers/" },
              ],
              "finance": [
                { title: "Investment Banking Intern", company: "Goldman Sachs", location: "Bangalore", stipend: "₹60,000/month", applyUrl: "https://www.goldmansachs.com/careers/students/" },
                { title: "Finance Intern", company: "JPMorgan", location: "Mumbai", stipend: "₹50,000/month", applyUrl: "https://careers.jpmorgan.com/in/en/students/programs" },
              ],
              "mechanical": [
                { title: "Mechanical Intern", company: "Tata Motors", location: "Pune", stipend: "₹20,000/month", applyUrl: "https://www.tatamotors.com/careers/" },
                { title: "Software Intern", company: "Tesla", location: "Remote", stipend: "₹65,000/month", applyUrl: "https://www.tesla.com/careers/search/?query=intern" },
              ],
              "ece": [
                { title: "Embedded Systems Intern", company: "Intel", location: "Bangalore", stipend: "₹40,000/month", applyUrl: "https://jobs.intel.com/en/search-jobs?k=intern" },
                { title: "SWE Intern", company: "Qualcomm", location: "Hyderabad", stipend: "₹45,000/month", applyUrl: "https://www.qualcomm.com/company/careers" },
                { title: "Hardware Engineering Intern", company: "Apple", location: "Hyderabad", stipend: "₹65,000/month", applyUrl: "https://jobs.apple.com/en-in/search?search=intern" },
              ],
              "biotech": [
                { title: "AI Research Intern", company: "IIT Madras", location: "Chennai", stipend: "₹15,000/month", applyUrl: "https://internshala.com/internships/internship-in-chennai" },
                { title: "DRDO Project Trainee", company: "DRDO", location: "Delhi", stipend: "₹20,000/month", applyUrl: "https://rac.gov.in/" },
              ],
              "pharmacy": [
                { title: "Pharma Research Intern", company: "Biocon", location: "Bangalore", stipend: "₹15,000/month", applyUrl: "https://www.biocon.com/careers/" },
              ],
              "mba": [
                { title: "Consulting Intern", company: "McKinsey", location: "Delhi", stipend: "₹80,000/month", applyUrl: "https://www.mckinsey.com/careers/search-jobs?query=intern" },
                { title: "Consulting Intern", company: "Accenture", location: "Mumbai", stipend: "₹25,000/month", applyUrl: "https://www.accenture.com/in-en/careers/local/students-graduates" },
                { title: "Marketing Intern", company: "Zomato", location: "Gurugram", stipend: "₹25,000/month", applyUrl: "https://www.linkedin.com/company/zomato/jobs/" },
              ],
              "design": [
                { title: "Product Design Intern", company: "Swiggy", location: "Remote", stipend: "₹30,000/month", applyUrl: "https://www.linkedin.com/company/swiggy/jobs/" },
                { title: "Design Intern", company: "Figma", location: "Remote", stipend: "₹50,000/month", applyUrl: "https://www.figma.com/careers/" },
              ],
              "aerospace": [
                { title: "ISRO Research Intern", company: "ISRO", location: "Various", stipend: "₹15,000/month", applyUrl: "https://www.isro.gov.in/Careers.html" },
                { title: "DRDO Project Trainee", company: "DRDO", location: "Delhi", stipend: "₹20,000/month", applyUrl: "https://rac.gov.in/" },
              ],
              "automobile": [
                { title: "Software Intern", company: "Tesla", location: "Remote", stipend: "₹65,000/month", applyUrl: "https://www.tesla.com/careers/search/?query=intern" },
                { title: "Mechanical Intern", company: "Tata Motors", location: "Pune", stipend: "₹20,000/month", applyUrl: "https://www.tatamotors.com/careers/" },
              ],
            };
            const internships = careerInternshipMap[careerId || ""] || [];
            if (internships.length === 0) return null;
            return (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="bg-card rounded-xl p-6 border border-border mt-6">
                <h2 className="font-bold text-xl mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary" />Related Internships</h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {internships.map((intern) => (
                    <a key={intern.company + intern.title} href={intern.applyUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{intern.title}</p>
                        <p className="text-muted-foreground text-xs">{intern.company}</p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" />{intern.location}</span>
                          <span className="text-success font-medium">{intern.stipend}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
                <Link to="/internships">
                  <Button variant="outline" size="sm" className="gap-1">View All Internships <ExternalLink className="w-3.5 h-3.5" /></Button>
                </Link>
              </motion.div>
            );
          })()}
        </div>
      </main>
    </div>
  );
}