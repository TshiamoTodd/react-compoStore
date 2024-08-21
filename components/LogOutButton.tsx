import { useAppContext } from '@/app/ContextAPI'
import { LogoutRounded } from '@mui/icons-material'
import React from 'react'

const LogOutButton = () => {
    const { openSidebarObject: {openSideBar} } = useAppContext()
    return (
        <div className={`p-[7px] hover:text-sky-500 select-none cursor-pointer mt-14 ${openSideBar ? "ml-3" : "ml-0"} text-[15px] rounded-lg flex items-center gap-2 w-[80%] text-slate-400`}>
            <LogoutRounded/>
            {openSideBar && <span className='mt-0.5'>Log Out</span>}
        </div>
    )
}

export default LogOutButton