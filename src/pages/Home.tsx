import HeroSection from '@/components/HeroSection'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/component/Contact'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Contact />
      <AboutSection/>
      <Testimonials />
    </div>
  )
}

export default HomePage