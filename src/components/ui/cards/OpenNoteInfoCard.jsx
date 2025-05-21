import React from "react";

function OpenNoteInfoCard({ tags1 = "", tag2 = "", mode = "", styles = "", text1 = "", date = "", text2 = "" }) {
  return (
    <div className="w-full flex flex-col ml-2 items-start border-b border-neutral-700 pb-3.5 gap-3">
      <div className="top flex flex-row gap-20 justify-evenly items-center">
        <div className="flex flex-row gap-1.5 justify-center items-center">
          <img src={`/assets/images/icon-tag-${mode}.svg`} alt="icon" />
          <p className="text-sm text-neutral-300 font-normal leading-[130%]">{text1}</p>
        </div>
        <div className="right">
          <p className="text-sm text-neutral-300 font-normal leading-[130%]">{`${tags1}, ${tag2}`}</p>
        </div>
      </div>
      <div className="bottom gap-9 flex flex-row justify-evenly items-center">
        <div className="flex flex-row gap-1.5 justify-center items-center">
          <img src={`/assets/images/icon-clock-${mode}.svg`} alt="icon" />
          <p className="text-sm text-neutral-300 font-normal leading-[130%]">{text2}</p>
        </div>
        <div className="right">
          <p className="text-sm text-neutral-300 font-normal leading-[130%]">{`${date}`}</p>
        </div>
      </div>
    </div>
  );
}

export default OpenNoteInfoCard;
