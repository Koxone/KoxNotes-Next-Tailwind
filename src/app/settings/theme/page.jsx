import React from "react";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import MainTitle from "@/components/ui/text/main/MainTitle";
import SettingsOptionCard from "@/components/ui/cards/SettingsOptionCard";
import MainButton from "@/components/ui/buttons/mainButton";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function SettingsOptionThemeOpenScreen({  }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <Header />
      <div className="flex flex-col gap-4 h-screen py-6 px-4 rounded-2xl bg-neutral-950">
        <GoBackButton text="Settings" icon="arrow-left" mode="darkMode" />
        <MainTitle text="Color Theme" styles="text-neutral-50 font-bold text-2xl mt-4 mb-4" subtitle="Choose your color theme:" subtitleStyles="text-white" />
        <SettingsOptionCard
          icon="sun"
          mode="darkMode"
          title="Light Mode"
          subtitle="Pick a clean and classic light theme"
          styleInside=""
        />
        <SettingsOptionCard
          icon="moon"
          mode="darkMode"
          title="Dark Mode"
          subtitle="Select a sleek and modern dark theme"
          styleInside=""
        />
        <SettingsOptionCard
          icon="system-theme"
          mode="darkMode"
          title="System"
          subtitle="Select the same theme as your system"
          styleInside=""
        />
        <MainButton text="Apply Changes" styles="w-[132px] self-end mt-[8px]" />
      </div>
      <NavBar />
    </div>
  );
}

export default SettingsOptionThemeOpenScreen;
