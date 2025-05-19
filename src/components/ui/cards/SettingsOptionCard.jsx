import React from "react";

function SettingsOptionCard({ styleOut = "", styleInside = "", icon = "", mode = "", title = "", subtitle = "" }) {
  return (
    <div
      className={`${styleOut} w-full border-2 border-neutral-700 rounded-lg flex flex-row justify-evenly items-center p-4 gap-4 hover:bg-neutral-800 cursor-pointer`}
    >
      <div
        className={`${styleInside} bg-neutral-950 rounded-xl w-10 h-10 flex items-center justify-center border-2 border-neutral-800`}
      >
        <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-white font-[Inter] text-sm">{title}</p>
        <p className="text-neutral-300 font-[Inter] text-xs font-light ">{subtitle}</p>
      </div>
      <input className="cursor-pointer" type="radio" name="first" id="" />
    </div>
  );
}

export default SettingsOptionCard;
