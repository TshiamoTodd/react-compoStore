'use client'
import { LightMode } from '@mui/icons-material'
import React from 'react'
import DarkModeMenu from './DarkModeMenu'
import { useAppContext } from '@/app/ContextAPI'

const DarkMode = () => {
  const {
    openDarkModeObject: { openDarkModeMenu, setOpenDarkModeMenu },
    darkModeMenuObject: { darkModeMenu, setDarkModeMenu }
  } = useAppContext()

  const handleClicked = () => {
    setOpenDarkModeMenu(!openDarkModeMenu)
  }

  return (
    <div onClick={handleClicked} className='relative'>
        <div className='text-sky-500'>
          {darkModeMenu[0].isSelected && darkModeMenu[0].icon}
          {darkModeMenu[1].isSelected && darkModeMenu[1].icon}
        </div>
        <DarkModeMenu/>
    </div>
  )
}

export default DarkMode