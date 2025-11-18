import { useEffect, useState } from "react"
import axios from "axios";


export function Demo()
{
    const[product,setprduct]=useState({title:'',price:0,rating:{rate:0,Ratings:0,Reviews:0},img:'',offer:[]})
    
    function getproduct()
    {
        // axios.get('product.json')
        // .then(response=>{
        //     setprduct(response.data)
        // })







    //  fetch('product.json')
    //  .then(response=>{
    //     return response.json()
    //  })
    //  .then(product=>{
    //     setprduct(product);
    //  })




     
        // let http = new XMLHttpRequest();
        // http.open('GET','product.json',true);
        // http.send();
        // http.onreadystatechange = function()
        // {
        //     if(http.readyState===4)
        //     {   
        //         setprduct(JSON.parse(http.responseText))
        //     }
        // }
        

    }
    useEffect(()=>{
        getproduct();
        
    },[])



    return(
        <div className="container.fluid">
            <h1>Ajax demo</h1>
            <div className="row m-4">
                <div className="col-3">
                    <img src={product.img}width='190px' height='250px'/>

                </div>
                <div className="col-9">
                    <div className="fs-4 fw-bold">{product.title}

                    </div>
                    <div>
                        <span className="badge bg-success text-white rounded">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                         <span className="mx-2  text-secondary  fs-6 fw-bold">{product.rating.Ratings.toLocaleString()} Ratings & {product.rating.Reviews}

                        </span>

                    </div>
                    <div className="mt-4">
                  <div className="mx-2 fs-5 fw-bold">&#8377;{product.price.toLocaleString('en-IN')}

                    </div>

                    </div>
                    <div className="m-4">
                        <ul className="list-unstyled">
                            {
                                product.offer.map((offer,index)=><li className="bi bi-tag-fill text-success my-2" key={index}><span>{offer}</span></li>)
                            }

                        </ul>

                    </div>
         
                 
          
                   

                </div>

            </div>
        </div>
    )
}