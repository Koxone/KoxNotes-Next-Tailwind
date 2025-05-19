import React from 'react'

function CancelButton({ styles = '' }) {
  return (
    <button className={`w-11 h-[18px] text-white font-[Inter] font-normal ${styles} flex justify-center items-center cursor-pointer`}>
        Cancel
    </button>
  )
}

export default CancelButton