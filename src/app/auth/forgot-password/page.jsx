"use client";

import MainButton from "@/components/ui/buttons/mainButton";
import MailInput from "@/components/ui/inputs/mailInput";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import SocialButton from "@/components/ui/buttons/SocialButton";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import GoBackButton from "@/components/ui/buttons/GoBackButton";

import { useRouter } from "next/navigation";

function ForgotPasswordScreen({ className = "" }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <Header />
      <div
        className={`${className} bg-neutral-950 w-full h-screen rounded-2xl py-12 px-4 flex flex-col items-center gap-4 overflow-hidden`}
      >
        <GoBackButton icon="arrow-left" mode="darkMode" styles="self-start" text="Cancel"/>
        <MainLogo className="" />
        <TitleAuth text="Forgotten your password?" />
        <SubtitleAuth text="Enter your email below, and we’ll send you a link to reset it." />
        <MailInput className="" text="Email Address" />
        <MainButton text="Send Reset Link" styles="w-full" />
      </div>
      <NavBar />
    </div>
  );
}

export default ForgotPasswordScreen;
