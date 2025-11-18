import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

export function Fourcookie()
{
    const[cookie,setcookie,removecookie]=useCookies(['username'])
    const[usename,setusername]=useState('')

    function Handelname(e)
    {
       setusername(e.target.value)

    }
    function handelsign()
    {
        setcookie('username',usename)
    }
    function handelsingnout()
    {
        removecookie('username')
    }
    useEffect(()=>{
        
    })
    return(
        <div>
            <header className="container-fluid m-5">

                {
                    (cookie['username'])?<span>hello ! {cookie['username']} <button onClick={handelsingnout} className=" btn btn-danger">signout</button></span>:<span> hello guist<input onChange={Handelname} type="text" /> <button onClick={handelsign} className=" btn btn-primary">sign in</button></span>
                }

            </header>

        </div>
    )
}