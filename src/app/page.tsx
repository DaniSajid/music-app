import AnimateCards from "@/components/AnimateCards";
import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
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
    </main>
  );
}
