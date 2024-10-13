import styles from "./Htag.module.css"
import { H_TAG_VARIANT } from "./Htag.enum"
import { IHtag_props } from "./Htag.type";
import cn from "classnames"

export const Htag = ({tag,children}:IHtag_props)=> {

    switch (tag) {
        case H_TAG_VARIANT.h1 : return <h1 className={cn(styles.h1)}>{children}</h1>;
        case H_TAG_VARIANT.h2 : return <h2 className={cn(styles.h2)}>{children}</h2>;
        case H_TAG_VARIANT.h3 : return <h3 className={cn(styles.h3)}>{children}</h3>;
        case H_TAG_VARIANT.h4 : return <h4 className={cn(styles.h4)}>{children}</h4>;
        default: return 
    }
}

