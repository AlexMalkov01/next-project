import { DetailsHTMLAttributes, ReactNode } from "react";
import { PARAGRAPH_ZIZE } from "./paragraph.enum";

interface IParagraph extends DetailsHTMLAttributes<HTMLParagraphElement> {
    children: ReactNode,
    size:PARAGRAPH_ZIZE
}

export type {IParagraph}