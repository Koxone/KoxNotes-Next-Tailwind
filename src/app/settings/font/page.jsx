import React from "react";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import MainTitle from "@/components/ui/text/main/MainTitle";
import SettingsOptionCard from "@/components/ui/cards/SettingsOptionCard";
import MainButton from "@/components/ui/buttons/mainButton";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function SettingsOptionFontOpenScreen({}) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <Header />
      <div className="flex flex-col gap-4 h-screen py-6 px-4 rounded-2xl bg-neutral-950">
        <GoBackButton text="Settings" icon="arrow-left"  mode="darkMode"/>
        <MainTitle text="Font Theme" styles="text-neutral-50 font-bold text-2xl mt-4 mb-4" subtitle="Choose your font theme:" subtitleStyles="text-white" />
        <SettingsOptionCard
          icon="font-sans-serif"
          mode="darkMode"
          title="Sans-Serif"
          subtitle="Clean and modern, easy to read"
          styleInside=""
        />
        <SettingsOptionCard
          icon="font-serif"
          mode="darkMode"
          title="Serif"
          subtitle="Classic and elegant for a timeless feel."
          styleInside=""
        />
        <SettingsOptionCard
          icon="font-monospace"
          mode="darkMode"
          title="Monospace"
          subtitle="Code like, great for a technical vibe."
          styleInside=""
        />
        <MainButton text="Apply Changes" styles="w-[132px] self-end mt-[8px]" />
      </div>
      <NavBar />
    </div>
  );
}

export default SettingsOptionFontOpenScreen;
