"use client";
import { useRouter } from "next/navigation";
import React from "react";

function SettingsCard({ text = "", styles = "", icon = "", mode = "", param = "" }) {
  const router = useRouter();

  const handleClick = () => {
    if (param === "theme") {
      router.push("/settings/theme");
    } else if (param === "font") {
      router.push("/settings/font");
    } else if (param === "change") {
      router.push("/settings/change-password");
    } else if (param === "logout") {
      // Aquí puedes agregar lógica para cerrar sesión
      router.push("/auth/login");
    } else {
      router.push("/settings");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles} font-normal text-sm font-[Inter] flex items-center gap-2 w-full cursor-pointer hover:bg-neutral-700 hover:rounded-sm p-2`}
    >
      <img
        className="w-5 h-5"
        src={`/assets/images/icon-${icon}-${mode}.svg`}
        alt="icon"
      />
      {text}
    </button>
  );
}

export default SettingsCard;
