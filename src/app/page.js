import AboutSection from '@/components/AboutSection'
import AchievementsSection from '@/components/AchievementsSection'
import EmailSection from '@/components/EmailSection'
import Facebook from '@/components/Facebook'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import MyServices from '@/components/MyServices'
import MySkill from '@/components/MySkill'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectsSection'
 
import { Toaster } from 'react-hot-toast'
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]"> 
      
      <section className='container'><Navbar/></section>  
      <section className='container mt-24 mx-auto py-4 px-12 md:px-5 lg:px-12'>
        <HeroSection />
        <AchievementsSection/>
        <AboutSection />
        <MyServices />
        <MySkill/>
       <ProjectsSection />
       <EmailSection/>
      </section>
       <Footer/>
      <Toaster />
      <Facebook />
    </main>
  )
}
