import React from 'react'
import MainLogo from '../logo/MainLogo'

function Header() {
  return (
    <header className='flex flex-row bg-neutral-800 w-full py-3 px-4 sticky top-0'>
        <MainLogo/>
    </header>
  )
}

export default Header