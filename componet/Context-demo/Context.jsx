import axios from "axios";
import { createContext, useContext, useState } from "react"

 let userContext = createContext(null);


export function Level1()
{
    let context= useContext(userContext);

    return(
        <div className="bg-danger text-dark p-2 m-1">
           <h3>child One {context}</h3>
           <Level2/>
           
        </div>
    )
}

export function Level2()
{
let data = useContext(userContext)
    return(
        <div className="bg-primary text-white p-1 m-1">
            <h3>child two {data}</h3>
        </div>
    )
}


export function Context()
{
    const[getperoduct,setpro]=useState('')
    function fall()
    {
       
    }

    return(
        <div className="bg-dark p-3 m-3 text-white">
           <userContext.Provider value={'john'}>
            <h1>Parent</h1>

            <Level1/>

           </userContext.Provider>
        </div>
    )
}