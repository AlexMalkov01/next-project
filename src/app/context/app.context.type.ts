import { MENU_CATEGORY } from "../enum/menu-catygory.enum";
import { IMenuItem } from "../interface/menu.inteface";

export interface IAppContext {
    firstCategory?:MENU_CATEGORY,
    menu:IMenuItem[],
    setMenu?:(newMenu:IMenuItem[]) => void,
    setCategory?:(newCategory:MENU_CATEGORY) => void
}