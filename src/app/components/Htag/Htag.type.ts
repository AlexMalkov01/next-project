import { H_TAG_VARIANT } from "./Htag.enum";
import { ReactNode } from "react";

interface IHtag_props {
    children:ReactNode,
    tag: H_TAG_VARIANT,
}

export type {IHtag_props}