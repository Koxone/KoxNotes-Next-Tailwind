"use client";
import React from "react";
import Link from "next/link"; // ✅ Uso correcto en Next.js

import MainButton from "@/components/ui/buttons/mainButton";
import MailInput from "@/components/ui/inputs/mailInput";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import SocialButton from "@/components/ui/buttons/SocialButton";

function LoginScreen({ className = "" }) {
  return (
    <div className={`${className} bg-neutral-950 w-full h-full rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4`}>
      <MainLogo />
      <TitleAuth text="Welcome to KoxNotes" />
      <SubtitleAuth text="Please login to continue" />
      <MailInput text="Email Address" />
      <PasswordInput 
        text="Password"
        forgot="Forgot"
        className="w-full"
      />
      <MainButton
        text="Login"
        styles="w-full"
      />
      <SocialButton>
        No account yet?{" "}
        <Link href="/auth/signup" className="text-blue-400">
          Sign Up
        </Link>
      </SocialButton>
    </div>
  );
}

export default LoginScreen;
