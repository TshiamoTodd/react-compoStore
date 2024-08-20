'use client'
import { Category, Favorite, Home } from '@mui/icons-material'
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'

export interface MenuItem {
    id: string
    name: string
    icon: React.ReactNode
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
    }
};

const AppContext = createContext<AppContextType>(defaultState);

const AppProvider = ({children}: {children: ReactNode}) => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        {id: "1", name: 'Home', icon: <Home/>, isSelected: true},
        {id: "2", name: 'Categories', icon: <Category/>, isSelected: false},
        {id: "3", name: 'Favorites', icon: <Favorite/>, isSelected: false},
    ])

    const [openSideBar, setOpenSideBar] = useState(() => {
        const storedValue = localStorage.getItem('openedSideBar')
        return storedValue !== null ? JSON.parse(storedValue) : true
    })

    useEffect(() => {
        localStorage.setItem('openedSideBar', JSON.stringify(openSideBar))
    }, [openSideBar])

    return (
        <AppContext.Provider
            value={{
                menuItemsObject: { menuItems, setMenuItems },
                openSidebarObject: { openSideBar, setOpenSideBar }
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

export const useAppContext = () => useContext(AppContext)

