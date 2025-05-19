import React from 'react'

function SaveNoteButton({ styles = '' }) {
  return (
    <button className={`w-11 h-[18px] text-blue-500 font-[Inter] ${styles} font-normal flex justify-center items-center cursor-pointer whitespace-nowrap`}>
        Save Note
    </button>
  )
}

export default SaveNoteButton