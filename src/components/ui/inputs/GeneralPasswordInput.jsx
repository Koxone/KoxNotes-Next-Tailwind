import React from "react";

function GeneralPasswordInput({ text = "", className = "", forgot = "", atLeast = "" }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-sm font-medium leadin-[1.2] font-[Inter] tracking-[-0.2px] text-left">{text}</p>
      </div>
      <div className="w-full relative">
        <img
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg cursor-pointer"
          src="src\assets\images\icon-hide-password-darkMode.svg"
          alt=""
        />
        <input
          className={`${className} border border-neutral-600 py-3 px-4 rounded-[8px] placeholder:text-neutral-500 bg-none text-white outline-none`}
          type="password"
          name="password"
          required
          minLength={8}
          pattern="^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$"
        />
      </div>
    </div>
  );
}

export default GeneralPasswordInput;
