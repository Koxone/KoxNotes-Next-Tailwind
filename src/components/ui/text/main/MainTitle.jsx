import React from 'react'
import MainSubtitle from './MainSubtitle'

function MainTitle({ text = "", tag = "", subtitle = "", styles = '', subtitleStyles = '' }) {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start">
      <h2 className={`text-2xl font-bold leading-[120%] ${styles} font-[Inter] text-left w-full`}>
        {text} <span className="text-white">{tag}</span>
      </h2>
      <MainSubtitle text={subtitle} styles={subtitleStyles} />
    </div>
  )
}

export default MainTitle