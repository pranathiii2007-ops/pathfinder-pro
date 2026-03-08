import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, ExternalLink, GraduationCap, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const colleges = [
  { name: "IIT Bombay", location: "Mumbai, Maharashtra", type: "Engineering", rating: 4.9, courses: ["CSE", "ECE", "Mechanical", "Civil"], established: 1958, ranking: 1 },
  { name: "IIT Delhi", location: "New Delhi", type: "Engineering", rating: 4.9, courses: ["CSE", "Electrical", "Mechanical", "Chemical"], established: 1961, ranking: 2 },
  { name: "IIT Madras", location: "Chennai, Tamil Nadu", type: "Engineering", rating: 4.9, courses: ["CSE", "Data Science", "Aerospace", "Civil"], established: 1959, ranking: 3 },
  { name: "IIT Hyderabad", location: "Hyderabad, Telangana", type: "Engineering", rating: 4.7, courses: ["CSE", "AI/ML", "ECE", "Design"], established: 2008, ranking: 8 },
  { name: "BITS Pilani", location: "Pilani, Rajasthan", type: "Engineering", rating: 4.6, courses: ["CSE", "ECE", "Mechanical", "Chemical"], established: 1964, ranking: 10 },
  { name: "NIT Warangal", location: "Warangal, Telangana", type: "Engineering", rating: 4.5, courses: ["CSE", "ECE", "EEE", "Mechanical"], established: 1959, ranking: 15 },
  { name: "AIIMS Delhi", location: "New Delhi", type: "Medical", rating: 4.9, courses: ["MBBS", "MD", "MS", "Nursing"], established: 1956, ranking: 1 },
  { name: "CMC Vellore", location: "Vellore, Tamil Nadu", type: "Medical", rating: 4.8, courses: ["MBBS", "MD", "Allied Health"], established: 1900, ranking: 3 },
  { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", type: "Management", rating: 4.9, courses: ["MBA", "PGDM", "Executive MBA"], established: 1961, ranking: 1 },
  { name: "IIM Bangalore", location: "Bangalore, Karnataka", type: "Management", rating: 4.8, courses: ["MBA", "PGDM", "PhD"], established: 1973, ranking: 2 },
  { name: "NLU Delhi", location: "New Delhi", type: "Law", rating: 4.7, courses: ["BA LLB", "LLM", "PhD"], established: 2008, ranking: 1 },
  { name: "NLSIU Bangalore", location: "Bangalore, Karnataka", type: "Law", rating: 4.8, courses: ["BA LLB", "LLM"], established: 1987, ranking: 2 },
  { name: "St. Stephen's College", location: "New Delhi", type: "Arts & Science", rating: 4.5, courses: ["BA English", "BA History", "BSc", "BA Economics"], established: 1881, ranking: 5 },
  { name: "IIIT Hyderabad", location: "Hyderabad, Telangana", type: "Engineering", rating: 4.6, courses: ["CSE", "ECE", "CSD", "CND"], established: 1998, ranking: 12 },
  { name: "VIT Vellore", location: "Vellore, Tamil Nadu", type: "Engineering", rating: 4.3, courses: ["CSE", "ECE", "Mechanical", "Biotech"], established: 1984, ranking: 20 },
  { name: "SRM Chennai", location: "Chennai, Tamil Nadu", type: "Engineering", rating: 4.2, courses: ["CSE", "ECE", "Mechanical", "Civil"], established: 1985, ranking: 25 },
];

const courseTypes = ["All", "Engineering", "Medical", "Management", "Law", "Arts & Science"];
const states = ["All States", "Maharashtra", "New Delhi", "Tamil Nadu", "Telangana", "Rajasthan", "Gujarat", "Karnataka"];

export default function Colleges() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [stateFilter, setStateFilter] = useState("All States");

  const filtered = colleges.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase());
    const matchesCourse = courseFilter === "All" || c.type === courseFilter;
    const matchesState = stateFilter === "All States" || c.location.includes(stateFilter);
    return matchesSearch && matchesCourse && matchesState;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" /> College Discovery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find <span className="text-gradient-primary">Colleges</span> Near You</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Search for top colleges by location, course type, or name. Filter and discover the best institutions.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search by college name or city..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <Select value={courseFilter} onValueChange={setCourseFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Course Type" />
            </SelectTrigger>
            <SelectContent>
              {courseTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={stateFilter} onValueChange={setStateFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              {states.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} colleges found</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((college, i) => (
            <motion.div key={college.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">{college.type}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">Rank #{college.ranking}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{college.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{college.location}</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-warning" />{college.rating}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {college.courses.slice(0, 4).map((course) => (
                  <span key={course} className="text-xs bg-muted px-2 py-1 rounded-md">{course}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Est. {college.established}</p>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No colleges found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}