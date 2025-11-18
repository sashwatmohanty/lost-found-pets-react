import { useState } from "react"

export function Counn()
{
    const[count,setcount]=useState(0)
    return(
        <div>
            <h1>Conter {count}</h1>
            <button className=" btn btn-primary" onClick={()=>setcount(count+1)}>Increse</button>
                    <button className=" btn btn-danger"onClick={()=>setcount(count-1)}>decrese</button>

        </div>
    )
}