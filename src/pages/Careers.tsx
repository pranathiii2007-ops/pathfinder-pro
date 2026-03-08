import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, IndianRupee, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const careers = [
  { name: "Software Engineering", stream: "PCM", salary: "₹8-25 LPA", growth: "22%", href: "/careers/cse", id: "cse" },
  { name: "Medicine (MBBS)", stream: "PCB", salary: "₹10-50 LPA", growth: "15%", href: "/careers/medicine", id: "medicine" },
  { name: "Chartered Accountancy", stream: "Commerce", salary: "₹8-30 LPA", growth: "10%", href: "/careers/ca", id: "ca" },
  { name: "Data Science", stream: "PCM", salary: "₹10-30 LPA", growth: "28%", href: "/careers/data-science", id: "data-science" },
  { name: "Law (LLB)", stream: "Arts", salary: "₹5-30 LPA", growth: "10%", href: "/careers/law", id: "law" },
  { name: "Investment Banking", stream: "Commerce", salary: "₹12-50 LPA", growth: "15%", href: "/careers/finance", id: "finance" },
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore detailed career options with salary insights and growth prospects.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, i) => (
            <motion.div key={career.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={career.href}>
                <div className="group bg-card rounded-xl p-6 border border-border hover-lift h-full relative">
                  <button
                    onClick={(e) => handleFavorite(e, career)}
                    className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted transition-colors"
                  >
                    <Heart className={`w-5 h-5 transition-colors ${isFavorite(career.id) ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
                  </button>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{career.stream}</span>
                  <h3 className="text-xl font-bold mt-3 mb-4 group-hover:text-primary transition-colors">{career.name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-success text-sm"><IndianRupee className="w-4 h-4" />{career.salary}</div>
                    <div className="flex items-center gap-1 text-primary text-sm"><TrendingUp className="w-4 h-4" />{career.growth}</div>
                  </div>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
