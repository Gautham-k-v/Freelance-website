export const whatsappNumber = "+91 8590909416"
export const whatsappUrl =
  "https://wa.me/918590909416?text=" +
  encodeURIComponent(
    "Hi NexLance! I'm interested in building a website for my business. I'd like to discuss my requirements.",
  )

export const emailAddress = "codextech2025@gmail.com"

export const linkedInUrl = "https://www.linkedin.com/in/gautham-krishna-v-3a1b672a5"

export const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#work", id: "work", label: "Our Work" },
  { href: "#about", id: "about", label: "About" },
  { href: "#contact", id: "contact", label: "Contact" },
]

export const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export const services = [
  {
    id: "business",
    number: "01",
    title: "Business Websites",
    description:
      "Professional, responsive websites that establish your business online and help customers discover your services.",
    icon: "window",
  },
  {
    id: "landing",
    number: "02",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to promote products, services and businesses.",
    icon: "pointer",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce Websites",
    description:
      "Modern online shopping experiences with product listings, shopping carts and checkout functionality.",
    icon: "cart",
  },
  {
    id: "portfolio",
    number: "04",
    title: "Portfolio Websites",
    description:
      "Personal and professional portfolios that showcase your work, skills and achievements.",
    icon: "briefcase",
  },
  {
    id: "webapp",
    number: "05",
    title: "Web Applications",
    description:
      "Interactive web applications, dashboards and management systems tailored to business requirements.",
    icon: "grid",
  },
  {
    id: "redesign",
    number: "06",
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, responsive and visually appealing digital experiences.",
    icon: "refresh",
  },
]

export const budgetOptions = [
  "Under ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹60,000",
  "₹60,000 – ₹1,20,000",
  "₹1,20,000+",
  "Not sure yet",
]

const projectImage = (file) => `${import.meta.env.BASE_URL}images/projects/${file}`

export const projects = [
  {
    id: "restaurant",
    kicker: "01 / Live website",
    name: "Restaurant Landing Page",
    description:
      "A modern restaurant landing page designed to showcase restaurant offerings, menus and contact information.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://restaurant-landing-flax.vercel.app/",
    image: projectImage("restaurant-preview.webp"),
    alt: "TableBite restaurant homepage with the Kerala flavours headline and a sadya photograph",
  },
  {
    id: "gym",
    kicker: "02 / Live website",
    name: "Gym Landing Page",
    description:
      "A fitness website featuring a modern gym-focused design and promotional sections.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://gym-landingpge.vercel.app/",
    image: projectImage("gym-preview.webp"),
    alt: "Ironforge Fitness homepage with the strength headline and a training photograph",
  },
  {
    id: "realestate",
    kicker: "03 / Live website",
    name: "Real Estate Website",
    description:
      "A property-focused website designed to showcase real estate listings and generate enquiries.",
    tags: ["React", "Tailwind CSS"],
    url: "https://real-estate-rust-nu.vercel.app/",
    image: projectImage("realestate-preview.webp"),
    alt: "Malabar Estates homepage with a modern house, pool and property search",
  },
  {
    id: "saaj",
    kicker: "04 / Frontend prototype",
    name: "SAAJ Finance",
    description:
      "A frontend prototype of a Loan and Daily Collection Management System featuring customer management, loan management, collections and reporting interfaces.",
    tags: ["React", "Frontend prototype"],
    url: "https://gautham-k-v.github.io/SAAJ-Financial-/",
    image: projectImage("saaj-preview.webp"),
    alt: "SAAJ Finance dashboard prototype with customers, loans, collections and reports",
  },
]

export const reasons = [
  {
    title: "Modern Design",
    description: "Clean, professional and visually appealing website designs.",
    icon: "spark",
  },
  {
    title: "Mobile First",
    description: "Websites that work seamlessly across smartphones, tablets and desktops.",
    icon: "phone",
  },
  {
    title: "Performance Focused",
    description: "Optimized websites with attention to loading speed and usability.",
    icon: "zap",
  },
  {
    title: "Direct Communication",
    description: "Work directly with the developer throughout your project.",
    icon: "message",
  },
]

export const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your business, requirements and goals.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create a professional UI/UX design based on your brand.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build your website using modern technologies.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, optimize and deploy your website.",
  },
]

export const marqueeItems = [
  "Good design. Great development.",
  "Responsive by default",
  "Built around your brand",
  "Made to grow with you",
]
