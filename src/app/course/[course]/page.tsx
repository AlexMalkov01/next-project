import { MENU_CATEGORY } from "@/app/enum/menu-catygory.enum"
import { IMenuItem } from "@/app/interface/menu.inteface"
import { IPage } from "@/app/interface/page.interface"
import { withLayout } from "@/app/layout/layout"
import axios from "axios"

interface IParams {
    params: {
        course:string
    }
}

const firstCategory = 0

async function Course ({ params }:IParams){
    const {menu,page} = await getMenuItem(params.course)
    return (
        <>
        <h2>
            course
        </h2>
        </>
    )
}


export async function getStaticParams () {
    const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.API_DAIMON}top-page/find`,{firstCategory})

    return menu.flatMap(m => m.pages.map((p)=> {
        return {
            course: p.alias
        }
    }))
}

export async function generateMetadata ({params}:IParams) {
    const { page } = await getMenuItem(params.course) 

    return {
        title: page.category
    }
}


async function getMenuItem (pageSlag:string) {
        
    const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.API_DAIMON}top-page/find`,{firstCategory})
    const { data: page } = await axios(`${process.env.API_DAIMON}top-page/byAlias/${pageSlag}`)
    
    return {
      menu,
      page
    }
  }


export default withLayout(Course)