import { Formik, useFormik } from "formik";




export function Formicform()
{

    // function Validateproduct(formData)
    // {
    //     var error={id:'',name:'',price:'',stuck:'',city:''}
    //     return error
    //     if(formData.id===0)
    //     {
    //         error.id="ID id required "
    //     }

    // }


     const formic = useFormik({
        initialValues :{
            id:0,
             name:'',
             price:0,
             stuck:false,
             city:''



         },
        validationSchema:yup.obj,
       
         onSubmit:(product)=>{
             console.log(product);
            
        }


     })
    return(

        <div className="container-fluid">
            <form onSubmit={formic.handleSubmit} >
                <dl>
                    <dd>id</dd>
                    <dt><input type="number"name="id"  onChange={formic.handleChange}/></dt>
                    <dd  className="text-danger">{formic.errors.id}</dd>
                    <dd>name</dd>
                    <dt><input type="text" name="name"  onChange={formic.handleChange}/></dt>
                    <dd>price</dd>
                    <dt><input type="number" name="price" onChange={formic.handleChange} /></dt>
                    <dd>stuck</dd>
                    <dt><input type="checkbox" name="stuck"  onChange={formic.handleChange}/>Avalable</dt>
                    <select  name="city"  onChange={formic.handleChange}>
                        <option>city name</option>
                        <option>hyd</option>
                        <option>bbsr</option>
                        
                    </select>
                    
                </dl>
                <button type="submit" name="submit">Resister</button>

            </form>

        </div>
    )

}