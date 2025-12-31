import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BookOpen, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { title: "Full Stack Web Development", provider: "Coursera", duration: "6 months", students: "50K+", level: "Beginner" },
  { title: "Data Science with Python", provider: "Udemy", duration: "4 months", students: "100K+", level: "Intermediate" },
  { title: "Machine Learning A-Z", provider: "Udacity", duration: "3 months", students: "80K+", level: "Advanced" },
  { title: "Digital Marketing", provider: "Google", duration: "2 months", students: "200K+", level: "Beginner" },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Online <span className="text-gradient-primary">Courses</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Upskill with courses from top platforms.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.div key={course.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{course.level}</span>
              <h3 className="text-xl font-bold mt-3 mb-1">{course.title}</h3>
              <p className="text-muted-foreground mb-3">{course.provider}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{course.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />{course.students} enrolled</span>
              </div>
              <Button size="sm" variant="outline">Enroll Now</Button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}