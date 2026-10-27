import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Accreditations from './components/Accreditations'
import Regulatory from './components/Regulatory'
import Team from './components/Team'
import SplitPromo from './components/SplitPromo'
import BeforeAfter from './components/BeforeAfter'
import BrandStory from './components/BrandStory'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Accreditations />
        <Regulatory />
        <Team />
        <SplitPromo />
        <BeforeAfter />
        <BrandStory />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
