import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Fakestoteproductss()
{
    const[products,setproducts]=useState([{id:'0',title:'',image:'',category:'',price:''}])
     let prams= useParams('')
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category${prams.category}`)
        .then(response=>{
            setproducts(response.data)
        })
    },[])
   
    return(
        <div>
            <h1>products</h1>
            <main className=" d-flex flex-wrap">
                   {products.map(catagories=>
                <div className=" card p-2 m-1 h-100">
                    <div className="card-img-top">
                        {catagories.image}

                    </div>
                </div>
            )}

            </main>
         
            <Link to="/">go back</Link>

        </div>
    )
}