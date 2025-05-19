"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

import MainButton from "@/components/ui/buttons/mainButton";
import MailInput from "@/components/ui/inputs/mailInput";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import SocialButton from "@/components/ui/buttons/SocialButton";

function SignUpScreen({ className = "" }) {
  return (
    <div
      className={`${className} bg-neutral-950 w-full h-full rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4`}
    >
      <MainLogo className="" />
      <TitleAuth text="Create Your Account" />
      <SubtitleAuth text="Sign up to start organizing your notes and boost your productivity." />
      <MailInput className="" text="Email Address" />
      <PasswordInput 
        text="Password"
        className="w-full"
        atLeast="At least 8 characters"
      />
      <MainButton
        text="Sign Up"
        className="bg-blue-500 hover:bg-blue-700 text-white font-[Inter] text-[16px] py-[12.5px] px-[134.5px] whitespace-nowrap rounded-[8px] cursor-pointer"
        styles="w-full"
      />
      <SocialButton>
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-400">
          Login
        </Link>
      </SocialButton>
    </div>
  );
}

export default SignUpScreen;
