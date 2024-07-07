 
import HeroSection from "./HeroSection";
import ClientSection from "./ClientSection";
import CommunitySection from "./CommunitySection";
import MiddleSection from "./MiddleSection";
import Statistics from "./Statistics";
import TuttoiralSection from "./TuttoiralSection";
import TestimonialSection from "./TestimonialSection";
import MarketingSection from "./MarketingSection";
import GetUpdate from "./GetUpdate";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
    <div className="w-full overflow-hidden flex flex-col   text-brandTextcolor">
      
      
      <HeroSection/>
      <ClientSection/>
      <CommunitySection/>
      <MiddleSection/>
      <Statistics/>
      <TuttoiralSection/>
      <TestimonialSection/>
      <MarketingSection/>
      <GetUpdate/>
      <Footer/>
    </div>
    </>
  );
}
