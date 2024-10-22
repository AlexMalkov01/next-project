import styles from "./top-page-component.module.css"
import cn from "classnames"
import React from "react"
import { ITopPageComponentProps } from "./top-page-component"
import { Htag } from "../Htag/Htag"
import { TAG_SIZE, TAG_VARIANT } from "../tag/tag.enum"
import { H_TAG_VARIANT } from "../Htag/Htag.enum"
import { Tag } from "../tag/tag"
import { Paragraph } from "../paragraph/paragraph"
import { PARAGRAPH_ZIZE } from "../paragraph/paragraph.enum"
import HhCart from "../hhCart/hhCart"

const TopPageComponent = ({page,product}:ITopPageComponentProps) => {
    return (
        <div className={cn(styles.topPage)}>
            <header className={cn(styles.headers)}>
            <div className={cn(styles.title)}>
                <Htag tag={H_TAG_VARIANT.h1}>
                    {page.title}
                </Htag>
                <Tag 
                size={TAG_SIZE.MIDDLE} 
                variant={TAG_VARIANT.GRAY}>
                    {product.length}
                </Tag>
            </div> 
            <div className={cn(styles.sortPage)}>
                <Paragraph size={PARAGRAPH_ZIZE.MIDDLE}>По рейтингу</Paragraph>
                <Paragraph size={PARAGRAPH_ZIZE.MIDDLE}>По цене</Paragraph>
            </div>
            </header>
            <main className={cn(styles.mainPage)}>
                <div className={cn(styles.hhWrapperBlok)}>
                    <div className={styles.hhTitleBlock}>
                        <span className={cn(styles.hhTitle)}>Вакансии - {page.category}</span>
                        <Tag size={TAG_SIZE.MIDDLE} href={"https://hh.ru/"} variant={TAG_VARIANT.RED}>hh.ru</Tag>
                    </div> 
                    <HhCart hh={page.hh}/>
                </div>
            </main>
        </div>
    )
}

export default TopPageComponent