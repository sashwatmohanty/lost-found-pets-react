import { Formik,Field,Form,ErrorMessage } from "formik"
import * as yup from "yup"
import { Navtwo } from "../controled-componet/Nav-two";

export function Pcardvalidation()
{
    return(
        <div>
            
         <header className="bg bg-danger-subtle">
        {
          <Navtwo title="Loginpagee" Listiteam={['home','contact','emial']} btn={['bi bi-search btn btn-danger m-2',['bi bi-person  btn btn-primary']]}/>
        }
        

      </header> 

            <Formik initialValues={{name:'',id:'',email:'',password:''}}
            validationSchema={yup.object({
           name: yup.string().required("name is required"),
           id: yup.number().required("id is required"),
           email:yup.string().required("eamil id requerd"),
           password:yup.number().required("password is requerd")
           


            }
         
            )}
            onSubmit={(product)=>{
                console.log(product);
                
            }}
            
            
            >
                {

                 form=><Form className="d-flex justify-content-center align-items-center m-5 ">
                    <dl className="card shadow shadow-lg p-2 m-4 bg-danger-subtle ">
                        <dt><mark>Enter ur name</mark></dt>
                        <dd>
                            <div>
                                <Field name="name"></Field>
                            </div>
                        </dd>
                        <dd><ErrorMessage name="name"></ErrorMessage></dd>

                         <dt>Enter ur id</dt>
                        <dd>
                            <div>
                                <Field name="id"></Field>
                            </div>
                        </dd>
                        <dd><ErrorMessage name="id"></ErrorMessage></dd>

                         <dt>Enter ur email</dt>
                        <dd>
                            <div>
                                <Field name="email"></Field>
                            </div>
                        </dd>
                        <dd><ErrorMessage name="email"></ErrorMessage></dd>


                         <dt>Enter ur password</dt>
                        <dd>
                            <div>
                                <Field name="password"></Field>
                            </div>
                        </dd>
                        <dd><ErrorMessage name="password"></ErrorMessage></dd>

                        <button disabled={!form.isValid} type="submit" className="btn btn-danger">submit</button>

                        <h4> check the error</h4>
                        {
                             Object.keys(form.errors).map(product=><li key={product}>{product}</li>)
                        }




                    </dl>
                    
                   
                    
                </Form>
                }
                


            </Formik>

        </div>
    )
}