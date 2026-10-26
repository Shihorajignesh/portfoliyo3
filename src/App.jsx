import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import Journey from './components/Journey'
import Projects from './components/Projects'
import GithubSection from './components/GithubSection'
import Services from './components/Services'
import Process from './components/Process'
import WhyHireMe from './components/WhyHireMe'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/Ui/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />

      {/* Global background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -left-40 top-0 h-112 w-md rounded-full bg-brand-orange/15 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-104 w-104 rounded-full bg-brand-violet/15 blur-[120px]" />
      </div>
      <CursorGlow />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Expertise />
        <Journey />
        <Projects />
        <GithubSection />
        <Services />
        <Process />
        <WhyHireMe />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}