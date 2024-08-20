'use client'
import { useAppContext } from '@/app/ContextAPI'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'

const RoundedArrowIcon = () => {
  const { openSidebarObject: {openSideBar, setOpenSideBar} } = useAppContext()
  const handleSidebarToggle = () => {
    setOpenSideBar(!openSideBar)
  }
  return (
    <div 
      onClick={handleSidebarToggle}
      className='w-10 h-10 z-40 rounded-full absolute right-[-15px] top-[95px] flex items-center justify-center'
    >
        <div className='bg-sky-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer'>
            {openSideBar ? (
                <KeyboardArrowLeft className='text-white text-[20px]' fontSize='small' />
            ): (
                <KeyboardArrowRight className='text-white text-[20px]' fontSize='small' />
            )}
        </div>
    </div>
  )
}

export default RoundedArrowIcon