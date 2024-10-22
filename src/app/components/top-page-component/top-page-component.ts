import { MENU_CATEGORY } from "@/app/enum/menu-catygory.enum";
import { IPage, IProduct } from "@/app/interface/page.interface";
import { DetailsHTMLAttributes} from "react";

interface ITopPageComponentProps extends DetailsHTMLAttributes<HTMLDivElement> {
    firstCategory?: MENU_CATEGORY,
    page: IPage,
    product: IProduct[]
}

export type {ITopPageComponentProps}

