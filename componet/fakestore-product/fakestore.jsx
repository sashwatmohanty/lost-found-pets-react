import axios from "axios"
import { useRef } from "react"
import { useEffect, useState } from "react"

export function Store()
{

    const[product,setproduct]=useState({id:0,title:'',price:0,description:'',category:'',image:'',rating:{rate:0,count:0}})
    const[pmsgg,setmsg]=useState('');
     let count = useRef(1);
     let thread = useRef(null);
     
    function Loadproduct(id)
    {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(product=>{
            setproduct(product.data)

        })

    }
    useEffect(()=>{
        Loadproduct(1)

    },[])

    function rightbutton()
    {
        count.current=count.current+1;
        Loadproduct(count.current)

    }
    function leftbutton()
    {
        count.current=count.current-1;
        Loadproduct(count.current)
    }

    function playauto()
    {
          count.current=count.current+1;
          axios.get(`https://fakestoreapi.com/products/${count.current}`)
          .then(response=>{
            setproduct(response.data)
          }) 
        
    }
    function autochage()
    {
        thread.current = setInterval(playauto,2000)
        setmsg('Autochanging Start')
    }

    function autooff()
    {
         clearInterval(thread.current)
         setmsg('Its take a break')
    }




    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4 w-50">
                <div className="card-header text-center bg-danger-subtle">
                  <div>{product.title}</div>

                </div>
                <div className="card-body bg-light">
                    <div className="row ">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={leftbutton} className="bi bi-chevron-bar-left btn btn-danger"></button>

                        </div>
                         <div className="col-10 text-center position-relative">
                            <div className="badge position-absolute bg-danger end-0 top-0 rounded rounded-circle">
                                {product.price.toLocaleString('en-us',{style:"currency",currency:'usd'})}

                            </div>
                            <img width='50%' src={product.image} />

                        </div>
                         <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                              <button onClick={rightbutton} className="bi bi-chevron-bar-right btn btn-danger"></button>

                        </div>

                    </div>

                </div>
                <div className="card-footer text-center bg-danger-subtle">
                    <div>{pmsgg}</div>
                    <button onClick={autochage} className="btn btn-primary bi bi-play m-3"></button>
                     <button onClick={autooff} className="btn btn-danger bi bi-pause"></button>

                </div>

            </div>

        </div>
    )
}