import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkSection from "@/components/WorkSection";
import Capabilities from "@/components/Capabilities";
import BlazeShift from "@/components/BlazeShift";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkSection />
      <Capabilities />
      <BlazeShift />
      <Contact />
      <Footer />
    </main>
  );
}
