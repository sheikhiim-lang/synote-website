import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar               from './components/Navbar'
import Hero                 from './components/Hero'
import ShowcaseSection      from './components/ShowcaseSection'
import ImageAnalysisSection from './components/ImageAnalysisSection'
import ChatSection          from './components/ChatSection'
import Features             from './components/Features'
import HowItWorks           from './components/HowItWorks'
import Download             from './components/Download'
import Footer               from './components/Footer'
import Privacy              from './components/Privacy'
import AccountDeletion      from './components/AccountDeletion'

import './index.css'

function MainPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShowcaseSection />
        <ImageAnalysisSection />
        <ChatSection />
        <Features />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                 element={<MainPage />} />
        <Route path="/privacy"          element={<Privacy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
      </Routes>
    </BrowserRouter>
  )
}
