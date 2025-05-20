import React from "react";

function MailInput({ className = "", text, value, onChange, placeholder = "email@example.com" }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <p className="text-white text-sm font-medium leadin-[1.2] font-[Inter] text-center tracking-[-0.2px] text-left">
        {text}
      </p>
      <input
        className={`${className} border border-neutral-600 py-3 px-4 rounded-[8px] placeholder:text-neutral-500 bg-none text-white w-full`}
        type="email"
        name="email"
        autoComplete="email"
        title="Enter a valid email address"
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default MailInput;