import CallToAction from "@/components/CTASection/CallToAction";
import Features from "@/components/Features";
import Navbar from "@/components/navbarComponents/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CallToAction />
      <Features/>
    </div>
  );
}
