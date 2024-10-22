import style from "./sidebar.module.css"
import { Menu } from "../menu/menu"
import { ISidebarProps } from "./sidebar.type"
import LogoIcon from "./IBRAIN-logo.svg" 
import SearchIcon from "./search-icon.svg"
import cn from "classnames"

export const Sidebar = ({...props}:ISidebarProps) => {
    return ( 
        <div {...props}>
            <LogoIcon style={{margin:"0 0 15px 25px"}}/>
            <label className={cn(style.label)} htmlFor="search">
            <input id="search" className={cn(style.input)} type="text" placeholder="Поиск..." />
            <button className={cn(style.btnSearch)}>
                <SearchIcon/>
            </button>
            </label>
            <Menu/>
        </div>
    )
}