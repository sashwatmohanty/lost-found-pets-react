import { useState } from "react"
import { Resister } from "./resister"
import { Validloginpage } from "./Login-Vali"


export function ResiLogin()
{
    const[componet,setcomponet]=useState()
    function Loadcomponet(e)
    {
        if(e.target.id==="Resister")
        {
            setcomponet(<Resister/>)
        }
        else{
            setcomponet(<Validloginpage/>)
        }
    

    }
    return(
        <div>
            <nav>

            
            <button id="login"  className="btn btn-danger m-2" onClick={Loadcomponet}> login</button>
            <button id="Res" className="btn btn-primary" onClick={Loadcomponet}>Res</button>
            </nav>
            <hr />
            <section className="ms-3">
                {componet}
            </section>
        </div>
    )
}