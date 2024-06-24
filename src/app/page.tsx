import AnimateCards from "@/components/AnimateCards";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import ScrollSection from "@/components/ScrollSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
         <HeroSection/>
         <FeaturedSection/>
         <ScrollSection/>
         <AnimateCards/>
         <UpcomingWebinars/>
         <Instructors/>
         <Footer/>
    </main>
  );
}
