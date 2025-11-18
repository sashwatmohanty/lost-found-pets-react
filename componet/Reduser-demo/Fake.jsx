import axios from "axios"
import { useEffect, useState } from "react"

export function Fake()
{
    const[product,setproduct]=useState('')
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setproduct(response)
        })
    })
    return(
        <div>

            {
                product.map(item=>{item.product})
            }

            

         
            
        </div>
    )
}