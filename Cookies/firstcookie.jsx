import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie"
import { set } from "react-hook-form";

export function FirstCookies()
{
    
    const [cookie,setcookie,removecookie] = useCookies(['username']);
    const[username,setusername]=useState('');

    useEffect(()=>{

    })

    function handelchange(e)
    {
        setusername(e.target.value)


    }
    function handelsiggnin()
    {
        setcookie('username',username)

    }

    return(
        <div className="container-fluid">
            <header className="mt-4 d-flex justify-content-between ">
                {
                    (cookie['username'])?<span>hello{cookie['username']}<button className="btn btn-danger m-1">sign out</button></span>:<span>hello guiest<input onChange={handelchange} type="text"></input><button onClick={handelsiggnin} className="btn btn-primary m-1">sign in</button></span>
                }

            </header>

            

        </div>
    )
}