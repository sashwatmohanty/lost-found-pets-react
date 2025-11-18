import axios from "axios"
import { useEffect, useState } from "react"


export function Clickble()
{
    const[Mobile,setmobile]=useState([{image:''}])
    const[previewimage,setpreview]=useState('')

    useEffect(()=>{
        axios.get('Mobile.json')
        .then(response=>{
            setmobile(response.data)
        })
    })
    
    function handelMouse(e)
    {
       setpreview(e.target.src)

    }

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-2">
                    {
                        Mobile.map(iteam=>
                            <div className="my-y" key={iteam.image}>
                            <img onMouseOver={handelMouse} src={iteam.image} width="50%"></img>
                            </div>

                        )

                    }

                </div>
                <div className="col-10">
                    <img src={previewimage} height="500px" width="400px"/>


                </div>

            </div>
            
        </div>
    )
    
}