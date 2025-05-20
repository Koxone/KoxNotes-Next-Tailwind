import React from "react";

function MainButton({ text = "", styles = "", onClick }) {
  return (
    <div className={`flex justify-center items-center ${styles}`}>
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-[Inter] text-[16px] py-[12.5px] rounded-[8px] cursor-pointer whitespace-nowrap w-full"
      >
        {text}
      </button>
    </div>
  );
}

export default MainButton;
