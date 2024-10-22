import { ferstLevelMenu } from "@/app/helpers/menu.helpers"
import { IMenuItem } from "@/app/interface/menu.inteface"
import { withLayout } from "@/app/layout/layout"
import axios from "axios"
import NotFoundComponent from "@/app/layout/notFound/notFound.Component"
import { IPage, IProduct } from "@/app/interface/page.interface"
import TopPageComponent from "../../components/top-page-component/topPageComponent"
interface IParams {
    params: {
        page:string;
        type: string
    }
}

const firstCategory = 0

async function TopPage ({ params }:IParams){
    const {menu , page , products} = await getMenuItem({params})

    return (
        <>
            {!page && <NotFoundComponent/>}
            {!!page && 
            <>
               <TopPageComponent product={products} page={page}></TopPageComponent>
            </>
            }
        </>
    )
}


export async function getStaticParams () {
    const path = []
    
    for(const fm of ferstLevelMenu) {
        const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.API_DAIMON}top-page/find`,{firstCategory})
        path.push(...menu.flatMap(m => m.pages.map((p)=> {
            return {
                [fm.route]: p.alias
            }
        })))
    }
    
    return path
}

export async function generateMetadata (params:IParams) {
    const { page } = await getMenuItem(params) 
    
    return {
        title: page?.category ?? "IBRAIN"
    }
}


async function getMenuItem ({params}:IParams) {
    const firstCategoryItam = ferstLevelMenu.find(m => m.route === params.type)
    
    try{
        const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.API_DAIMON}top-page/find`,{firstCategory:firstCategoryItam?.id})
        const { data: page } = await axios<IPage>(`${process.env.API_DAIMON}top-page/byAlias/${params.page}`)
        const { data: products } = await axios.post<IProduct[]>(`${process.env.API_DAIMON}product/find`,
            {
                category: page.category,
                limit: 10
            }
        )

    
        return {
         menu,
         page,
         products
        }
    }
    catch {
       return {menu:[],page:null}
  }
}

export default withLayout(TopPage)