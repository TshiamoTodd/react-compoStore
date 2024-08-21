'use client'
import { IDarkModeMenu, useAppContext } from '@/app/ContextAPI'
import { useEffect, useRef } from 'react'

const DarkModeMenu = () => {
    const {
        openDarkModeObject: { openDarkModeMenu, setOpenDarkModeMenu },
        darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
    } = useAppContext()

    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenDarkModeMenu(false)
            }
        }
        if(openDarkModeMenu){
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [openDarkModeMenu, setOpenDarkModeMenu])

    const changeSelection = (menuItem: IDarkModeMenu) => {
        setDarkModeMenu((prevMenuItems) => 
            prevMenuItems.map((prevMenuItem) => 
                prevMenuItem.id === menuItem.id
                    ? { ...prevMenuItem, isSelected: true }
                    : { ...prevMenuItem, isSelected: false }
            )
        )
    }
    return (
        <div ref={menuRef} className={`${openDarkModeMenu ? 'absolute' : 'hidden'} p-3 border border-slate-50 select-none pr-10 bg-white rounded-md absolute right-[3px] top-8 flex flex-col py-4 gap-[18px]`}>
            {darkModeMenu.map((item) => (
                <div
                    key={item.id}
                    onClick={() => changeSelection(item)}
                    className={`${item.isSelected ? 'text-sky-500' : 'text-slate-400'} flex items-center gap-2 cursor-pointer hover:text-sky-500`}
                >   
                    {item.icon}
                    <span className='text-[12px] font-light'>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default DarkModeMenu