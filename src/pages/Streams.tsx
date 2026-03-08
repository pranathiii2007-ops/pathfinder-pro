import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Building2, Users, FileText, Wrench } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const boards = {
  state: {
    name: "State Board",
    streams: [
      { name: "MPC (Maths, Physics, Chemistry)", href: "/streams/science-pcm", icon: GraduationCap, description: "Ideal for Engineering, Technology, and Pure Sciences", subjects: ["Mathematics", "Physics", "Chemistry", "English", "Second Language"] },
      { name: "BiPC (Biology, Physics, Chemistry)", href: "/streams/science-pcb", icon: BookOpen, description: "Gateway to Medicine, Life Sciences, and Healthcare", subjects: ["Biology", "Physics", "Chemistry", "English", "Second Language"] },
      { name: "MEC (Maths, Economics, Commerce)", href: "/streams/commerce", icon: Building2, description: "Foundation for Business, Finance, and Economics", subjects: ["Mathematics", "Economics", "Commerce", "English", "Second Language"] },
      { name: "CEC (Civics, Economics, Commerce)", href: "/streams/commerce", icon: Building2, description: "Path to Commerce, Law, and Public Administration", subjects: ["Civics", "Economics", "Commerce", "English", "Second Language"] },
      { name: "HEC (History, Economics, Civics)", href: "/streams/arts", icon: Users, description: "For Humanities, Social Sciences, and Civil Services", subjects: ["History", "Economics", "Civics", "English", "Second Language"] },
      { name: "Diploma / ITI / Vocational", href: "/streams/science-pcm", icon: Wrench, description: "Hands-on technical training — faster entry to industry", subjects: ["Technical Subject", "Workshop Practice", "Engineering Drawing", "English", "Mathematics"] },
    ],
  },
  cbse: {
    name: "CBSE",
    streams: [
      { name: "Science with PCM", href: "/streams/science-pcm", icon: GraduationCap, description: "Physics, Chemistry, Mathematics + Optional Subject", subjects: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science/PE"] },
      { name: "Science with PCB", href: "/streams/science-pcb", icon: BookOpen, description: "Physics, Chemistry, Biology + Optional Subject", subjects: ["Physics", "Chemistry", "Biology", "English", "Psychology/PE"] },
      { name: "Commerce", href: "/streams/commerce", icon: Building2, description: "Business Studies, Accountancy, Economics", subjects: ["Business Studies", "Accountancy", "Economics", "English", "Maths/IP"] },
      { name: "Humanities", href: "/streams/arts", icon: Users, description: "History, Political Science, Geography, Psychology", subjects: ["History", "Political Science", "Geography", "English", "Psychology/Sociology"] },
    ],
  },
  icse: {
    name: "ICSE (ISC)",
    streams: [
      { name: "Science - PCM", href: "/streams/science-pcm", icon: GraduationCap, description: "Physics, Chemistry, Mathematics for Engineering path", subjects: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science"] },
      { name: "Science - PCB", href: "/streams/science-pcb", icon: BookOpen, description: "Physics, Chemistry, Biology for Medical path", subjects: ["Physics", "Chemistry", "Biology", "English", "Biotechnology/Psychology"] },
      { name: "Commerce", href: "/streams/commerce", icon: Building2, description: "Commerce, Economics, Business Studies", subjects: ["Commerce", "Economics", "Business Studies", "English", "Maths/Accounts"] },
      { name: "Humanities", href: "/streams/arts", icon: Users, description: "Literature, History, Political Science", subjects: ["History", "Political Science", "Sociology", "English", "Psychology/Geography"] },
    ],
  },
};

export default function Streams() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4" /> After 10th
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your <span className="text-gradient-primary">Stream</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select your board and discover all streams available after 10th class. Each stream leads to different career paths and opportunities.
            </p>
          </motion.div>

          <Tabs defaultValue="state" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="state">State Board</TabsTrigger>
              <TabsTrigger value="cbse">CBSE</TabsTrigger>
              <TabsTrigger value="icse">ICSE</TabsTrigger>
            </TabsList>

            {Object.entries(boards).map(([key, board]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {board.streams.map((stream, index) => (
                    <motion.div key={stream.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                      <Link to={stream.href}>
                        <div className="group bg-card rounded-xl p-6 border border-border hover-lift h-full">
                          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                            <stream.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{stream.name}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{stream.description}</p>
                          <div className="space-y-2">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Subjects:</p>
                            <div className="flex flex-wrap gap-1">
                              {stream.subjects.map((subject) => (
                                <span key={subject} className="text-xs bg-muted px-2 py-1 rounded-md">{subject}</span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 flex items-center text-primary text-sm font-medium">
                            View Detailed Career Options <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-card rounded-xl p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Understanding Board Differences</h3>
                <p className="text-muted-foreground mb-4">
                  While the core subjects remain similar across boards, the naming conventions vary. 
                  CBSE and ICSE follow a subject-based selection system, while State Boards use fixed stream packages like MPC, BiPC, etc.
                </p>
                <p className="text-muted-foreground">
                  Regardless of your board, the career paths remain largely the same. Focus on your interests and strengths when choosing a stream. 
                  Each stream page shows detailed pros, cons, government jobs, private careers, and alternative paths.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}