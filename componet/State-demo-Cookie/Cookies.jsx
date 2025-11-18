import { useState } from "react"
import { useCookies } from "react-cookie"

export function StateCooike()
{
    const[cookies,setCookie,removeCookies]=useCookies(['username'])
    const[UserName,setname]=useState('')
    function handelnamechange(e)
    {
    setname(e.target.value)

    }
    function btnchage(e)
    {
    setCookie('username',UserName)
    }
    

    return(
        <div className="container-fluid d-flex justify-content-between">
            <header className="mt-4 p-3 border border-1 border-dark" >
                {
                    (cookies['username'])?<span>Hello {cookies['username']} <button className="btn btn-danger m-3">Signout</button></span>:<span> Hello Guiest!<input onChange={handelnamechange} type="text"/><button onClick={btnchage} className="btn btn-primary">Sign in</button></span>
                }

            </header>

        </div>
    )

}