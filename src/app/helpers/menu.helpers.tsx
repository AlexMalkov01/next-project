import { MENU_CATEGORY } from "../enum/menu-catygory.enum";
import { IFerstLevelMenuItem } from "../interface/menu.inteface";
import BookIconSvg from "../layout/menu/book-icon.svg"
import CoursesIconSvg from "../layout/menu/courses-icon.svg"
import ProductIconSvg from "../layout/menu/product-icon.svg"
import ServisIconSvg from "../layout/menu/servis-icon.svg"

export const ferstLevelMenu:IFerstLevelMenuItem[] = [
    {
        route:"course",
        name:"Курсы",
        icon: <CoursesIconSvg/>,
        id: MENU_CATEGORY.CURSES,
        isActive: false
    },
    {
        route:"sevices",
        name:"Сервисы",
        icon: <ServisIconSvg/>,
        id: MENU_CATEGORY.SERVICES,
        isActive: false
    },
    {
        route:"books",
        name:"Книги",
        icon: <BookIconSvg/>,
        id: MENU_CATEGORY.BOOKS,
        isActive: false
    },
    {
        route:"products",
        name:"Товары",
        icon: <ProductIconSvg/>,
        id: MENU_CATEGORY.PRODUCTS,
        isActive: false
    }
]