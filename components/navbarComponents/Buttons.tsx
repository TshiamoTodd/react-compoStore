'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Buttons = () => {
    const {userId} = useAuth()

    return (
        <div className='flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8'>
            { userId ? (
                <>
                    <Link href={'/dashboard'}>
                        <button className='max-sm:w-full text-sm border border-sky-500 hover:bg-sky-600 text-white bg-sky-500 p-[8px] px-6 rounded-md'>
                            Dashboard
                        </button>
                    </Link>
                    
                </>
            ) : (
                <>
                    <Link href={'/sign-in'}>
                        <button className='max-sm:w-full text-sm border border-sky-500 hover:bg-sky-600 text-white bg-sky-500 p-[8px] px-6 rounded-md'>
                            Sign In
                        </button>
                    </Link>

                    <Link href={'/sign-up'}>
                        <button className='max-sm:w-full text-sm border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white p-[8px] px-6 rounded-md'>
                            Sign Up
                        </button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Buttons