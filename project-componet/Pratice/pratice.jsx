import { Pratwo } from "./pratwo"

export function PraticeOne()
{
    const props=[{fruit:'mango',name:'siba',id:'123'}]
    return(
        <div>
            <Pratwo {...props}/>
            

        </div>
    )
}