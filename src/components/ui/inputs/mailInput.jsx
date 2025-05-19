import React from "react";

function MailInput({ className = "", text }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <p className="text-white text-sm font-medium leadin-[1.2] font-[Inter] text-center tracking-[-0.2px] text-left">{text}</p>
      <input
        className={`${className} border border-neutral-600 py-3 px-4 rounded-[8px] placeholder:text-neutral-500 bg-none text-white w-full`}
        type="email"
        name="email"
        autoComplete="email"
        title="Enter a valid email address"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
        placeholder="email@example.com"
      />
    </div>
  );
}

export default MailInput;
