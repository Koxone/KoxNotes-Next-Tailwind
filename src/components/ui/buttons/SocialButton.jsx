"use client";

// Next
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Firebase
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function SocialButton({ children = "" }) {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    try {
      const provider  = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      alert("Google login failed: " + error.message);
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col w-full border-t border-b border-neutral-800 gap-4 pt-6 pb-4">
      <p className="text-neutral-300 text-sm leading-[130%] tracking-[-0.2px] font-normal font-[Inter] text-center">
        Or log in with:
      </p>
      <button 
      onClick={handleGoogleLogin}
      className="flex items-center justify-center gap-2 hover:bg-neutral-900 bg-none cursor-pointer rounded-[8px] w-full h-[43px] border border-neutral-600 text-white text-sm font-semibold leading-[1.2] font-[Inter] text-center tracking-[-0.3px]">
        <img src="/assets/images/icon-google-darkMode.svg" alt="google icon" className="w-5 h-5" />
        Google
      </button>
      <p className="text-neutral-300 text-sm leading-[130%] tracking-[-0.2px] font-normal font-[Inter] text-center">
        {children}
      </p>
    </div>
  );
}