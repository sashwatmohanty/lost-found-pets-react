import axios from "axios"
import { useEffect, useState } from "react"


export function Card()
{
    const[iteam,setiteam]=useState({title:'',rating:{ratings :0,Reviews:0},price:0,offer:[]})

 function Demo()
 {

    // fetch("cardflip.json")
    // .then(response=>{
    //      return response.json();
    // })
    // .then(product=>{
    //     setiteam(product)
    // })
  


    //  axios.get('cardflip.json')
    //  .then(response=>{
    //      setiteam(response.data)
    // })

   let http = new XMLHttpRequest();
   http.open('GET','cardflip.json',true);
   http.send();
   http.onreadystatechange = function()
   {
    if(http.readyState===4)
    {
        setiteam(JSON.parse(http.responseText))
    }
   }

 }
 useEffect(()=>{
    Demo();
 },[])


    return(
        <div className="container-fluat">
            <div className="row m-4">

                <div className="col-3">
                  <img src={iteam.img} height="300px" />
                </div>
                <div className="col-7">
                    <div className="fs-4 fw-bold">{iteam.title}

                    </div>

                  <div>
                    <span>{iteam.price}</span>
                    

                    
                  </div>
                  <div>
                    <sapn>{iteam.offer.map((Offer,Tool)=><li className="" key={Tool} > <span>{Offer}</span></li>)}</sapn>
                  </div>


                </div>

             

            </div>

            
          

        </div>
    )
}