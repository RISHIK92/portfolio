import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { TimelineDemo } from "@/components/Timeline";
import { GlowingEffectDemo } from "@/components/ServicesDemo";

export default function Page() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Header />
      <Skills />
      <About />
      <TimelineDemo />
      {/* <Services /> */}
      <GlowingEffectDemo />
      <Work />
      <Footer />
    </>
  );
}
