import { useForm } from "react-hook-form";

export function Hooktwo()
{
    const{register,handleSubmit,formState:{errors}}=useForm()
    const submit =(value=>{
        console.log(value);
        
    })
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                <dd>Enter ur name</dd>
                <dt><input type="text"name="Uname"{...register("Uname",{required:true,minLength:4})}></input></dt>
                <dd className="text-danger">
                     {(errors.Uname?.type==="required")?<span>id is requerd</span>:<span></span>}

                </dd>

            </dl>
            <button type="submit">login</button>


            </form>
            
        </div>
    )

}