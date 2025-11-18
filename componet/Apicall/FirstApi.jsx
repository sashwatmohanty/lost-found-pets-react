import axios from "axios";
import { useEffect, useState } from "react"


export function FirstApi()
{
    const[allpro,setproduct]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setproduct(response.data)
        })
    })
    return(
        <div className=" container-fluid">
            <div className="row">
                <div className="col-2">
                    {
                    allpro.map(item=><li key={item}>{item.id}</li>)

                        
                    }

                </div>
                <div className="col-10 ">
                    <div className="row">
                        <div className="col-3">
                            {
                                allpro.map(value=>
                                    <div className="card shadow">
                                         <img className="card-img-top shadow " src={value.image}>
                                         </img>
                                    </div>
                                   
                                )
                            }

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}