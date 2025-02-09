import ChooseUs from "@/components/ui/Choose-us";
import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs />
    </>
  );
}
