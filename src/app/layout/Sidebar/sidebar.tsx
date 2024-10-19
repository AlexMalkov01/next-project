import { Menu } from "../menu/menu"
import { ISidebarProps } from "./sidebar.type"


export const Sidebar = ({...props}:ISidebarProps) => {
    return ( 
        <div {...props}>
            <Menu/>
        </div>
    )
}