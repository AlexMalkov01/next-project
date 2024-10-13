
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface IRatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLElement> {
    isEditable?:boolean,
    rating: number,
    setRating?: (rating:number) => void | undefined
}

export type {IRatingProps}