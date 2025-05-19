import React from "react";

function DeleteButton({ icon = "", mode = "", styles = "" }) {
  return (
    <button className={`w-[18px] h-[18px] ${styles} cursor-pointer`}>
      <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default DeleteButton;
