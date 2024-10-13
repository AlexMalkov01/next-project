import { ISidebarProps } from "./sidebar.type"


export const Sidebar = ({...props}:ISidebarProps) => {
    return ( 
        <div {...props}>
            Sidebar
        </div>
    )
}