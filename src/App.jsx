import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Download from './components/Download'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </>
  )
}
