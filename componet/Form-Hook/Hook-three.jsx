import { useForm } from "react-hook-form"
import { Navtwo } from "../../controled-componet/Nav-two";



export function HookThree()
{
const{register,handleSubmit,formState:{errors}}=useForm();

const submit =(value=>{
    console.log(value);
    
})
    return(
        <div className="container-fluid ">
            
           
            <header>
            <Navtwo title="Zindal" Listiteam={['home','menu','cotact','shop']} btn={['bi bi-search btn btn-danger m-2','bi bi-cart btn btn-danger m-2']}/>
            </header>

         
            
          


           
          
        
            <form  className="card m-5 w-25 d-flex justify-content-center align-items-center" onSubmit={handleSubmit(submit)}>
                
                <h2 className="text-primary m-2">Login page</h2>
                <dl className="">
                    <dd>Enter ur Name</dd>
                    <dt><input type="text" name="Uname"{...register("Uname",{required:true,maxLength:5})}></input></dt>
                    <dd className="text-danger">
                        {
                            (errors.Uname?.type==="required")?<span>name is requerd</span>:<span></span>
                        }
                    </dd>

                    <dd>Number</dd>
                    <dt><input type="number" name="Num"{...register("Num",{required:true,maxLength:10})}></input></dt>
                    <dd className="text-danger">
                        {
                            (errors.Uname?.type==="required")?<span>Number is mandetory</span>:<span></span>
                        }
                    </dd>

                    <dd>Password</dd>
                    <dt><input type="password" name="Pwd"{...register("Pwd",{required:true,maxLength:5})}></input></dt>
                    <dd className="text-danger">
                        {
                            (errors.Uname?.type==="required")?<span>Plz Enter ur pwt</span>:<span></span>
                        }
                    </dd>
                </dl>

                <button className="btn btn-danger w-25" type="submit">submit</button>
            </form>

        </div>
        
    )
}