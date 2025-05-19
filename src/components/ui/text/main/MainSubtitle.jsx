import React from 'react'

function MainSubtitle({ text = '', styles = '' }) {
  return (
    <p className={`text-sm font-normal leadin-[1.2] font-[Inter] text-left tracking-[-0.2px] ${styles}`}>{text}</p>
  )
}

export default MainSubtitle