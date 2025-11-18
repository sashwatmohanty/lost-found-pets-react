import { useEffect, useRef, useState } from "react"


export function Bounce()
{
    const [title,settitle]=useState('')
    let thread = useRef(null);
    function v1()
    {
        settitle('volume incresss by 10%')
    }
    function v2()
    {
        settitle('volume incresss by 40%')
    }
    function v3()
    {
        settitle('volume incresss by 60%')
    }
    function v4()
    {
        settitle('volume incresss by 100%')
    }

    function valumeonn()
    {
       setTimeout(v1,1000);
       setTimeout(v2,4000);
       thread.current=setTimeout(v3,6000);
       setTimeout(v4,8000);
      
    }
    function stop()
    {
        clearTimeout(thread.current)
    }
    
    
    return(
        <div className="container-fluid">
            <button onClick={valumeonn} className="bi bi-volume-up btn btn-danger mt-4"></button>
            <button onClick={stop} className="bi bi-volume-off btn btn-primary ms-2 mt-4"></button>
            <p>{title}</p>

        </div>
    )

}


// export function Bounce()
// {
//     const [now,setnew]=useState('')
//     function time(){
//            var n = new Date();
//            setnew(n.toLocaleTimeString())

//     }

//     useEffect(()=>{
//          setInterval(time,1000)
//     },[])
//     return(
//         <div className="container-fluid">
//             <p>{now}</p>


//         </div>
//     )

// }