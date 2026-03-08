import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Briefcase, Clock, MapPin, ExternalLink, Rocket, GraduationCap, FileText, CheckCircle2, Target, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { liveInternships } from "@/data/internships";

const roadmapSteps = [
  { step: 1, title: "Choose Your Career Role", description: "Identify 2-3 career roles you're interested in (e.g., Software Engineer, Data Scientist)", icon: Target },
  { step: 2, title: "Learn Required Skills", description: "Master the key skills for your chosen role through online courses and self-study", icon: GraduationCap },
  { step: 3, title: "Build Mini Projects", description: "Create 3-5 projects showcasing your skills. Host on GitHub. Document everything.", icon: FileText },
  { step: 4, title: "Prepare Your Resume", description: "Create an ATS-friendly resume highlighting projects, skills, and education", icon: FileText },
  { step: 5, title: "Apply on Platforms", description: "Apply strategically on Internshala, LinkedIn, company career pages, and AICTE portal", icon: ExternalLink },
  { step: 6, title: "Track Applications", description: "Keep a tracker for all applications — company, role, status, follow-up dates", icon: CheckCircle2 },
];

const platforms = [
  { name: "Internshala", description: "India's largest internship platform — filter by location, stipend, duration", url: "https://internshala.com", tag: "Most Popular" },
  { name: "LinkedIn", description: "Professional networking + job board — great for referrals", url: "https://linkedin.com/jobs", tag: "Networking" },
  { name: "AICTE Internship Portal", description: "Government-backed internship opportunities for engineering students", url: "https://internship.aicte-india.org", tag: "Government" },
  { name: "Unstop (formerly D2C)", description: "Competitions, hackathons, and internship opportunities", url: "https://unstop.com", tag: "Competitions" },
  { name: "Naukri.com", description: "One of India's biggest job portals with internship listings", url: "https://www.naukri.com/internship-jobs", tag: "Jobs" },
  { name: "AngelList / Wellfound", description: "Startup-focused job board — find roles at innovative startups", url: "https://wellfound.com", tag: "Startups" },
];

