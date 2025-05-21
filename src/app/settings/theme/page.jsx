"use client";
import React, { useState } from "react";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import MainTitle from "@/components/ui/text/main/MainTitle";
import SettingsOptionCard from "@/components/ui/cards/SettingsOptionCard";
import MainButton from "@/components/ui/buttons/mainButton";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import { useTheme } from "@/context/ThemeContext";

function SettingsOptionThemeOpenScreen({}) {
  const { theme, toggleTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-neutral-800">
      <Header />
      <div className="flex flex-col gap-4 w-full h-screen py-6 px-4 rounded-2xl bg-neutral-950">
        <GoBackButton text="Settings" icon="arrow-left" mode="darkMode" />
        <MainTitle
          text="Color Theme"
          styles="text-neutral-50 font-bold text-2xl mt-4 mb-4"
          subtitle="Choose your color theme:"
          subtitleStyles="text-white"
        />
        <SettingsOptionCard
          icon="sun"
          mode="darkMode"
          title="Light Mode"
          onClick={() => setSelectedTheme("light")}
          subtitle="Pick a clean and classic light theme"
          styleInside=""
        />
        <SettingsOptionCard
          icon="moon"
          mode="darkMode"
          title="Dark Mode"
          onClick={() => setSelectedTheme("dark")}
          subtitle="Select a sleek and modern dark theme"
          styleInside=""
        />
        <SettingsOptionCard
          icon="system-theme"
          mode="darkMode"
          title="System"
          onClick={() => {
            const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setSelectedTheme(isSystemDark ? "dark" : "light");
          }}
          subtitle="Select the same theme as your system"
          styleInside=""
        />
        <MainButton onClick={() => toggleTheme(selectedTheme)} text="Apply Changes" styles="w-[132px] self-end mt-[8px]" />
      </div>
      <NavBar />
    </div>
  );
}

export default SettingsOptionThemeOpenScreen;
