'use client'
import Links from '@/components/Links'
import LogOutButton from '@/components/LogOutButton'
import Logo from '@/components/navbarComponents/Logo'
import RoundedArrowIcon from '@/components/RoundedArrowIcon'
import React from 'react'
import { useAppContext } from '../ContextAPI'

const Sidebar = () => {
    const { openSidebarObject: {openSideBar} } = useAppContext()
    return (
            <div className={`${openSideBar ? "w-[310px] p-6": "w-[100px] p-4"} h-screen pt-12 relative transition-all duration-300`}>
                <RoundedArrowIcon />
                <Logo/>
                <Links/>
                <LogOutButton/>
            </div>
    )
}

export default Sidebar