'use client'
import  {MenuItem, useAppContext}  from '@/app/ContextAPI'
import React from 'react'

const Links = () => {
    const {
        menuItemsObject: {menuItems, setMenuItems},
        openSidebarObject: {openSideBar}
    } = useAppContext()

    const  handleLinkClick = (item: MenuItem) => {
        setMenuItems((prevMenuItems) => 
            prevMenuItems.map((prevMenuItem) => (
                prevMenuItem.id === item.id 
                ? {...prevMenuItem, isSelected: true} 
                : {...prevMenuItem, isSelected: false}
        )))
    }

    return (
        <div className={`mt-44 ${openSideBar ? 'ml-3': 'ml-0'} flex flex-col gap-2 text-[15px]`}>
            {menuItems.map((item, index) => (
                <div 
                    key={index}
                    onClick={() => handleLinkClick(item)}
                    className={`${item.isSelected ? 'bg-sky-500 text-white' : 'text-slate-500 hover:text-sky-500'}
                    p-[7px] select-none cursor-pointer rounded-lg flex items-center gap-2 w-[80%]`}
                >
                    {item.icon}
                    {openSideBar && <span className='mt-0.5'>{item.name}</span>}
                </div>
            ))}
        </div>
    )
}

export default Links