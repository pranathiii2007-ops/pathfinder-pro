import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, IndianRupee, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const careers = [
  { name: "Software Engineering / CSE", stream: "PCM", salary: "₹8-25 LPA", growth: "22%", id: "cse", desc: "Build apps, AI systems, and cloud infrastructure" },
  { name: "Medicine (MBBS / MD)", stream: "PCB", salary: "₹10-50 LPA", growth: "15%", id: "medicine", desc: "Diagnose, treat, and save lives as a doctor" },
  { name: "Chartered Accountancy (CA)", stream: "Commerce", salary: "₹8-30 LPA", growth: "10%", id: "ca", desc: "Expert in accounting, taxation, and auditing" },
  { name: "Data Science & Analytics", stream: "PCM", salary: "₹10-30 LPA", growth: "28%", id: "data-science", desc: "Turn data into business decisions using ML" },
  { name: "Law (LLB / BA LLB)", stream: "Any", salary: "₹5-30 LPA", growth: "10%", id: "law", desc: "Practice law, fight for justice in courts" },
  { name: "Investment Banking & Finance", stream: "Commerce", salary: "₹12-50 LPA", growth: "15%", id: "finance", desc: "Manage mergers, IPOs, and financial strategy" },
  { name: "Mechanical Engineering", stream: "PCM", salary: "₹5-15 LPA", growth: "8%", id: "mechanical", desc: "Design machines, vehicles, and mechanical systems" },
  { name: "Electronics & Communication", stream: "PCM", salary: "₹6-18 LPA", growth: "12%", id: "ece", desc: "Work on electronics, VLSI, and embedded systems" },
  { name: "Civil Engineering", stream: "PCM", salary: "₹5-12 LPA", growth: "6%", id: "civil", desc: "Design buildings, bridges, and infrastructure" },
  { name: "Biotechnology", stream: "PCB", salary: "₹5-18 LPA", growth: "18%", id: "biotech", desc: "Genetic engineering, bio-pharma, and research" },
  { name: "Psychology & Counseling", stream: "Arts", salary: "₹4-15 LPA", growth: "20%", id: "psychology", desc: "Help people with mental health and wellbeing" },
  { name: "Journalism & Media", stream: "Arts", salary: "₹4-15 LPA", growth: "12%", id: "journalism", desc: "Report news, create content, and shape opinion" },
  { name: "Pharmacy (B.Pharm / D.Pharm)", stream: "PCB", salary: "₹4-20 LPA", growth: "14%", id: "pharmacy", desc: "Develop drugs, manage pharmacies, and clinical research" },
  { name: "Architecture (B.Arch)", stream: "PCM", salary: "₹5-25 LPA", growth: "10%", id: "architecture", desc: "Design buildings, spaces, and sustainable structures" },
  { name: "MBA / Management", stream: "Any", salary: "₹10-40 LPA", growth: "15%", id: "mba", desc: "Lead businesses, strategy, marketing, and operations" },
  { name: "Company Secretary (CS)", stream: "Commerce", salary: "₹6-25 LPA", growth: "10%", id: "cs", desc: "Corporate governance, compliance, and legal advisory" },
  { name: "CMA (Cost & Management Accountant)", stream: "Commerce", salary: "₹6-20 LPA", growth: "10%", id: "cma", desc: "Cost management, financial planning, and strategic decisions" },
  { name: "Nursing (B.Sc / GNM)", stream: "PCB", salary: "₹3-15 LPA", growth: "18%", id: "nursing", desc: "Patient care, hospital management, and community health" },
  { name: "Design (B.Des / NID)", stream: "Any", salary: "₹5-25 LPA", growth: "20%", id: "design", desc: "UX/UI, fashion, graphic, product, and interior design" },
];

export default function Careers() {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleFavorite = async (e: React.MouseEvent, career: typeof careers[0]) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      toast({ title: "Login required", description: "Please login to save favorite careers.", variant: "destructive" });
      return;
    }
    await toggleFavorite(career.id, career.name);
    toast({ title: isFavorite(career.id) ? "Removed from favorites" : "Added to favorites" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career <span className="text-gradient-primary">Paths</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore detailed career options with salary insights, growth prospects, and complete roadmaps.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, i) => (
            <motion.div key={career.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link to={`/careers/${career.id}`}>
                <div className="group bg-card rounded-xl p-6 border border-border hover-lift h-full relative">
                  <button onClick={(e) => handleFavorite(e, career)} className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted transition-colors">
                    <Heart className={`w-5 h-5 transition-colors ${isFavorite(career.id) ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
                  </button>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{career.stream}</span>
                  <h3 className="text-lg font-bold mt-3 mb-1 group-hover:text-primary transition-colors">{career.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{career.desc}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-success text-sm"><IndianRupee className="w-4 h-4" />{career.salary}</div>
                    <div className="flex items-center gap-1 text-primary text-sm"><TrendingUp className="w-4 h-4" />{career.growth}</div>
                  </div>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">View Full Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}