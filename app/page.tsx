// import AboutSection from "@/components/sections/core/AboutSection"
// import BlogSection from "@/components/sections/core/BlogSection"
// import VehiclesSection from "@/components/sections/core/VehiclesSection"
// import StatsSection from "./stateSection/page"

import Technology from "@/components/Technology/page";

import WhyChooseSection from "./whyChooseUs/page"






export default function HomePage() {
  return (
    <main >
     <Technology/>
   {/* <StatsSection/>
      <VehiclesSection /> */}
      {/* <TechnologySection />
      <AboutSection />
      <BlogSection /> */}

      


    <HeroSection />
    <WhyChooseSection />
    <VehiclesSection />
    <StatsSection />
    <ReadyToRide />
    

      

</main>
  )
}
