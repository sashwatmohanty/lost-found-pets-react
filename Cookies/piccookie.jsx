import { useEffect, useState } from "react"
import { Cookies, useCookies } from "react-cookie"

export function Piccookie()
{
    const[cookie,setcookie,removecookie]=useCookies(['image'])
    const[image,setimage]=useState('');
   

    function Handelinput(e)
    {
        setimage(e.target.value);
        
        
    }
    function handelclik()
    {
         if (image.toLowerCase() === "image") {
      setcookie("image", "child.png", { path: "/" }); // save image path
    } else {
      alert("Please type 'child' to show the image");
    }

    }
    return(
        <div className=" container-fluid">
           <header className="m-2 d-flex justify-content-between p-2">
            {
            (cookie['image'])?<span>Your image{cookie['image']}<img src="child.png" style={{ width: "100px" }} alt="pic" /><button className="btn btn-success">Suceess</button></span>:<span><input placeholder="image" onChange={Handelinput} type="text"></input> <button onClick={handelclik} className="btn btn-danger">click</button></span>
           }
           </header>


        </div>
    )
}