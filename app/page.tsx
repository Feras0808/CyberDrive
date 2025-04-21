import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { MeetOurTeam } from "@/components/MeetOurTeam";
import { Hero } from "@/components/Hero";
import { VisionAndMission } from "@/components/VisionAndMission";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MeetOurTeam />
      <VisionAndMission />
      <Cta />
    </>
  );
}
