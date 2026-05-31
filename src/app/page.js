import ComingThisMonth from "@/components/ComingThisMonth";
import Hero from "@/components/Hero";
import NowStreaming from "@/components/NowStreaming";
import TrailerSection from "@/components/TrailerSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <NowStreaming />
      <TrailerSection />
      <ComingThisMonth/>
   </div>
  );
}
