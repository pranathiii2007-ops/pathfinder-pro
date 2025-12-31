import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, TrendingUp, Building2, GraduationCap, IndianRupee } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const streamData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  careers: Array<{
    name: string;
    description: string;
    avgSalary: string;
    growth: string;
    roles: string[];
    href: string;
  }>;
  topCourses: string[];
  entranceExams: string[];
}> = {
  "science-pcm": {
    title: "Science - PCM/MPC",
    tagline: "Physics, Chemistry, Mathematics",
    description: "The PCM stream opens doors to engineering, technology, research, and innovation. It's ideal for students who love problem-solving and have strong analytical skills.",
    careers: [
      {
        name: "Computer Science & Engineering",
        description: "Design software, apps, AI systems, and technology solutions",
        avgSalary: "₹8-25 LPA",
        growth: "22%",
        roles: ["Software Engineer", "AI/ML Engineer", "Full Stack Developer", "Data Scientist", "Cloud Architect"],
        href: "/careers/cse",
      },
      {
        name: "Mechanical Engineering",
        description: "Design and build machines, vehicles, and mechanical systems",
        avgSalary: "₹5-15 LPA",
        growth: "8%",
        roles: ["Design Engineer", "Production Manager", "Quality Engineer", "R&D Engineer"],
        href: "/careers/mechanical",
      },
      {
        name: "Electronics & Communication",
        description: "Work on electronics, communication systems, and embedded devices",
        avgSalary: "₹6-18 LPA",
        growth: "12%",
        roles: ["Embedded Engineer", "VLSI Designer", "Network Engineer", "IoT Specialist"],
        href: "/careers/ece",
      },
      {
        name: "Civil Engineering",
        description: "Design buildings, bridges, roads, and infrastructure",
        avgSalary: "₹5-12 LPA",
        growth: "6%",
        roles: ["Structural Engineer", "Site Engineer", "Urban Planner", "Project Manager"],
        href: "/careers/civil",
      },
      {
        name: "Data Science & Analytics",
        description: "Analyze data to drive business decisions and insights",
        avgSalary: "₹10-30 LPA",
        growth: "28%",
        roles: ["Data Analyst", "Business Analyst", "Data Engineer", "ML Engineer"],
        href: "/careers/data-science",
      },
    ],
    topCourses: ["B.Tech/B.E.", "B.Sc Physics/Mathematics", "B.Arch", "Integrated M.Tech", "B.Sc Data Science"],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CET", "COMEDK"],
  },
  "science-pcb": {
    title: "Science - PCB/BiPC",
    tagline: "Physics, Chemistry, Biology",
    description: "The PCB stream leads to careers in medicine, healthcare, life sciences, and biotechnology. Perfect for those passionate about helping others and understanding life.",
    careers: [
      {
        name: "Medicine (MBBS/MD)",
        description: "Become a doctor and save lives across various specializations",
        avgSalary: "₹10-50 LPA",
        growth: "15%",
        roles: ["General Physician", "Surgeon", "Cardiologist", "Neurologist", "Pediatrician"],
        href: "/careers/medicine",
      },
      {
        name: "Dentistry (BDS)",
        description: "Specialize in oral health and dental care",
        avgSalary: "₹6-20 LPA",
        growth: "10%",
        roles: ["Dentist", "Orthodontist", "Oral Surgeon", "Periodontist"],
        href: "/careers/dentistry",
      },
      {
        name: "Pharmacy",
        description: "Work in drug development, manufacturing, and healthcare",
        avgSalary: "₹4-15 LPA",
        growth: "12%",
        roles: ["Pharmacist", "Drug Inspector", "Clinical Research", "R&D Scientist"],
        href: "/careers/pharmacy",
      },
      {
        name: "Biotechnology",
        description: "Apply biology to develop products and technologies",
        avgSalary: "₹5-18 LPA",
        growth: "18%",
        roles: ["Biotech Researcher", "Genetic Engineer", "Bioprocess Engineer", "QC Analyst"],
        href: "/careers/biotech",
      },
      {
        name: "Nursing & Allied Health",
        description: "Provide patient care and support healthcare systems",
        avgSalary: "₹4-12 LPA",
        growth: "14%",
        roles: ["Staff Nurse", "ICU Nurse", "Nurse Practitioner", "Healthcare Administrator"],
        href: "/careers/nursing",
      },
    ],
    topCourses: ["MBBS", "BDS", "B.Pharm", "B.Sc Nursing", "BAMS/BHMS", "B.Sc Biotechnology"],
    entranceExams: ["NEET UG", "AIIMS", "JIPMER", "State Medical CET", "NEET PG"],
  },
  "commerce": {
    title: "Commerce Stream",
    tagline: "Business, Economics, Accounting",
    description: "Commerce opens pathways to business management, finance, accounting, and entrepreneurship. Ideal for those interested in economics and business operations.",
    careers: [
      {
        name: "Chartered Accountancy (CA)",
        description: "Become an expert in accounting, taxation, and financial auditing",
        avgSalary: "₹8-30 LPA",
        growth: "10%",
        roles: ["Chartered Accountant", "Tax Consultant", "Auditor", "Financial Advisor"],
        href: "/careers/ca",
      },
      {
        name: "Investment Banking & Finance",
        description: "Work in high-stakes financial markets and investments",
        avgSalary: "₹12-50 LPA",
        growth: "15%",
        roles: ["Investment Banker", "Equity Analyst", "Portfolio Manager", "Risk Analyst"],
        href: "/careers/finance",
      },
      {
        name: "Business Management (MBA)",
        description: "Lead organizations and drive business strategy",
        avgSalary: "₹10-35 LPA",
        growth: "12%",
        roles: ["Business Manager", "Consultant", "Product Manager", "Operations Head"],
        href: "/careers/mba",
      },
      {
        name: "Company Secretary (CS)",
        description: "Ensure corporate governance and legal compliance",
        avgSalary: "₹6-20 LPA",
        growth: "8%",
        roles: ["Company Secretary", "Compliance Officer", "Legal Advisor", "Board Advisor"],
        href: "/careers/cs",
      },
    ],
    topCourses: ["B.Com", "BBA", "CA Foundation", "CS Foundation", "B.Com (Hons)", "Economics Hons"],
    entranceExams: ["CA CPT", "CS Foundation", "CUET", "IPM Aptitude Test", "DU JAT"],
  },
  "arts": {
    title: "Arts/Humanities",
    tagline: "Literature, History, Social Sciences",
    description: "Arts and Humanities offer diverse career paths in law, civil services, media, design, and social work. Perfect for creative and analytical minds.",
    careers: [
      {
        name: "Law (LLB)",
        description: "Practice law and fight for justice in courts",
        avgSalary: "₹5-30 LPA",
        growth: "10%",
        roles: ["Advocate", "Corporate Lawyer", "Legal Consultant", "Judge", "Public Prosecutor"],
        href: "/careers/law",
      },
      {
        name: "Civil Services (IAS/IPS)",
        description: "Serve the nation in administrative and police services",
        avgSalary: "₹8-20 LPA + Perks",
        growth: "Stable",
        roles: ["IAS Officer", "IPS Officer", "IFS Officer", "IRS Officer"],
        href: "/careers/civil-services",
      },
      {
        name: "Journalism & Mass Media",
        description: "Report news, create content, and shape public opinion",
        avgSalary: "₹4-15 LPA",
        growth: "12%",
        roles: ["Journalist", "News Anchor", "Content Creator", "PR Specialist", "Editor"],
        href: "/careers/journalism",
      },
      {
        name: "Psychology & Counseling",
        description: "Help people with mental health and personal growth",
        avgSalary: "₹4-15 LPA",
        growth: "20%",
        roles: ["Psychologist", "Counselor", "Therapist", "HR Specialist", "Life Coach"],
        href: "/careers/psychology",
      },
    ],
    topCourses: ["BA LLB", "BA (Hons)", "B.A. Psychology", "BJMC", "B.Des", "BSW"],
    entranceExams: ["CLAT", "UPSC CSE", "CUET", "NID DAT", "NIFT", "Mass Communication Entrance"],
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
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Streams
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              {stream.tagline}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{stream.title}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">{stream.description}</p>
          </motion.div>

          {/* Entrance Exams & Courses */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg">Top Courses</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stream.topCourses.map((course) => (
                  <span key={course} className="bg-muted px-3 py-1.5 rounded-lg text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-lg">Entrance Exams</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stream.entranceExams.map((exam) => (
                  <span key={exam} className="bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm font-medium">
                    {exam}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Career Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Career Paths in {stream.title}
            </h2>
            <div className="grid gap-6">
              {stream.careers.map((career, index) => (
                <motion.div
                  key={career.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link to={career.href}>
                    <div className="group bg-card rounded-xl p-6 border border-border hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {career.name}
                          </h3>
                          <p className="text-muted-foreground mb-4">{career.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {career.roles.map((role) => (
                              <span key={role} className="text-xs bg-muted px-2 py-1 rounded-md">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-success font-bold">
                              <IndianRupee className="w-4 h-4" />
                              {career.avgSalary}
                            </div>
                            <p className="text-xs text-muted-foreground">Avg. Salary</p>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-primary font-bold">
                              <TrendingUp className="w-4 h-4" />
                              {career.growth}
                            </div>
                            <p className="text-xs text-muted-foreground">Growth</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}