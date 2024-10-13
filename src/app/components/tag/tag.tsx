import { ITagProps } from "./tag.type"
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum"
import styles from "./tag.module.css"
import cn from "classnames"

export const Tag = ({className , variant , children , href ,size, ...props}:ITagProps) => {
    return (
        <div className={cn(styles.tag, className ?? "", {
            [styles.S]: size === TAG_SIZE.SMALL,
            [styles.M]: size ===TAG_SIZE.MIDDLE,
           [styles.trasparrent]: variant === TAG_VARIANT.TRANSPARRENT ,
           [styles.primary]: variant === TAG_VARIANT.PRIMARY,
           [styles.gray]: variant === TAG_VARIANT.GRAY,
           [styles.green]: variant === TAG_VARIANT.GREEN,
           [styles.red]: variant === TAG_VARIANT.RED,
        })}
        {...props}
        >
            {href ? <a href={href} target="_blank">{children}</a> : children}
        </div>
    )
}