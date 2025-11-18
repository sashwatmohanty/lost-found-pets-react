import { useState } from "react"

export function Login()
{
    const[login,setlogin]=useState('')
    {
        if(password==='1123')
        {
            setlogin(()=>{
                
            })
        }


    }
    return(
        <div className="  container-fluid d-flex justify-content-center align-items-center  text-bg-light mt-5 ">
            <form className=" card d-flex justify-content-center align-items-center">
    
            <dl>
                <dd>Enter ur name</dd>
                <dt><input type="text" name="name"/></dt>
                <dd>Password</dd>
                <dt><input type="password" name="password"/></dt>
                <dd>Enter ur email</dd>
                <dt><input type="email" /></dt>
                <dd>cmd</dd>
                <dt><input type="number"/></dt>

            </dl>
            <button type="submit" className="w-100 btn btn-primary">login</button>



            </form>
            
           
            


        </div>
    )
}