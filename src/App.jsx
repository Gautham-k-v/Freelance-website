import About from "./components/About"
import Contact from "./components/Contact"
import FinalCta from "./components/FinalCta"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Process from "./components/Process"
import Services from "./components/Services"
import Toolkit from "./components/Toolkit"
import WhatsAppButton from "./components/WhatsAppButton"
import WhyChooseUs from "./components/WhyChooseUs"
import { EnquiryProvider } from "./context/EnquiryContext"

export default function App() {
  return (
    <EnquiryProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <About />
        <Toolkit />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </EnquiryProvider>
  )
}
