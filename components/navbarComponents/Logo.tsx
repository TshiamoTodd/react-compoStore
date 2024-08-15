import React from 'react'
import { SiReact } from 'react-icons/si'

const Logo = () => {
  return (
    <div className='flex gap-2 items-center'>
        <div className='bg-sky-500 flex items-center justify-center p-[6px] rounded-md'>
            <div className='w-[26px] h-[26px] flex items-center justify-center'>
                <SiReact className='text-white text-[22px]'/>
            </div>
        </div>
        <div className='flex gap-1 text-[22px]'>
            <div className='text-sky-500'>React</div>
            <div className='text-slate-500'>CompoStore</div>
        </div>
    </div>
  )
}

export default Logo