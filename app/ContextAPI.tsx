'use client'
import { CategoryRounded, DarkMode, FavoriteRounded, HomeRounded, LightMode } from '@mui/icons-material'
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'

export interface MenuItem {
    id: string
    name: string
    icon: React.ReactNode
    isSelected: boolean
}

export interface IDarkModeMenu {
    id: string
    name: string
    icon: React.JSX.Element
    isSelected: boolean
}

interface AppContextType {
    menuItemsObject: {
        menuItems: MenuItem[],
        setMenuItems: Dispatch<SetStateAction<MenuItem[]>>
    },
    openSidebarObject: {
        openSideBar: boolean,
        setOpenSideBar: Dispatch<SetStateAction<boolean>>
    },
    openDarkModeObject: {
        openDarkModeMenu: boolean,
        setOpenDarkModeMenu: Dispatch<SetStateAction<boolean>>
    },
    darkModeMenuObject: {
        darkModeMenu: IDarkModeMenu[],
        setDarkModeMenu: Dispatch<SetStateAction<IDarkModeMenu[]>>
    },
    showSearchBarObject: {
        showSearchBar: boolean,
        setShowSearchBar: Dispatch<SetStateAction<boolean>>
    }
}

const defaultState: AppContextType = {
    menuItemsObject: {
        menuItems: [],
        setMenuItems: () => {}
    },
    openSidebarObject: {
        openSideBar: true,
        setOpenSideBar: () => {}
    },
    openDarkModeObject: {
        openDarkModeMenu: false,
        setOpenDarkModeMenu: () => {}
    },
    darkModeMenuObject: {
        darkModeMenu: [],
        setDarkModeMenu: () => {}
    },
    showSearchBarObject: {
        showSearchBar: false,
        setShowSearchBar: () => {}
    },
};

const AppContext = createContext<AppContextType>(defaultState);

const AppProvider = ({children}: {children: ReactNode}) => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        {id: "1", name: 'Home', icon: <HomeRounded/>, isSelected: true},
        {id: "2", name: 'Categories', icon: <CategoryRounded/>, isSelected: false},
        {id: "3", name: 'Favorites', icon: <FavoriteRounded/>, isSelected: false},
    ])

    const [openSideBar, setOpenSideBar] = useState(() => {
        if(typeof window !== 'undefined'){
            const storedValue = localStorage.getItem('openedSideBar')
            return storedValue !== null ? JSON.parse(storedValue) : true
        }
    })

    const [openDarkModeMenu, setOpenDarkModeMenu] = useState(false)

    const [darkModeMenu, setDarkModeMenu] = useState<IDarkModeMenu[]>(() => {
        let isDarkMode = false
        if (typeof window !== 'undefined') {
            const savedDarkMode = localStorage.getItem('isDarkMode')
            isDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false

            return [
                {
                    id: "1",
                    name: "Light",
                    icon: <LightMode fontSize='small' className='text-sky-500 cursor-pointer' />,
                    isSelected: !isDarkMode
                },
                {
                    id: "2",
                    name: "Dark",
                    icon: <DarkMode fontSize='small' className='text-sky-500' />,
                    isSelected: isDarkMode
                }
            ]
        }

        return [
            {
                id: "1",
                name: "Light",
                icon: <LightMode fontSize='small' className='text-sky-500 cursor-pointer' />,
                isSelected: !isDarkMode
            },
            {
                id: "2",
                name: "Dark",
                icon: <DarkMode fontSize='small' className='text-sky-500' />,
                isSelected: isDarkMode
            }
        ]
    })

    const [showSearchBar, setShowSearchBar] = useState(false)

    useEffect(() => {
        if(typeof window !== 'undefined'){
            localStorage.setItem('openedSideBar', JSON.stringify(openSideBar))
        }
    }, [openSideBar])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            localStorage.setItem('isDarkMode', JSON.stringify(darkModeMenu[1].isSelected))
        }
    }, [darkModeMenu])

    return (
        <AppContext.Provider
            value={{
                menuItemsObject: { menuItems, setMenuItems },
                openSidebarObject: { openSideBar, setOpenSideBar },
                openDarkModeObject: { openDarkModeMenu, setOpenDarkModeMenu},
                darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
                showSearchBarObject: { showSearchBar, setShowSearchBar }
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

export const useAppContext = () => useContext(AppContext)