const liveInternships = [
  // Big Tech
  { title: "Software Development Intern", company: "Google", location: "Bangalore", duration: "3 months", stipend: "₹80,000/month", applyUrl: "https://www.google.com/about/careers/applications/jobs/results/?q=intern&location=India" },
  { title: "ML Research Intern", company: "Microsoft", location: "Bangalore", duration: "3 months", stipend: "₹60,000/month", applyUrl: "https://careers.microsoft.com/students/us/en/search-results?keywords=intern&location=India" },
  { title: "Data Analyst Intern", company: "Amazon", location: "Hyderabad", duration: "6 months", stipend: "₹50,000/month", applyUrl: "https://www.amazon.jobs/en/search?base_query=intern&loc_query=India&country=IND" },
  { title: "SWE Intern", company: "Meta", location: "Remote", duration: "3 months", stipend: "₹70,000/month", applyUrl: "https://www.metacareers.com/jobs?q=intern&location=India" },
  { title: "Hardware Engineering Intern", company: "Apple", location: "Hyderabad", duration: "6 months", stipend: "₹65,000/month", applyUrl: "https://jobs.apple.com/en-in/search?search=intern" },
  { title: "Cloud Solutions Intern", company: "Oracle", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://www.oracle.com/in/careers/students-grads/" },
  { title: "Security Engineering Intern", company: "IBM", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://www.ibm.com/careers/search?field_keyword_18[0]=Intern&primary_country=IN" },
  { title: "Full Stack Intern", company: "Adobe", location: "Noida", duration: "6 months", stipend: "₹55,000/month", applyUrl: "https://careers.adobe.com/us/en/search-results?keywords=intern%20india" },
  { title: "Data Science Intern", company: "Salesforce", location: "Hyderabad", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://careers.salesforce.com/en/jobs/?search=intern&country=India" },
  { title: "SDE Intern", company: "Samsung R&D", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://www.samsung.com/in/about-us/careers/" },

  // Global Giants
  { title: "SWE Intern", company: "Netflix", location: "Remote", duration: "3 months", stipend: "₹75,000/month", applyUrl: "https://jobs.netflix.com/search?q=intern" },
  { title: "AI/ML Intern", company: "NVIDIA", location: "Bangalore/Pune", duration: "6 months", stipend: "₹60,000/month", applyUrl: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=intern" },
  { title: "Platform Intern", company: "Uber", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://www.uber.com/us/en/careers/list/?query=intern&location=IND" },
  { title: "Software Intern", company: "Tesla", location: "Remote", duration: "3 months", stipend: "₹65,000/month", applyUrl: "https://www.tesla.com/careers/search/?query=intern" },
  { title: "Cloud Intern", company: "Spotify", location: "Remote", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://www.lifeatspotify.com/jobs?query=intern" },
  { title: "SWE Intern", company: "Twitter/X", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://careers.twitter.com/" },
  { title: "Data Intern", company: "Airbnb", location: "Remote", duration: "3 months", stipend: "₹60,000/month", applyUrl: "https://careers.airbnb.com/" },
  { title: "Engineering Intern", company: "Stripe", location: "Remote", duration: "3 months", stipend: "₹70,000/month", applyUrl: "https://stripe.com/jobs/search?query=intern" },
  { title: "Product Intern", company: "Atlassian", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://www.atlassian.com/company/careers/all-jobs?search=intern" },
  { title: "SDE Intern", company: "PayPal", location: "Bangalore/Chennai", duration: "6 months", stipend: "₹45,000/month", applyUrl: "https://careers.pypl.com/search-jobs?k=intern&l=India" },
  { title: "Software Intern", company: "Cisco", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://jobs.cisco.com/jobs/SearchJobs/intern" },
  { title: "DevOps Intern", company: "VMware", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://careers.vmware.com/main/jobs?keywords=intern" },
  { title: "SWE Intern", company: "Qualcomm", location: "Hyderabad", duration: "6 months", stipend: "₹45,000/month", applyUrl: "https://www.qualcomm.com/company/careers" },
  { title: "Embedded Systems Intern", company: "Intel", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://jobs.intel.com/en/search-jobs?k=intern" },
  { title: "Backend Intern", company: "Shopify", location: "Remote", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://www.shopify.com/careers/search?q=intern" },
  { title: "Platform Intern", company: "LinkedIn", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://careers.linkedin.com/students" },
  { title: "Research Intern", company: "DeepMind", location: "Remote", duration: "3 months", stipend: "₹80,000/month", applyUrl: "https://deepmind.google/about/careers/" },
  { title: "AI Intern", company: "OpenAI", location: "Remote", duration: "3 months", stipend: "₹90,000/month", applyUrl: "https://openai.com/careers/" },

  // Indian Startups & Companies
  { title: "Web Developer Intern", company: "Flipkart", location: "Bangalore", duration: "3 months", stipend: "₹40,000/month", applyUrl: "https://www.linkedin.com/company/flipkart/jobs/" },
  { title: "Product Design Intern", company: "Swiggy", location: "Remote", duration: "3 months", stipend: "₹30,000/month", applyUrl: "https://www.linkedin.com/company/swiggy/jobs/" },
  { title: "Backend Engineer Intern", company: "Razorpay", location: "Bangalore", duration: "6 months", stipend: "₹45,000/month", applyUrl: "https://www.linkedin.com/company/razorpay/jobs/" },
  { title: "Marketing Intern", company: "Zomato", location: "Gurugram", duration: "2 months", stipend: "₹25,000/month", applyUrl: "https://www.linkedin.com/company/zomato/jobs/" },
  { title: "Frontend Intern", company: "PhonePe", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://www.phonepe.com/careers/" },
  { title: "Data Engineering Intern", company: "Paytm", location: "Noida", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://paytm.com/careers" },
  { title: "DevOps Intern", company: "Zerodha", location: "Bangalore", duration: "6 months", stipend: "₹30,000/month", applyUrl: "https://zerodha.com/careers" },
  { title: "Mobile Dev Intern", company: "CRED", location: "Bangalore", duration: "3 months", stipend: "₹40,000/month", applyUrl: "https://careers.cred.club/" },
  { title: "QA Intern", company: "Meesho", location: "Bangalore", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://www.meesho.io/careers" },
  { title: "ML Engineer Intern", company: "Ola", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://www.olacabs.com/careers" },

  // IT Services
  { title: "Cloud Engineering Intern", company: "TCS", location: "Mumbai", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://www.tcs.com/careers/tcs-nextstep-portal" },
  { title: "SAP Intern", company: "Infosys", location: "Mysore", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://www.infosys.com/careers/internship.html" },
  { title: "Automation Intern", company: "Wipro", location: "Bangalore", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://careers.wipro.com/opportunities/students" },
  { title: "Consulting Intern", company: "Accenture", location: "Mumbai", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://www.accenture.com/in-en/careers/local/students-graduates" },
  { title: "Cybersecurity Intern", company: "HCLTech", location: "Noida", duration: "6 months", stipend: "₹18,000/month", applyUrl: "https://www.hcltech.com/careers" },
  { title: "Network Intern", company: "Tech Mahindra", location: "Pune", duration: "6 months", stipend: "₹12,000/month", applyUrl: "https://careers.techmahindra.com/" },

  // Government & Research
  { title: "DRDO Project Trainee", company: "DRDO", location: "Delhi", duration: "6 months", stipend: "₹20,000/month", applyUrl: "https://rac.gov.in/" },
  { title: "AI Research Intern", company: "IIT Madras", location: "Chennai", duration: "2 months", stipend: "₹15,000/month", applyUrl: "https://internshala.com/internships/internship-in-chennai" },
  { title: "Space Tech Intern", company: "ISRO", location: "Bangalore", duration: "2 months", stipend: "₹10,000/month", applyUrl: "https://www.isro.gov.in/Careers.html" },
  { title: "Research Intern", company: "CSIR Labs", location: "Multiple", duration: "2 months", stipend: "₹10,000/month", applyUrl: "https://www.csir.res.in/" },
  { title: "Biotech Intern", company: "IISc Bangalore", location: "Bangalore", duration: "2 months", stipend: "₹12,000/month", applyUrl: "https://iisc.ac.in/admissions/" },

  // Finance & Consulting
  { title: "Investment Banking Intern", company: "Goldman Sachs", location: "Bangalore", duration: "3 months", stipend: "₹70,000/month", applyUrl: "https://www.goldmansachs.com/careers/students/programs/india/" },
  { title: "Risk Analytics Intern", company: "JP Morgan", location: "Mumbai", duration: "3 months", stipend: "₹60,000/month", applyUrl: "https://careers.jpmorgan.com/in/en/students/programs" },
  { title: "Strategy Intern", company: "McKinsey", location: "Delhi", duration: "3 months", stipend: "₹80,000/month", applyUrl: "https://www.mckinsey.com/careers/search-jobs?query=intern&locations=India" },
  { title: "Audit Intern", company: "Deloitte", location: "Mumbai", duration: "3 months", stipend: "₹30,000/month", applyUrl: "https://www2.deloitte.com/in/en/careers/students.html" },
  { title: "Tax Intern", company: "EY India", location: "Delhi", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://www.ey.com/en_in/careers/students" },

  // Design & Content
  { title: "UI/UX Design Intern", company: "Figma", location: "Remote", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://www.figma.com/careers/" },
  { title: "Graphic Design Intern", company: "Canva", location: "Remote", duration: "3 months", stipend: "₹35,000/month", applyUrl: "https://www.canva.com/careers/" },
  { title: "Content Writing Intern", company: "Unacademy", location: "Remote", duration: "3 months", stipend: "₹15,000/month", applyUrl: "https://unacademy.com/careers" },
  { title: "Video Editing Intern", company: "ShareChat", location: "Bangalore", duration: "3 months", stipend: "₹20,000/month", applyUrl: "https://sharechat.com/careers" },
];

export default function Internships() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" /> Internship System
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Internship</span> Discovery & Roadmap
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Find live internships, follow the roadmap, and explore top platforms to land your dream internship.
            </p>
          </motion.div>

          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="listings">💼 Live Internships</TabsTrigger>
              <TabsTrigger value="roadmap">🗺️ Roadmap</TabsTrigger>
              <TabsTrigger value="platforms">🌐 Platforms</TabsTrigger>
            </TabsList>

            <TabsContent value="listings">
              <div className="grid md:grid-cols-2 gap-4">
                {liveInternships.map((item, i) => (
                  <motion.div key={item.title + item.company} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{item.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{item.duration}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{item.stipend}</span>
                    </div>
                    <a href={item.applyUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gradient-primary text-primary-foreground gap-1">
                        Apply Now <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roadmap">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Internship Roadmap</h2>
                <div className="space-y-4">
                  {roadmapSteps.map((item, i) => (
                    <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                          {item.step}
                        </div>
                        {i < roadmapSteps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                      </div>
                      <div className="pb-8">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="platforms">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((platform, i) => (
                  <motion.div key={platform.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="bg-card rounded-xl p-6 border border-border hover-lift h-full">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{platform.tag}</span>
                        <h3 className="font-bold text-lg mt-3 mb-2">{platform.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{platform.description}</p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Visit Platform <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
