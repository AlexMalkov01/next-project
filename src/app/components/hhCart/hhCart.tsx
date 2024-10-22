import React from "react"
import styles from "./hhCart.module.css"
import cn from "classnames"
import HhRaitingIcon from "./hh-raiting-icon.svg"
import { IHh } from "./hhCart.type"
const HhCart = ({hh}:IHh) => {
   
    return (
            <div className={cn(styles.hhBlockWrap)}>
                <div className={cn(styles.hhFerstBlock)}>
                    <p className={cn(styles.hhTitleCart)}>Всего вакансий</p>
                    <span className={cn(styles.hhCount)}>
                        {hh?.count ?? 0}
                        </span>
                </div>

                <div className={cn(styles.hhSecondBlock)}>
                    <div className={cn(styles.hhSecondCart)}>
                        <p className={cn(styles.hhTitleCart)}>Начальный</p>
                        <span className={cn(styles.hhPrice)}>
                            {hh?.juniorSalary.toLocaleString('ru-RU')?? 0} ₽</span>
                        <div className={cn(styles.hhIconblock)}>
                            <HhRaitingIcon />
                            <HhRaitingIcon className={cn(styles.hhIcoonFill)}/>
                            <HhRaitingIcon className={cn(styles.hhIcoonFill)}/>
                        </div>
                    </div>
                    <div className={cn(styles.hhSecondCart)}>
                        <p className={cn(styles.hhTitleCart)}>Средний</p>
                        <span className={cn(styles.hhPrice)}>
                            {hh?.middleSalary.toLocaleString('ru-RU') ?? 0} ₽</span>
                        <div className={cn(styles.hhIconblock)}>
                            <HhRaitingIcon/>
                            <HhRaitingIcon/>
                            <HhRaitingIcon className={cn(styles.hhIcoonFill)}/>
                        </div>
                    </div>
                    <div className={cn(styles.hhSecondCart)}>
                        <p className={cn(styles.hhTitleCart)}>Проффисеонал</p>
                        <span className={cn(styles.hhPrice)}>
                            {hh?.seniorSalary.toLocaleString('ru-RU') ?? 0} ₽</span>
                        <div className={cn(styles.hhIconblock)}>
                            <HhRaitingIcon />
                            <HhRaitingIcon />
                            <HhRaitingIcon />
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default HhCart