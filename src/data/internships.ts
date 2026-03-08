export interface Internship {
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  applyUrl: string;
  tags: string[]; // career IDs this internship relates to
}

export const liveInternships: Internship[] = [
  // Big Tech
  { title: "Software Development Intern", company: "Google", location: "Bangalore", duration: "3 months", stipend: "₹80,000/month", applyUrl: "https://www.google.com/about/careers/applications/jobs/results/?q=intern&location=India", tags: ["cse", "data-science", "ai-ml"] },
  { title: "ML Research Intern", company: "Microsoft", location: "Bangalore", duration: "3 months", stipend: "₹60,000/month", applyUrl: "https://careers.microsoft.com/students/us/en/search-results?keywords=intern&location=India", tags: ["cse", "data-science", "ai-ml"] },
  { title: "Data Analyst Intern", company: "Amazon", location: "Hyderabad", duration: "6 months", stipend: "₹50,000/month", applyUrl: "https://www.amazon.jobs/en/search?base_query=intern&loc_query=India&country=IND", tags: ["cse", "data-science"] },
  { title: "SWE Intern", company: "Meta", location: "Remote", duration: "3 months", stipend: "₹70,000/month", applyUrl: "https://www.metacareers.com/jobs?q=intern&location=India", tags: ["cse"] },
  { title: "Hardware Engineering Intern", company: "Apple", location: "Hyderabad", duration: "6 months", stipend: "₹65,000/month", applyUrl: "https://jobs.apple.com/en-in/search?search=intern", tags: ["ece", "mechanical"] },
  { title: "Cloud Solutions Intern", company: "Oracle", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://www.oracle.com/in/careers/students-grads/", tags: ["cse", "cloud-devops"] },
  { title: "Security Engineering Intern", company: "IBM", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://www.ibm.com/careers/search?field_keyword_18[0]=Intern&primary_country=IN", tags: ["cse", "cyber-security"] },
  { title: "Full Stack Intern", company: "Adobe", location: "Noida", duration: "6 months", stipend: "₹55,000/month", applyUrl: "https://careers.adobe.com/us/en/search-results?keywords=intern%20india", tags: ["cse", "design"] },
  { title: "Data Science Intern", company: "Salesforce", location: "Hyderabad", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://careers.salesforce.com/en/jobs/?search=intern&country=India", tags: ["cse", "data-science"] },
  { title: "SDE Intern", company: "Samsung R&D", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://www.samsung.com/in/about-us/careers/", tags: ["cse", "ece"] },

  // Global Giants
  { title: "SWE Intern", company: "Netflix", location: "Remote", duration: "3 months", stipend: "₹75,000/month", applyUrl: "https://jobs.netflix.com/search?q=intern", tags: ["cse"] },
  { title: "AI/ML Intern", company: "NVIDIA", location: "Bangalore/Pune", duration: "6 months", stipend: "₹60,000/month", applyUrl: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=intern", tags: ["cse", "data-science", "ai-ml", "ece"] },
  { title: "Platform Intern", company: "Uber", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://www.uber.com/us/en/careers/list/?query=intern&location=IND", tags: ["cse"] },
  { title: "Software Intern", company: "Tesla", location: "Remote", duration: "3 months", stipend: "₹65,000/month", applyUrl: "https://www.tesla.com/careers/search/?query=intern", tags: ["cse", "mechanical", "ece", "automobile"] },
  { title: "Cloud Intern", company: "Spotify", location: "Remote", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://www.lifeatspotify.com/jobs?query=intern", tags: ["cse"] },
  { title: "SWE Intern", company: "Twitter/X", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://careers.twitter.com/", tags: ["cse"] },
  { title: "Data Intern", company: "Airbnb", location: "Remote", duration: "3 months", stipend: "₹60,000/month", applyUrl: "https://careers.airbnb.com/", tags: ["cse", "data-science"] },
  { title: "Engineering Intern", company: "Stripe", location: "Remote", duration: "3 months", stipend: "₹70,000/month", applyUrl: "https://stripe.com/jobs/search?query=intern", tags: ["cse", "finance"] },
  { title: "Product Intern", company: "Atlassian", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://www.atlassian.com/company/careers/all-jobs?search=intern", tags: ["cse", "mba"] },
  { title: "SDE Intern", company: "PayPal", location: "Bangalore/Chennai", duration: "6 months", stipend: "₹45,000/month", applyUrl: "https://careers.pypl.com/search-jobs?k=intern&l=India", tags: ["cse", "finance"] },
  { title: "Software Intern", company: "Cisco", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://jobs.cisco.com/jobs/SearchJobs/intern", tags: ["cse", "ece"] },
  { title: "DevOps Intern", company: "VMware", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://careers.vmware.com/main/jobs?keywords=intern", tags: ["cse", "cloud-devops"] },
  { title: "SWE Intern", company: "Qualcomm", location: "Hyderabad", duration: "6 months", stipend: "₹45,000/month", applyUrl: "https://www.qualcomm.com/company/careers", tags: ["cse", "ece"] },
  { title: "Embedded Systems Intern", company: "Intel", location: "Bangalore", duration: "6 months", stipend: "₹40,000/month", applyUrl: "https://jobs.intel.com/en/search-jobs?k=intern", tags: ["ece", "cse"] },
  { title: "Backend Intern", company: "Shopify", location: "Remote", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://www.shopify.com/careers/search?q=intern", tags: ["cse"] },
  { title: "Platform Intern", company: "LinkedIn", location: "Bangalore", duration: "3 months", stipend: "₹55,000/month", applyUrl: "https://careers.linkedin.com/students", tags: ["cse", "data-science"] },
  { title: "Research Intern", company: "DeepMind", location: "Remote", duration: "3 months", stipend: "₹80,000/month", applyUrl: "https://deepmind.google/about/careers/", tags: ["data-science", "ai-ml", "cse"] },
  { title: "AI Intern", company: "OpenAI", location: "Remote", duration: "3 months", stipend: "₹90,000/month", applyUrl: "https://openai.com/careers/", tags: ["data-science", "ai-ml", "cse"] },

  // Indian Startups & Companies
  { title: "Web Developer Intern", company: "Flipkart", location: "Bangalore", duration: "3 months", stipend: "₹40,000/month", applyUrl: "https://www.linkedin.com/company/flipkart/jobs/", tags: ["cse"] },
  { title: "Product Design Intern", company: "Swiggy", location: "Remote", duration: "3 months", stipend: "₹30,000/month", applyUrl: "https://www.linkedin.com/company/swiggy/jobs/", tags: ["design", "mba"] },
  { title: "Backend Engineer Intern", company: "Razorpay", location: "Bangalore", duration: "6 months", stipend: "₹45,000/month", applyUrl: "https://www.linkedin.com/company/razorpay/jobs/", tags: ["cse", "finance"] },
  { title: "Marketing Intern", company: "Zomato", location: "Gurugram", duration: "2 months", stipend: "₹25,000/month", applyUrl: "https://www.linkedin.com/company/zomato/jobs/", tags: ["mba", "journalism"] },
  { title: "Frontend Intern", company: "PhonePe", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://www.phonepe.com/careers/", tags: ["cse"] },
  { title: "Data Engineering Intern", company: "Paytm", location: "Noida", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://paytm.com/careers", tags: ["cse", "data-science"] },
  { title: "DevOps Intern", company: "Zerodha", location: "Bangalore", duration: "6 months", stipend: "₹30,000/month", applyUrl: "https://zerodha.com/careers", tags: ["cse", "finance"] },
  { title: "Mobile Dev Intern", company: "CRED", location: "Bangalore", duration: "3 months", stipend: "₹40,000/month", applyUrl: "https://careers.cred.club/", tags: ["cse", "design"] },
  { title: "QA Intern", company: "Meesho", location: "Bangalore", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://www.meesho.io/careers", tags: ["cse"] },
  { title: "ML Engineer Intern", company: "Ola", location: "Bangalore", duration: "6 months", stipend: "₹35,000/month", applyUrl: "https://www.olacabs.com/careers", tags: ["cse", "data-science", "ai-ml"] },

  // IT Services
  { title: "Cloud Engineering Intern", company: "TCS", location: "Mumbai", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://www.tcs.com/careers/tcs-nextstep-portal", tags: ["cse"] },
  { title: "SAP Intern", company: "Infosys", location: "Mysore", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://www.infosys.com/careers/internship.html", tags: ["cse"] },
  { title: "Automation Intern", company: "Wipro", location: "Bangalore", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://careers.wipro.com/opportunities/students", tags: ["cse"] },
  { title: "Consulting Intern", company: "Accenture", location: "Mumbai", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://www.accenture.com/in-en/careers/local/students-graduates", tags: ["cse", "mba"] },
  { title: "Cybersecurity Intern", company: "HCLTech", location: "Noida", duration: "6 months", stipend: "₹18,000/month", applyUrl: "https://www.hcltech.com/careers", tags: ["cse", "cyber-security"] },
  { title: "Network Intern", company: "Tech Mahindra", location: "Pune", duration: "6 months", stipend: "₹12,000/month", applyUrl: "https://careers.techmahindra.com/", tags: ["cse", "ece"] },

  // Government & Research
  { title: "DRDO Project Trainee", company: "DRDO", location: "Delhi", duration: "6 months", stipend: "₹20,000/month", applyUrl: "https://rac.gov.in/", tags: ["cse", "mechanical", "ece", "aerospace"] },
  { title: "AI Research Intern", company: "IIT Madras", location: "Chennai", duration: "2 months", stipend: "₹15,000/month", applyUrl: "https://internshala.com/internships/internship-in-chennai", tags: ["cse", "data-science", "ai-ml"] },
  { title: "Space Tech Intern", company: "ISRO", location: "Bangalore", duration: "2 months", stipend: "₹10,000/month", applyUrl: "https://www.isro.gov.in/Careers.html", tags: ["mechanical", "ece", "aerospace"] },
  { title: "Research Intern", company: "CSIR Labs", location: "Multiple", duration: "2 months", stipend: "₹10,000/month", applyUrl: "https://www.csir.res.in/", tags: ["biotech", "pharmacy", "mechanical"] },
  { title: "Biotech Intern", company: "IISc Bangalore", location: "Bangalore", duration: "2 months", stipend: "₹12,000/month", applyUrl: "https://iisc.ac.in/admissions/", tags: ["biotech"] },

  // Finance & Consulting
  { title: "Investment Banking Intern", company: "Goldman Sachs", location: "Bangalore", duration: "3 months", stipend: "₹70,000/month", applyUrl: "https://www.goldmansachs.com/careers/students/programs/india/", tags: ["finance", "ca", "mba"] },
  { title: "Risk Analytics Intern", company: "JP Morgan", location: "Mumbai", duration: "3 months", stipend: "₹60,000/month", applyUrl: "https://careers.jpmorgan.com/in/en/students/programs", tags: ["finance", "ca", "data-science"] },
  { title: "Strategy Intern", company: "McKinsey", location: "Delhi", duration: "3 months", stipend: "₹80,000/month", applyUrl: "https://www.mckinsey.com/careers/search-jobs?query=intern&locations=India", tags: ["mba", "finance"] },
  { title: "Audit Intern", company: "Deloitte", location: "Mumbai", duration: "3 months", stipend: "₹30,000/month", applyUrl: "https://www2.deloitte.com/in/en/careers/students.html", tags: ["ca", "cs", "finance"] },
  { title: "Tax Intern", company: "EY India", location: "Delhi", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://www.ey.com/en_in/careers/students", tags: ["ca", "cs", "cma"] },

  // Design & Content
  { title: "UI/UX Design Intern", company: "Figma", location: "Remote", duration: "3 months", stipend: "₹50,000/month", applyUrl: "https://www.figma.com/careers/", tags: ["design"] },
  { title: "Graphic Design Intern", company: "Canva", location: "Remote", duration: "3 months", stipend: "₹35,000/month", applyUrl: "https://www.canva.com/careers/", tags: ["design"] },
  { title: "Content Writing Intern", company: "Unacademy", location: "Remote", duration: "3 months", stipend: "₹15,000/month", applyUrl: "https://unacademy.com/careers", tags: ["journalism"] },
  { title: "Video Editing Intern", company: "ShareChat", location: "Bangalore", duration: "3 months", stipend: "₹20,000/month", applyUrl: "https://sharechat.com/careers", tags: ["journalism", "design"] },

  // Additional domain-specific
  { title: "Civil Engineering Intern", company: "L&T", location: "Mumbai", duration: "6 months", stipend: "₹20,000/month", applyUrl: "https://www.larsentoubro.com/careers/", tags: ["civil"] },
  { title: "Structural Design Intern", company: "Shapoorji Pallonji", location: "Mumbai", duration: "6 months", stipend: "₹18,000/month", applyUrl: "https://www.shapoorjipallonji.com/careers", tags: ["civil", "architecture"] },
  { title: "Architecture Intern", company: "DLF", location: "Gurugram", duration: "3 months", stipend: "₹15,000/month", applyUrl: "https://www.dlf.in/careers/", tags: ["architecture", "interior-design", "civil"] },
  { title: "Interior Design Intern", company: "Livspace", location: "Bangalore", duration: "3 months", stipend: "₹20,000/month", applyUrl: "https://www.livspace.com/in/careers", tags: ["interior-design", "design"] },
  { title: "Automobile Engineering Intern", company: "Tata Motors", location: "Pune", duration: "6 months", stipend: "₹25,000/month", applyUrl: "https://www.tatamotors.com/careers/", tags: ["automobile", "mechanical"] },
  { title: "EV Design Intern", company: "Ather Energy", location: "Bangalore", duration: "6 months", stipend: "₹30,000/month", applyUrl: "https://www.atherenergy.com/careers", tags: ["automobile", "mechanical", "ece"] },
  { title: "Aerospace Intern", company: "HAL", location: "Bangalore", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://hal-india.co.in/careers", tags: ["aerospace", "mechanical"] },
  { title: "Clinical Research Intern", company: "Sun Pharma", location: "Mumbai", duration: "6 months", stipend: "₹20,000/month", applyUrl: "https://sunpharma.com/careers/", tags: ["pharmacy", "biotech", "medicine"] },
  { title: "Pharma R&D Intern", company: "Dr. Reddy's", location: "Hyderabad", duration: "6 months", stipend: "₹18,000/month", applyUrl: "https://www.drreddys.com/careers", tags: ["pharmacy", "biotech"] },
  { title: "Hospital Management Intern", company: "Apollo Hospitals", location: "Chennai", duration: "3 months", stipend: "₹15,000/month", applyUrl: "https://www.apollohospitals.com/careers/", tags: ["medicine", "nursing", "hotel-management"] },
  { title: "Psychology Research Intern", company: "NIMHANS", location: "Bangalore", duration: "2 months", stipend: "₹10,000/month", applyUrl: "https://nimhans.ac.in/", tags: ["psychology"] },
  { title: "Counseling Intern", company: "Practo", location: "Remote", duration: "3 months", stipend: "₹15,000/month", applyUrl: "https://www.practo.com/company/careers", tags: ["psychology", "medicine"] },
  { title: "Legal Intern", company: "AZB & Partners", location: "Mumbai", duration: "2 months", stipend: "₹25,000/month", applyUrl: "https://www.azbpartners.com/careers", tags: ["law"] },
  { title: "Corporate Law Intern", company: "Cyril Amarchand", location: "Delhi", duration: "2 months", stipend: "₹20,000/month", applyUrl: "https://www.cyrilshroff.com/careers/", tags: ["law", "cs"] },
  { title: "Nursing Intern", company: "Fortis Healthcare", location: "Delhi", duration: "6 months", stipend: "₹12,000/month", applyUrl: "https://www.fortishealthcare.com/careers", tags: ["nursing", "medicine"] },
  { title: "Hotel Management Intern", company: "Taj Hotels", location: "Mumbai", duration: "6 months", stipend: "₹15,000/month", applyUrl: "https://www.tajhotels.com/en-in/careers/", tags: ["hotel-management"] },
  { title: "Aviation Ground Staff Intern", company: "IndiGo", location: "Delhi", duration: "3 months", stipend: "₹15,000/month", applyUrl: "https://www.goindigo.in/information/career.html", tags: ["aviation"] },
  { title: "Pilot Cadet Program", company: "Air India", location: "Multiple", duration: "12 months", stipend: "₹20,000/month", applyUrl: "https://www.airindia.com/in/en/careers.html", tags: ["aviation"] },
  { title: "Cost Accounting Intern", company: "Reliance Industries", location: "Mumbai", duration: "3 months", stipend: "₹25,000/month", applyUrl: "https://careers.ril.com/", tags: ["cma", "ca", "finance"] },
];

export function getInternshipsByCareer(careerId: string): Internship[] {
  return liveInternships.filter(i => i.tags.includes(careerId));
}
