import AboutSection from "@/components/sections/core/AboutSection"
import BlogSection from "@/components/sections/core/BlogSection"
import TechnologySection from "@/components/sections/core/TechnologySection"
import VehiclesSection from "@/components/sections/core/VehiclesSection"
import Contact from "./Contact/page"

export default function HomePage() {
  return (
    <main >
      
    
      <VehiclesSection />
      <TechnologySection />
      <AboutSection />
      <BlogSection />

      <Contact />



    </main>
  )
}