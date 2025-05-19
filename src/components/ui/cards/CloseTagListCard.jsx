import React from "react";

function CloseTagListCard({ mode = "", styles = "", text = "" }) {
  return (
    <div className="w-full border-b border-neutral-800 flex gap-2 py-2.5 cursor-pointer hover:bg-neutral-800 hover:rounded-[8px] hover:scale-105 hover:pl-6 transition duration-300 ease-in-out">
      <img src={`/assets/images/icon-tag-${mode}.svg`} alt="icon" />
      <p className="text-white">{text}</p>
    </div>
  );
}

export default CloseTagListCard;
