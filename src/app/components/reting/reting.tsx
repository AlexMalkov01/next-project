"use client"

import { useEffect, useState } from "react"
import { IRatingProps } from "./rating.type"
import styles from "./rating.module.css"
import cn from "classnames"

import StarIcon from "./rating.svg"
import React from "react"

export const Rating = ({isEditable , rating , setRating }:IRatingProps)=> {

    const [arrayStar , setArrayStar] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(()=>{
        renderStars(rating)
    },[rating])
    
    const onClickStar = (idx:number)=> {
        if(!isEditable)return
        setRating(idx+1)
    }

    const onHoverStar = (idx:number)=>{
        if(!isEditable)return
        renderStars(idx) 
    }
    
    const renderStars = (currentRating:number)=> { 
        const updatedStars = arrayStar.map((star: JSX.Element , idx: number)=>{
            return (
                <StarIcon 
                key={idx} 
                className={cn(styles.star,{
                    [styles.filled]: idx < currentRating
                })}
                onClick={()=> onClickStar(idx)}
                onMouseEnter={()=>onHoverStar(idx + 1)}
                onMouseLeave={()=> onHoverStar(rating)}
                 />
            )
        })
        setArrayStar(updatedStars)
    } 

    return (
        <div>
            {arrayStar.map((star:JSX.Element , idx)=> <React.Fragment key={idx}>{star}</React.Fragment> )}
        </div>
    )
}