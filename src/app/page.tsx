import FacilityPartnerships from "@/components/FacilityPartnerships";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TheDifference from "@/components/TheDifference";
import WhoWeServe from "@/components/WhoWeServe";

export default function Home() {
  return (
    <div className="min-h-screen text-dark-blue-gray bg-white">
      <Header />
      <main>
        <Hero />
        <WhoWeServe />
        <Services />
        <TheDifference />
        <FacilityPartnerships />
        <HowItWorks />
        <ServiceArea />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
