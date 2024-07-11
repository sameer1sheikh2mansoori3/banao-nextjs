'use client'

import Boxadd from "@/components/Boxadd";
import Boxsection from "@/components/Boxsection";
import Boxtestimonial from "@/components/Boxtestimonial";
import Fhero from "@/components/Fhero";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="overflow-hidden text-white">
      <div>
        {" "}
        <Hero />
      </div>
      <div>
        <Boxsection />
      </div>
      <div>
        <Boxadd />
      </div>
      <div>
        <Boxtestimonial />
      </div>
      <div>
        <Fhero />
      </div>
      <div>
        <FooterLinks />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
