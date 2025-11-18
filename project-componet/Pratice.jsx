import { Formik,Field,Form,ErrorMessage } from "formik"
import * as yup from "yup"
export function Praticeing()
{
    return(
        <div className="m-5 w-50">
            <Formik initialValues={{name:'',id:'',password:''}} validationSchema={yup.object({
                name:yup.string().required("name is requeied"),
                id:yup.string().required("id is requerd"),
                 password:yup.string().required("password is requerd"),
            })} onSubmit={response=>{
                console.log(response);
                
            }}>
                <Form>
                    <div className=" card w-50 d-flex justify-content-center">
                       <dl className=" card-body ">
                        <dt>Enter ur name</dt>
                        <dd>
                            <Field name="name"></Field>  
                        </dd>
                        <dt><ErrorMessage name="name"></ErrorMessage></dt>

                        
                         <dt>Enter ur id</dt>
                        <dd>
                            <Field name="id"></Field>  
                        </dd>
                        <dt><ErrorMessage name="id"></ErrorMessage></dt>


                         <dt>Enter ur password</dt>
                        <dd>
                            <Field name="password"></Field>  
                        </dd>
                        <dt><ErrorMessage name="password"></ErrorMessage></dt>




                       </dl>
                       <button className="btn btn-danger">submit</button>
                        
                    </div>
                </Form>

            </Formik>
            
        </div>
    )
}