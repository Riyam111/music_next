import Fetured_section from "@/components/Fetured_section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import Why_chooseus from "@/components/Why_chooseus";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased ">

<HeroSection/>
<Fetured_section/>
<Why_chooseus/>
<Testimonials/>
<Instructor/>
<Footer/>
   </main>
  );
}
