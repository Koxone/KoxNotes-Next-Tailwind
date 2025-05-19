import React from "react";

function SearchInput({ styles = "" }) {
  return (
    <div className="w-full h-auto flex overflow-hidden">
      <input
        className={`${styles} w-full h-10 text-white border border-neutral-500 outline-none rounded-sm p-1.5 mb-6`}
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default SearchInput;
