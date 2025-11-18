import { Radio } from "@mui/material"
import { useEffect, useState } from "react"

export function PraOnee()
{
    const[game,setgame]=useState(['cricket','Football','Hockey'])
    const[week,setweek]=useState(['weekday','weekend'])


    return(
        <div>
            <h1>hello eveey one</h1>
            {
                game.map(item=><Radio key={item}>{item}</Radio>)
            }
            {
                week.map(it=><Radio key={it}>{it}</Radio>)
            }

        </div>
    )
}