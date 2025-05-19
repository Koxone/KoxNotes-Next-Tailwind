"use client";
import React from "react";
import { useRouter } from "next/navigation";

function GoBackButton({ icon = "arrow", mode = "darkMode", styles = "", text = "Go Back" }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`${styles} flex items-center gap-2 text-sm text-white hover:underline`}
    >
      <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" className="w-4 h-4" />
      {text}
    </button>
  );
}

export default GoBackButton;
