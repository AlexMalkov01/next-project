"use client"
import stiles from "./menu.module.css"
import cn from "classnames"
import { AppContext } from "@/app/context/app.context"
import { MENU_CATEGORY } from "@/app/enum/menu-catygory.enum"
import { IFerstLevelMenuItem, IMenuItem, IPageItem } from "@/app/interface/menu.inteface"
import { useContext } from "react"
import BookIconSvg from "./book-icon.svg"
import CoursesIconSvg from "./courses-icon.svg"
import ProductIconSvg from "./product-icon.svg"
import ServisIconSvg from "./servis-icon.svg"

const ferstLevelMenu:IFerstLevelMenuItem[] = [
    {
        route:"courses",
        name:"Курсы",
        icon: <CoursesIconSvg/>,
        id: MENU_CATEGORY.CURSES
    },
    {
        route:"sevices",
        name:"Сервисы",
        icon: <ServisIconSvg/>,
        id: MENU_CATEGORY.SERVICES
    },
    {
        route:"books",
        name:"Книги",
        icon: <BookIconSvg/>,
        id: MENU_CATEGORY.BOOKS
    },
    {
        route:"products",
        name:"Товары",
        icon: <ProductIconSvg/>,
        id: MENU_CATEGORY.PRODUCTS
    }
]


export const Menu = () => {
    const { menu ,firstCategory} = useContext(AppContext)
    
    const buildFirstLevelMenu = () => {
        
        return (
            <>
            {
            ferstLevelMenu.map((m:IFerstLevelMenuItem)=> {
                const isActivMenu = m.id === firstCategory
                return (
                    <div key={m.id}>
                            <div className={cn(stiles.ferstMinuBlok ,{
                                [stiles.ferstActive]:isActivMenu
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div> 
                            {isActivMenu && <div className={cn(stiles.secondCategoryBlok)}> {buildSecondLevelMenu(menu)} </div> }
                    </div>
                )
            })
            }
            </>
        )
    }

    const buildSecondLevelMenu = (menu:IMenuItem[]) => {
        return (
            <>
            { menu.map(m => {
                return (
                    <div className={cn(stiles.secondCategoryWrap)} key={m._id.secondCategory}>
                        <div className={cn(stiles.secondCategory)}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(stiles.thertMenuLvlWrap)}>
                            { buildThertLevelMenu(m.pages)}
                        </div>
                    </div>
                )
            })
                 }
            </>
        )
    }

    const buildThertLevelMenu = (pages:IPageItem[]) => {
        return (
            <>
            {pages.map((p)=>{
                return (
                    <a key={p.category} href={`/course/${p.alias}`} className={cn(stiles.a)}  >{p.category}</a>
                )
            })}
            </>
        )
    }

    return buildFirstLevelMenu()
}