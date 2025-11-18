import { useState } from "react"

export function Navidur(Props)
{
    

    return(
        <nav className=" d-flex justify-content-between ">
            <div>{Props.title}</div>   
            <div>
                {Props.menu.map(item=><span className="mx-4" key={item}>{item}</span>)}
            </div>
            <div>
                {Props.buttom.map(btn=><button key={btn}>{btn}</button>)}
            </div>

        </nav>
    )
}