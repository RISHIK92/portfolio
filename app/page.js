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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rishik",
    url: "https://rishik.codes",
    image: "/assets/profile-img.jpeg",
    sameAs: [
      "https://github.com/rishik92",
      "https://www.linkedin.com/in/rishik-chowdary-b8b430299/",
      "https://x.com/prebuiltui",
    ],
    jobTitle: "Software Engineer",
    description:
      "B.Tech sophomore at NST × Rishihood University. Full-stack developer experienced with Next.js, Firebase, AWS.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
