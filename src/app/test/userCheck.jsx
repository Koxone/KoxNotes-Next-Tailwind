import React from 'react'
import checkUser from '@/utils/checkUser'

function UserCheck() {
  return (
    <button
    className='bg-neutral-800 text-neutral-200 p-4 self-center rounded-md border w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-neutral-700'
    onClick={checkUser}>Test</button>
  )
}

export default UserCheck