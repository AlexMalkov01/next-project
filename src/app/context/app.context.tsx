"use client"

import { createContext, ReactNode, useState } from "react";
import { IAppContext } from "./app.context.type";
import { MENU_CATEGORY } from "../enum/menu-catygory.enum";
import { IMenuItem } from "../interface/menu.inteface";

export const AppContext = createContext<IAppContext>({
    firstCategory: MENU_CATEGORY.CURSES,
    menu:[]
})



export const AppContextProvider= ({menu, firstCategory, children}:IAppContext & {children:ReactNode}) => {
    const [newMenuState , setNewMenuState] = useState(menu)

    const setMenu = (newMenu:IMenuItem[]) => {
        setNewMenuState(newMenu)
    }

    return (
        <AppContext.Provider value={{menu:newMenuState, firstCategory, setMenu}}>
            {children}
        </AppContext.Provider>
    )
}