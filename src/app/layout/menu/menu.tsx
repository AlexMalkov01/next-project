"use client"
import stiles from "./menu.module.css"
import cn from "classnames"
import { AppContext } from "@/app/context/app.context"
import { IFerstLevelMenuItem, IMenuItem, IPageItem } from "@/app/interface/menu.inteface"
import { useContext, useState } from "react"
import Link from "next/link"
import { usePathname} from "next/navigation"
import { ferstLevelMenu } from "@/app/helpers/menu.helpers"

export const Menu = () => {
    const { menu ,firstCategory , setMenu} = useContext(AppContext)
    const [stateMenu, useStateMenu] = useState<IMenuItem[]>(menu) 

    const isActivMenuFunc = (menuSulary:IMenuItem)=> {
       useStateMenu((prev)=> prev.map(m => {
        if (m._id === menuSulary._id && m.isActive === true) {
            return { ...m, isActive: false }; 
            }

        if (m._id === menuSulary._id) {
        return { ...m, isActive: true }; 
        }
        return { ...m, isActive: false };
    }) )
    }

    const buildFirstLevelMenu = () => {
        
        return (
            <>
            {
            ferstLevelMenu.map((m:IFerstLevelMenuItem)=> {
                const isActivMenu = m.id === firstCategory
                return (
                    <div key={m.id}>
                            <div className={cn(stiles.ferstMinuBlok ,{
                                [stiles.ferstActive]: isActivMenu
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div> 
                            {isActivMenu && <div className={cn(stiles.secondCategoryBlok)}>{buildSecondLevelMenu(stateMenu , m.route)}</div> }
                    </div>
                )
            })
            }
            </>
        )
    }

    const buildSecondLevelMenu = (menu:IMenuItem[], route:string) => {
       
        return (
            <>
            { menu.map(m => {
                return (
                    <div className={cn(stiles.secondCategoryWrap)} key={m._id.secondCategory}>
                        <div onClick={()=> isActivMenuFunc(m)}  className={cn(stiles.secondCategory,{
                            [stiles.secondCategoryActiv]: m.isActive
                        })}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(stiles.thertMenuLvlWrap,
                            {
                                [stiles.activThertMenu]: !m.isActive
                            }
                        )}>  
                            { buildThertLevelMenu(m.pages, route)}
                        </div>
                    </div>
                )
            })
                 }
            </>
        )
    }

    const buildThertLevelMenu = (pages:IPageItem[],route:string) => {
        const pathname = usePathname()

        return (
            <>
            {pages.map((p)=>{
                return (
                    <Link onClick={()=> setMenu(stateMenu)} key={p._id} href={`/${route}/${p.alias}`} className={cn(stiles.a,{
                        [stiles.activeA]: pathname === `/${route}/${p.alias}`
                    })}  >{p.category}</Link>
                )
            })}
            </>
        )
    }
    return buildFirstLevelMenu()
}