'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function CancelButton({ styles = '' }) {
  const router = useRouter()
  return (
    <button 
    onClick={() => router.back()}
    className={`w-11 h-[18px] text-white font-[Inter] text-[14px] font-normal ${styles} flex justify-center items-center cursor-pointer hover:text-red-600`}>
        Cancel
    </button>
  )
}

export default CancelButton