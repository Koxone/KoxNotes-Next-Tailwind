import React from "react";

function ArchiveButton({ icon = "", mode = "", styles = "" }) {
  return (
    <button className={`w-[18px] h-[18px] cursor-pointer ${styles}`}>
      <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default ArchiveButton;
