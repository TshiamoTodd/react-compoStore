'use client'
import { useAppContext } from '@/app/ContextAPI'
import { SearchRounded } from '@mui/icons-material'
import { useEffect, useRef } from 'react'
import InputSearchBar from './InputSearchBar'

const SearchBar = () => {
  const {
    showSearchBarObject: { showSearchBar, setShowSearchBar }
  } = useAppContext()

  const searchBarRef = useRef<HTMLDivElement>(null)

  const handleClickedSearchBar = () => {
    if(!showSearchBar){
      setShowSearchBar(true)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(searchBarRef.current && !searchBarRef.current.contains(event.target as Node)){
        setShowSearchBar(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSearchBar])
  return (
    <div 
      ref={searchBarRef}
      onClick={handleClickedSearchBar}
      className={`bg-slate-100 w-1/3 hover:bg-slate-200 transition-all p-[8px] flex gap-1 justify-center items-center rounded-md ${!showSearchBar && 'cursor-pointer'}`}
    >
        {showSearchBar ? (
          <InputSearchBar/>
        ): (
          <>
            <div className='flex gap-1 items-center'>
              <SearchRounded className='text-slate-500 text-sm' />
              <span className='text-slate-500 text-sm'>Seaech</span>
            </div>
          </>
        )}
    </div>
  )
}

export default SearchBar