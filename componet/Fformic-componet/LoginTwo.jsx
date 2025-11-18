import { Formik,Form,Field,ErrorMessage } from "formik"
import * as yup from "yup"
export function LoginTwo()
{
    return(
        <div className="">
            <Formik initialValues={{name:'',id:'',password:''}}validationSchema={yup.object({
                name:yup.string().required("name is requerd"),
                id:yup.string().required("id is requerd"),
                password:yup.string().required("password is requerd"),
                
            })}onSubmit={(resonse)=>{
                console.log(resonse);
                

            }}>
                 <Form className="d-flex justify-content-center align-items-center">
                      
                        <dl className="dl">
                            <dd>Enter your name</dd>
                            <dt><Field  type="number" name="name" /></dt>
                            <dd className="text-danger"><ErrorMessage name="name" /></dd>

                            <dd>Enter id</dd>
                            <dt><Field type="text" name="id" /></dt>
                            <dd className="text-danger"><ErrorMessage name="id" /></dd>

                            <dd>Enter your mobile</dd>
                            <dt><Field type="text" name="password" /></dt>
                            <dd className="text-danger"><ErrorMessage name="password" /></dd>

                             <button className="btn btn-danger d-flex justify-content-center align-content-center w-100" type="submit">Submit</button>
                        </dl>
                

                        
                        
                        

                   
                    

                    

                </Form>
            

            </Formik>

        </div>
    )
}