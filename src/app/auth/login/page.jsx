"use client";

// Next
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

// Components
import MainButton from "@/components/ui/buttons/mainButton";
import MailInput from "@/components/ui/inputs/mailInput";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import SocialButton from "@/components/ui/buttons/SocialButton";

export default function LoginScreen({ className = "" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      alert("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <div
      className={`${className} bg-neutral-950 w-full h-full rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4`}
    >
      <MainLogo className="" />
      <TitleAuth text="Welcome to KoxNotes" />
      <SubtitleAuth text="Please login to continue" />

      <MailInput text="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />

      <PasswordInput
        text="Password"
        forgot="Forgot"
        className="w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <MainButton text="Login" className="" styles="w-full" onClick={handleLogin} />

      <SocialButton>
        No account yet?{" "}
        <Link href="/auth/signup" className="text-blue-400">
          Sign Up
        </Link>
      </SocialButton>
    </div>
  );
}
