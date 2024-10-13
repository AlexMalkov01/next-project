import styles from "./button.module.css"
import cn from "classnames"
import { IButton } from "./button.type"
import { ARROW_SVG_POSITION, BTN_VARIANT } from "./button.enam"
import ArrowIcon  from "./arrow.svg"

export const Button = ({variant,children, className, arrow, ...props}:IButton) => {

    return (
        <>
        <button
        className={cn(styles.btn,className ?? "",{
            [styles.primary]: variant === BTN_VARIANT.PRIMARY,
            [styles.trasparrent]: variant === BTN_VARIANT.TRANSPARRENT
        })}
        {...props}
        >
            {children}
            {!!arrow 
            && 
            <span className={cn(styles.arrow, {
                [styles.arrowBottom]: arrow === ARROW_SVG_POSITION.SVG_BOTTOM
            })}><ArrowIcon/></span>}
        </button>
        </>
    )
}