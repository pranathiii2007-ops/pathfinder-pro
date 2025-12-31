import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Briefcase, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const internships = [
  { title: "Software Development Intern", company: "Google", location: "Bangalore", duration: "3 months", stipend: "₹80,000/month" },
  { title: "Data Analyst Intern", company: "Amazon", location: "Hyderabad", duration: "6 months", stipend: "₹50,000/month" },
  { title: "Marketing Intern", company: "Flipkart", location: "Remote", duration: "2 months", stipend: "₹25,000/month" },
  { title: "Research Intern", company: "Microsoft", location: "Noida", duration: "3 months", stipend: "₹60,000/month" },
];

export default function Internships() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient-primary">Internships</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Gain hands-on experience with top companies.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-primary font-medium mb-3">{item.company}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{item.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{item.duration}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{item.stipend}</span>
              </div>
              <Button size="sm" className="gradient-primary text-primary-foreground">Apply Now</Button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}