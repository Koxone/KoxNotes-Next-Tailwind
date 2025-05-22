import React from "react";

function NoteTextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full h-screen resize-none break-words text-white outline-none overflow-x-hidden "
    />
  );
}

export default NoteTextArea;
