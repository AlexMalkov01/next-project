import { MENU_CATEGORY } from "../enum/menu-catygory.enum"

export interface IMenuItem {
    _id: {
        secondCategory:string
    }
    pages: IPageItem[]
}

export interface IPageItem {
    alias:string
    title:string
    _id:string
    category:string
}

export interface IFerstLevelMenuItem {
    route:string,
    name:string,
    icon: JSX.Element,
    id: MENU_CATEGORY
}