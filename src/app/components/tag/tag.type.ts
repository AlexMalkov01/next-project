import { DetailsHTMLAttributes, ReactNode } from "react";
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum";

export interface ITagProps extends DetailsHTMLAttributes<HTMLDivElement>{
    children: ReactNode,
    variant: TAG_VARIANT,
    size:TAG_SIZE,
    href?: string
}

