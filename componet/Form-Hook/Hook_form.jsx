import { useForm } from "react-hook-form";


import { Navbar } from "../../controled-componet/navbar";

export function Hookform() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (value) => {
        console.log(value);
    };

    return (
        <div className="container-fluid">

            <header className="mt-4">
            <Navbar theam="bg-dark text-white" title="shpossy" menuitem={['home','menu','contact','sub']} rishi={['bi bi-person btn btn-danger m-2','bi bi-cart4 btn btn-danger']}/>
          
            </header>
           <header className="mt-5" >
                  <Navbar  theam="bg-primary text-white" title="bilu" menuitem={['name','contact','solo']} rishi={['bi bi-search']}/>

            </header> 

         
          
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dd>Enter your name</dd>
                    <dt>
                        <input 
                            type="text"
                            {...register("uname", { required: true })}
                        />
                    </dt>
                    <dd>
                        {errors.uname?.type === "required" && (
                            <span className="text-danger">Name is required</span>
                        )}
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
