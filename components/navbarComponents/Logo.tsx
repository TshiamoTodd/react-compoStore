import { useAppContext } from '@/app/ContextAPI'
import React from 'react'
import { SiReact } from 'react-icons/si'

const Logo = () => {
  const { openSidebarObject: {openSideBar} } = useAppContext()
  return (
    <div className='flex gap-2 items-center'>
        <div className='bg-sky-500 flex items-center justify-center p-[6px] rounded-md w-12 h-12'>
          <SiReact className='text-white text-[22px]'/>
        </div>
        {openSideBar && (
          <div className='flex gap-1 text-[22px]'>
              <div className='text-sky-500'>React</div>
              <div className='text-slate-500'>C/S</div>
          </div>
        )}
    </div>
  )
}

export default Logo