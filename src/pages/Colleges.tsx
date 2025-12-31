import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star } from "lucide-react";

const colleges = [
  { name: "IIT Bombay", location: "Mumbai", type: "Engineering", rating: 4.9 },
  { name: "AIIMS Delhi", location: "New Delhi", type: "Medical", rating: 4.9 },
  { name: "IIM Ahmedabad", location: "Ahmedabad", type: "Management", rating: 4.8 },
  { name: "NLU Delhi", location: "New Delhi", type: "Law", rating: 4.7 },
  { name: "BITS Pilani", location: "Pilani", type: "Engineering", rating: 4.6 },
  { name: "St. Stephen's College", location: "New Delhi", type: "Arts & Commerce", rating: 4.5 },
];

export default function Colleges() {
  const [search, setSearch] = useState("");
  const filtered = colleges.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find <span className="text-gradient-primary">Colleges</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Search for top colleges by location or name.</p>
        </motion.div>
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search by college name or city..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((college, i) => (
            <motion.div key={college.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
              <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">{college.type}</span>
              <h3 className="text-xl font-bold mt-3 mb-2">{college.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{college.location}</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-warning" />{college.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}