import { useState } from "react"

export function Mou()
{
    const [mousclik,setclick]=useState({position:'',left:'',top:''})


    function mousechage(e)
    {
        setclick({position:'fixed',left:e.clientX+ 'px',top:e.clientY+ 'px'})

    }
    return(
        <div onMouseMove={mousechage}>
            <div  style={{height:'1000px'}}>
                <img  src="m2.png" height='200px' style={mousclik} />

            </div>

        </div>
    )
}