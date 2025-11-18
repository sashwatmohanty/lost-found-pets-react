import { useState } from "react"


export function Classbind()
{
    const[themmm,setthem]=useState('border-black')
    const[btnthem,setbtn]= useState('btn-dark')
    
    function hendelthemm(e)
    {
        if(e.target.checked)
        {
            setthem('bg-dark text-light')
        }
        else{
             setthem('bg-white text-dark')

        }

    }
    function btnchage(e)
    {
        if(e.target.checked)
        {
            setbtn('btn-dark')
        }
       

    }

    
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
    
            <form className={themmm} >
                <div className="form-switch">
                <input onChange={hendelthemm} className="form-check-input" type="checkbox" />
                <label className="form-check-label">Dark moe</label>

            </div>
                <h2 className="bi bi-person-fill">user login</h2>
                <dl>
                    <dt>your name</dt>
                    <dd>
                        <input type="text" className="form-control"/> 
                    </dd>
                    <dt>your password</dt>
                    <dd>
                        <input type="password" className="form-control"/> 
                    </dd>
                </dl>
                <button onClick={btnchage} className="w-100">login</button>

            </form>

        </div>
    )
}