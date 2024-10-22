"use client"

import { createContext, ReactNode, useEffect, useState } from "react";
import { IAppContext } from "./app.context.type";
import { MENU_CATEGORY } from "../enum/menu-catygory.enum";
import { IMenuItem } from "../interface/menu.inteface";
import axios from "axios";

export const AppContext = createContext<IAppContext>({
    // firstCategory: MENU_CATEGORY.CURSES,
    menu:[]
})


export const AppContextProvider= ({menu, firstCategory, children}:IAppContext & {children:ReactNode}) => {
    const [newMenuState , setNewMenuState] = useState(menu);
    const [newMenuCategory , setNewMenuCategory] = useState(firstCategory);

    const setMenu = (newMenu:IMenuItem[]) => {
        setNewMenuState(newMenu)
    }

    useEffect(()=>{ 
        
        if (String(newMenuCategory).length && newMenuCategory !== undefined) {
            const getMenu = async () => {
                const {menu} = await getMenuItem(newMenuCategory);
                setNewMenuState(menu)
            }
            getMenu()
        }
        
    },[newMenuCategory])
    
    const setCategory =  (newCategory:MENU_CATEGORY) => {       
        setNewMenuCategory(newCategory ?? "")
    }
    
    return (
        <AppContext.Provider value={{menu:newMenuState, firstCategory:newMenuCategory, setMenu , setCategory }}>
            {children}
        </AppContext.Provider>
    )
}

async function getMenuItem (newMenuCategory:MENU_CATEGORY) {
    
        const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_URL}top-page/find`, { firstCategory: newMenuCategory });
        return { menu };
  }