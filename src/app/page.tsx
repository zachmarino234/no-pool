
import Image from "next/image";
import WaveSection from "@/components/WaveSection";
import npp_team from "../../public/npp_team.png"
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
      <div className="flex flex-col h-screen w-screen">
        <div className="p-8 md:p-12"></div>
        <div className="grow relative">
          <Hero />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row py-12 px-5 sm:px-12 md:px-32 3xl:px-64 items-center self-stretch gap-8">
        <div className="flex flex-col justify-center items-center gap-8 sm:mt-20">
          <h1 className="w-full text-3xl">HERE TO MAKE A SPLASH.</h1>
          <p className="self-stretch min-w-2xs">No Pool Productions is here to make a splash in the theatrical landscape, committed to developing and fostering unique and thrilling work for a new generation of artists and audiences alike. <br /><br />

            With a breadth of experience in theatrical producing and digital media, our team is enthusiastic to bring the most exciting projects to the stage, led with passion and creativity at the forefront. We are diving headfirst into uncharted theatrical frontiers - no pool required.
          </p>
        </div>
        <Image
          src={npp_team}
          alt="No Pool Team"
          className="rounded-2xl border-5 border-brand-primary shadow-image sm:w-1/2"
        />
      </div>
      <h1 className="w-full mb-[-60px] mt-2.5 flex flex-col pt-8 3xl:px-64 z-40">
        SEE WHAT WE&apos;VE BEEN UP TO...
      </h1>
      <WaveSection />
      <ProjectGrid />
    </main>
  );
}