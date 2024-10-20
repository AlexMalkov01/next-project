import { ferstLevelMenu } from "@/app/helpers/menu.helpers"
import { IMenuItem } from "@/app/interface/menu.inteface"
import { withLayout } from "@/app/layout/layout"
import axios from "axios"
import NotFoundComponent from "@/app/layout/notFound/notFound.Component"
interface IParams {
    params: {
        page:string;
        type: string
    }
}

const firstCategory = 0

async function Course ({ params }:IParams){
    const {menu , page} = await getMenuItem({params})

    return (
        <>
            {!page && <NotFoundComponent/>}
            {!!page && 
            <>
                <h1>{page?.title}</h1>
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
    
    console.log("TEST =>", path);
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
        const { data: page } = await axios(`${process.env.API_DAIMON}top-page/byAlias/${params.page}`)
    
        return {
         menu,
         page
        }
    }
    catch {
       return {menu:[],page:null}
  }
}

export default withLayout(Course)