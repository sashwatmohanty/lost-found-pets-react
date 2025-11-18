
import { useState } from "react";
import { ProOne } from "./projectOne";
// import { Validloginpage } from "../componet/Login-Validation/Login-Vali";
import { Resister } from "../componet/Login-Validation/resister";


export function Prothree()
{
    const[componet,setcomponet]=useState('')
    function handelresisterclick(e)
    {
        if(e.target.id==='Resi')
        {
            setcomponet(<Resister/>)

        }


    }


    

    return(
        
        <div>
              <header className="bg-dark text-white">
                <ProOne title="Login-Web"menu={['home','menu','contact']}btn={['Resi']}  handelresisterclick={handelresisterclick} 
 />

                
            </header>
            <section>
                {
                    componet
                }
            </section>

            

           
           
            
            
        </div>
    )
}