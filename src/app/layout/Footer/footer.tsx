import { IFooterProps } from "./footer.type"


export const Footer = ({children,...props}:IFooterProps) => {
    return ( 
        <footer {...props}>
            {children}
        </footer>
    )
}