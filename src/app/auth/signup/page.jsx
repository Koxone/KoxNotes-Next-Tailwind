"use client";

// Next
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

// Components
import MainButton from "@/components/ui/buttons/mainButton";
import MailInput from "@/components/ui/inputs/mailInput";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import SocialButton from "@/components/ui/buttons/SocialButton";

export default function SignUpScreen({ className = "" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      alert("Invalid email or password");
      console.log(error);
    }
  }

  return (
    <div
      className={`${className} bg-neutral-950 w-full h-full rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4`}
    >
      <MainLogo className="" />
      <TitleAuth text="Create Your Account" />
      <SubtitleAuth text="Sign up to start organizing your notes and boost your productivity." />

      <MailInput 
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      className="" 
      text="Email Address" />

      <PasswordInput 
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      text="Password" 
      className="w-full" 
      atLeast="At least 8 characters" />

      <MainButton
        text="Sign Up"
        className="bg-blue-500 hover:bg-blue-700 text-white font-[Inter] text-[16px] py-[12.5px] px-[134.5px] whitespace-nowrap rounded-[8px] cursor-pointer"
        styles="w-full"
        onClick={handleSignUp}
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