import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronRight, Sparkles, BookOpen, Building2, Briefcase,
  GraduationCap, Target, Users, Footprints, MapPin, TrendingUp, Star,
  Rocket, Shield, Brain, Landmark, Code, Stethoscope, Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const careerTreePaths = [
  { path: "10th → MPC → Engineering → CSE → AI Engineer", color: "primary", icon: Code },
  { path: "10th → BiPC → MBBS → Specialization → Doctor", color: "secondary", icon: Stethoscope },
  { path: "10th → Commerce → CA → Financial Analyst", color: "accent", icon: TrendingUp },
  { path: "10th → Arts → Law → Advocate / Judge", color: "primary", icon: Scale },
  { path: "10th → Diploma → Lateral Entry → Engineer", color: "secondary", icon: Rocket },
];

const stages = [
  { title: "After 10th", desc: "Choose the right stream — Science, Commerce, Arts, or Diploma", icon: GraduationCap, href: "/streams", color: "gradient-primary" },
  { title: "After Intermediate", desc: "Explore branches, specializations & entrance exams", icon: BookOpen, href: "/intermediate", color: "gradient-secondary" },
  { title: "B.Tech / Degree", desc: "Career roles, government jobs, internships & industry exposure", icon: Briefcase, href: "/btech", color: "gradient-accent" },
  { title: "Find Colleges", desc: "Discover top colleges near you with map-based search", icon: MapPin, href: "/colleges", color: "gradient-primary" },
];

const features = [
  { icon: Target, title: "Guided Career Tree", desc: "Step-by-step paths from 10th to your dream career" },
  { icon: Shield, title: "Govt + Private Jobs", desc: "Complete coverage of both government and private career paths" },
  { icon: Brain, title: "Skill Mapping", desc: "Know what skills you need for every career role" },
  { icon: Landmark, title: "College Discovery", desc: "Find colleges near you with location-based search" },
  { icon: Rocket, title: "Internship Roadmap", desc: "Step-by-step guide to land your first internship" },
  { icon: TrendingUp, title: "Salary Insights", desc: "Real salary data and growth projections for every career" },
];

const stats = [
  { value: "50+", label: "Career Paths" },
  { value: "200+", label: "Colleges Listed" },
  { value: "100+", label: "Internship Guides" },
  { value: "5", label: "Academic Stages" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Every Future Begins With The Right Step
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your Complete
              <span className="text-gradient-primary block">Career Guidance</span>
              Platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Navigate every academic milestone — from choosing your stream after 10th to landing your dream career.
              Government jobs, private careers, internships, and colleges — all in one guided experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/streams">
                <Button size="lg" className="gradient-primary text-primary-foreground gap-2 px-8 text-lg h-14">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="gap-2 px-8 text-lg h-14">
                  Explore Career Paths
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Stages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="text-gradient-primary">Stage</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where are you right now? Select your current academic stage to see all your options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={stage.href}>
                  <div className="group bg-card rounded-xl p-6 border border-border hover-lift h-full text-left">
                    <div className={`w-14 h-14 rounded-xl ${stage.color} flex items-center justify-center mb-4`}>
                      <stage.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{stage.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{stage.desc}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Tree Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See The <span className="text-gradient-primary">Career Tree</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every path is covered. From 10th grade to your dream career — see example journeys.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {careerTreePaths.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border hover-lift flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl gradient-${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{item.path}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 text-sm"
          >
            ✅ Every stream covered — Science, Commerce, Arts, Diploma, Vocational & more
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-gradient-primary">Future Steps?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlike scattered career websites, we provide a complete guided experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-6 rounded-xl border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Discovery Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <MapPin className="w-4 h-4" />
                    Location-Based Discovery
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Find Colleges <span className="text-gradient-primary">Near You</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Search colleges by city, state, or course. View locations, distance, and area details.
                    Get personalized college recommendations based on your profile.
                  </p>
                  <Link to="/colleges">
                    <Button className="gradient-primary text-primary-foreground gap-2">
                      Explore Colleges <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <div className="bg-muted/50 p-8 lg:p-12 flex items-center justify-center min-h-[300px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="grid grid-cols-2 gap-3 max-w-sm">
                    {["IIT Hyderabad", "BITS Pilani", "NIT Warangal", "IIIT Bangalore"].map((name, i) => (
                      <div key={name} className="bg-card rounded-lg p-4 border border-border text-left">
                        <Star className="w-4 h-4 text-warning mb-1" />
                        <p className="font-semibold text-sm">{name}</p>
                        <p className="text-xs text-muted-foreground mt-1">Engineering</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Create your profile to get personalized recommendations
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Shape Your Future?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of students making informed decisions about their academic and career future with Future Steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="gap-2 px-8">
                  Create Free Profile
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/streams">
                <Button size="lg" variant="outline" className="gap-2 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Without Signup
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Footprints className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Future Steps</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Future Steps. Empowering students to make informed career choices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}