import React from "react";
import MainButton from "@/components/ui/buttons/mainButton";
import MailInput from "@/components/ui/inputs/mailInput";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import SocialButton from "@/components/ui/buttons/SocialButton";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function ResetPasswordScreen({ className = "" }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div
        className={`${className} bg-neutral-950 w-full h-screen rounded-2xl py-12 px-4 flex flex-col items-center gap-4`}
      >
        <MainLogo className="" />
        <TitleAuth text="Reset Your Password" />
        <SubtitleAuth text="Choose a new password to secure your account" />
        <PasswordInput text="New Password" className="w-full" atLeast="At Least 8 characters" />
        <PasswordInput text="Confirm New Password" className="w-full" />
        <MainButton text="Reset Password" className="" styles="w-full" />
      </div>
      <NavBar />
    </div>
  );
}

export default ResetPasswordScreen;
