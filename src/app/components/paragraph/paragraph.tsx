import { PARAGRAPH_ZIZE } from "./paragraph.enum"
import styles from "./paragraph.module.css"
import { IParagraph } from "./paragraph.type"
import cn from "classnames"

export const Paragraph = ({size , children , className}:IParagraph) => {

    return (
        <p className={cn(className ?? "",{
        [styles.S]: PARAGRAPH_ZIZE.SMALL === size,
        [styles.M]: PARAGRAPH_ZIZE.MIDDLE === size,
        [styles.L]: PARAGRAPH_ZIZE.LARGE === size
        })}>
            {children}
        </p>
    )
}