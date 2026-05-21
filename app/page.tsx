import AboutSection from "@/components/sections/core/AboutSection"
import BlogSection from "@/components/sections/core/BlogSection"
import TechnologySection from "@/components/sections/core/TechnologySection"
import VehiclesSection from "@/components/sections/core/VehiclesSection"
import WhyChooseSection from "./whyChooseUs/page"


export default function HomePage() {
  return (
    <main >
     <WhyChooseSection/>
      <VehiclesSection />
      <TechnologySection />
      <AboutSection />
      <BlogSection />

    </main>
  )
}