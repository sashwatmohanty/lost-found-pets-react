import { Formik,Field,Form,ErrorMessage } from "formik"
import * as yup from "yup"
import { ProOne } from "./projectOne";


export function ProTwo()
{
    return(
        <div>
            <header className="bg-dark text-white">
                <ProOne title="Login-Web"menu={['home','menu','contact']}btn={['click']}/>
            </header>
            <Formik initialValues={{name:"",id:0,password:0}}
            validationSchema={yup.object({
                name:yup.string().required("name is requerd"),
                  id:yup.number().required("id is requerd"),
                    password:yup.number().required("password is requerd"),
            })}
            onSubmit={(submit=>{
                console.log(submit);
                
            })}
            
            >
                <Form className="d-flex justify-content-center align-items-center m-5 bg-body p-2 " >
                     <dl className="card bg-dark-subtle">
                    <h2 className="text-danger text-center">login page</h2>
                    <dd className="">Enter ur name</dd>
                    <div className="">
                        <Field  className="shadow-sm p-1 m-2"name="name" type="text"></Field>
                    </div>
                    <dd className="text-danger"><ErrorMessage  name="name"></ErrorMessage></dd>

                     <dd>Enter ur id</dd>
                    <div className="">
                        <Field className="shadow-sm p-1 m-2" name="id" type="number"></Field>
                    </div>
                    <dd className="text-danger"><ErrorMessage  name="id"></ErrorMessage></dd>

                     <dd>Enter ur password</dd>
                    <div>
                        <Field className="shadow-sm p-1 m-2" name="password" type="password"></Field>
                    </div>
                    <dd className="text-danger"><ErrorMessage name="password"></ErrorMessage></dd>
                     <button className="btn btn-primary" type="submit">submit</button>
                </dl>
               
                
              

                </Form>
               
                
                
            </Formik>

        </div>
    )
}