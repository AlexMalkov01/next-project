import { withLayout } from "@/app/layout/layout"

 function Course ({params}){
    return (
        <h1>
            Course {JSON.stringify(params)}
        </h1>
    )
}

export default withLayout(Course)