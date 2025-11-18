import { useEffect, useState } from "react"
import { set } from "react-hook-form"
import { Cart } from "./card-project"
import { Card } from "../componet/Flipcard/flip"
import axios from "axios"


export function Navigation()
{


    return(
      
            <div>
                
        <div className="d-flex justify-content-between align-items-center ps-4 m-1 bg-danger-subtle ">
          
       
          <div className="text- fs-4 fw-bold">
            <span>Showwwwn</span>

          </div>
          <div className=" d-flex mx-lg-4 gap-4 fs-2">
            <span>menu</span>
            <span>nav</span>
            <span>contact</span>
            <span>referr</span>

          </div>
          <div>
            <button className="btn btn-primary">click</button>

          </div>
        </div>
       
       <div>
       <section className="m-5">
        <Cart/>
       </section>
       </div>
       
        
       </div>

       
       
        

         

       
    )
}