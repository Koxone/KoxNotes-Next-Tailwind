import React from 'react'

function Tag({ text = '' }) {
  return (
    <div className='w-[34px] h-[18px] bg-neutral-600 rounded-sm flex flex-row justify-center items-center w-[44px] h-[18px]'>
        <p className='text-xs text-white font-normal font-[Inter]'>{text}</p>
    </div>
  )
}

export default Tag