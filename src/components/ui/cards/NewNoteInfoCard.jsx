import React from "react";

function NewNoteInfoCard({ mode = "" }) {
  return (
    <div className="w-full flex flex-col items-start border-b border-neutral-700 pb-3.5 gap-3.5 mb-3">
      <div className="top flex flex-row gap-20 justify-evenly items-center">
        <div className="flex flex-row gap-1.5 justify-center items-center">
          <img src={`/assets/images/icon-tag-${mode}.svg`} alt="icon" />
          <p className="text-sm text-neutral-300 font-normal leading-[130%]">Tags</p>
        </div>
        <div className="right">
          <input
            className="text-white placeholder:text-neutral-400 
            placeholder:whitespace-pre-wrap placeholder:text-sm placeholder:leading-[130%] placeholder:font-normal outline-none h-14"
            type="text"
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
          />
        </div>
      </div>
      <div className="bottom gap-9.5 flex flex-row justify-evenly items-center mt-[-10px]">
        <div className="flex flex-row gap-1.5 justify-center items-center">
          <img src={`/assets/images/icon-clock-${mode}.svg`} alt="icon" />
          <p className="text-sm text-neutral-300 font-normal leading-[130%]">Last Edited</p>
        </div>
        <div className="right">
          <p className="text-sm text-neutral-300 font-normal leading-[130%]">Not yet saved</p>
        </div>
      </div>
    </div>
  );
}

export default NewNoteInfoCard;
