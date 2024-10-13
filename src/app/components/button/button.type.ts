import { ButtonHTMLAttributes, ReactNode } from "react";
import { ARROW_SVG_POSITION, BTN_VARIANT } from "./button.enam";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    variant: BTN_VARIANT,
    arrow?: ARROW_SVG_POSITION
}

export type {IButton}