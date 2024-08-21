'use client'
import { useAppContext } from '@/app/ContextAPI'
import { CloseRounded } from '@mui/icons-material'
import React, { useEffect, useRef } from 'react'

const InputSearchBar = () => {
    const {
        showSearchBarObject: {setShowSearchBar}
    } = useAppContext()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }, [])

    const handleCloseClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowSearchBar(false)
    }

    return (
        <div className='px-2 flex justify-between items-center w-full'>
            <input 
                type="text"
                ref={inputRef}
                placeholder='Search a components...'
                className='w-full bg-transparent outline-none text-[13px] placeholder:text-slate-400' 
            />
            <CloseRounded
                fontSize='small'
                className='text-slate-500 text-[10px] cursor-pointer'
                onClick={handleCloseClick}
            />
        </div>
    )
}

export default InputSearchBar