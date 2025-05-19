import React from "react";

function InputMessage({ atLeast = "", styles = "" }) {
  return (
    <div className={`flex flex-row items-center gap-2 ${atLeast ? "visible" : "invisible"} mt-[-20px]`}>
      <img className=" w-4 h-4" src="src\assets\images\icon-info-darkMode.svg" alt="" />
      <p className={`text-neutral-400 text-[12px] font-medium leadin-[1.4] font-[Inter] tracking-[-0.2px] text-left ${styles}`}>
        {atLeast}
      </p>
    </div>
  );
}

export default InputMessage;
