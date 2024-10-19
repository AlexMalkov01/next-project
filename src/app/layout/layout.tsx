import styles from "./layout.module.css"
import cn from "classnames"
import { ILayoutProps } from "./layout.type"
import { Footer } from "./Footer/footer"
import { Sidebar } from "./Sidebar/sidebar"
import { Header } from "./Header/Header"
import { FunctionComponent } from "react"
import { AppContextProvider } from "../context/app.context"

const Layout = ({children}:ILayoutProps)=> {

    return (
        <div className={cn(styles.wrapper)}>
            <Header className={cn(styles.header)}/>
            <Sidebar className={cn(styles.sidebar)}/>
            <div className={cn(styles.body)}>
                {children}
            </div>
            <Footer className={cn(styles.footer)} >
                <div>
                    <span>
                        IBRAIN © 2023 - 2024 Все права защищены
                    </span>
                </div>
                <div className={cn(styles.footerGap)}>
                    <span>
                        Пользовательское соглашение
                    </span>
                    <span>
                        Политика конфиденциальности
                    </span>
                </div>
            </Footer>
        </div>
    )
}

export const withLayout = <T extends Record<string , unknown>>(Component:FunctionComponent<T>)=> {
    return function withLayoutCompomemt (props:T):JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}


