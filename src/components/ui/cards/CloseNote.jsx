"use client";
import React from "react";
import Tag from "./Tag";
import { useRouter } from "next/navigation";

function CloseNote({ title = "", date = "", tags = [] }) {
  const safeTags = Array.isArray(tags) ? tags : tags.split(",").map(t => t.trim());
  const router = useRouter();

  const goTo = () => {
    router.push("/open-note");
  };

  return (
    <div onClick={goTo} className="w-full flex flex-col gap-3.5 p-2 border-b border-neutral-800 cursor-pointer">
      <p className="text-[16px] font-[Inter] font-semibold leading-[120%] text-white text-left tracking-[-0.3px]">
        {title}
      </p>
      <div className="flex flex-row gap-2">
        {safeTags.map(tag => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <p className="text-xs font-[Inter] font-normal leading-[120%] text-neutral-300 text-left tracking-[-0.3px]">
        {date}
      </p>
    </div>
  );
}

export default CloseNote;
