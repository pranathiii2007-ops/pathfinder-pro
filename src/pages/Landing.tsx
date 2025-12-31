import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sparkles, BookOpen, Building2, Briefcase, GraduationCap, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StreamCard } from "@/components/StreamCard";
import { Navbar } from "@/components/Navbar";

const features = [
  {
    icon: Target,
    title: "Stream Selection",
    description: "Discover the perfect stream based on your interests and strengths",
  },
  {
    icon: BookOpen,
    title: "Detailed Career Paths",
    description: "Explore in-depth career options with salary insights and growth prospects",
  },
  {
    icon: Building2,
    title: "College Finder",
    description: "Find top colleges in your area with rankings and admission details",
  },
  {
    icon: Briefcase,
    title: "Internships",
    description: "Access curated internship opportunities for hands-on experience",
  },
];

const streams = [
  {
    title: "Science - PCM/MPC",
    description: "Physics, Chemistry, Mathematics - Gateway to Engineering, Technology & Research",
    icon: GraduationCap,
    color: "primary" as const,
    href: "/streams/science-pcm",
  },
  {
    title: "Science - PCB/BiPC",
    description: "Physics, Chemistry, Biology - Path to Medicine, Life Sciences & Healthcare",
    icon: BookOpen,
    color: "secondary" as const,
    href: "/streams/science-pcb",
  },
  {
    title: "Commerce",
    description: "Business, Economics, Accounting - Foundation for Finance & Management",
    icon: Building2,
    color: "accent" as const,
    href: "/streams/commerce",
  },
  {
    title: "Arts/Humanities",
    description: "Literature, History, Social Sciences - Explore Creative & Social Careers",
    icon: Users,
    color: "primary" as const,
    href: "/streams/arts",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Your Career Journey Starts Here
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Navigate Your
              <span className="text-gradient-primary block">Academic Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Comprehensive career guidance for students after 10th, 12th, and beyond.
              Explore streams, colleges, internships, and career paths across CBSE, ICSE, and State Boards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/streams">
                <Button size="lg" className="gradient-primary text-primary-foreground gap-2 px-8">
                  Explore Streams
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="gap-2 px-8">
                  View Career Paths
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-gradient-primary">Succeed</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From choosing the right stream to landing your dream internship, we've got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="text-gradient-primary">Stream</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're in State Board, CBSE, or ICSE - find the perfect path for your future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streams.map((stream, index) => (
              <StreamCard key={stream.title} {...stream} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/streams">
              <Button variant="outline" size="lg" className="gap-2">
                View All Streams
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
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
              Join thousands of students who have found their perfect career path with CareerPath India.
            </p>
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="gap-2 px-8">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-bold">CareerPath India</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 CareerPath India. Empowering students to make informed career choices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}