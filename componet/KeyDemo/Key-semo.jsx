import axios from "axios";
import { useEffect, useState } from "react"


export function Kdem()

{
    const[keytitle,setkey]=useState([{Username:''}])
    const[msg,setmsg]=useState('');
    const [error,seterror]=useState('');

    useEffect(()=>{
        axios.get('key.json')
        .then(response=>{
            setkey(response.data)
        })
    })

    function change(e)
    {
       for(var user of keytitle )
       {
        if(user.Username===e.target.value)
        {
            setmsg('user id taken try anathger')
            seterror('text-danger')
            
            break;
        }
        else{
            setmsg('usr id avalabe')
            seterror('text-success')
        }
        break;

       }
        

    }

    return(
        <div className="container-fluid">
            <h2>Resister form</h2>
            <dl>
                <dd>Username</dd>
                <dt><input type="text" onKeyUp={change}/></dt>
                <dd className={error}>{msg}</dd>


                

            </dl>
            

        </div>
    )
}