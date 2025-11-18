import { Formik,Field,Form,ErrorMessage } from "formik";
import *as yup from "yup";

export function LogConform()
{
    return(
        <div>
            <Formik initialValues={{name:'',password:''}} validationSchema={yup.object({
            name:yup.string().required("name is requerd"),
            password:yup.string().required("password is requerd")

            })} onSubmit={response=>{
                console.log(response);
                
            }}>

            <Form className="d-flex justify-content-center m-5 p-2 ">
                <dl className="card card-header shadow-lg  bg-light-subtle p-3">
                    <h2 className="text-danger fs-2 fw-light ">Login page</h2>
                    <dt>Enter ur name</dt>
                    <dd><Field name="name"></Field></dd>
                    <dd className="text-danger"><ErrorMessage name="name"/></dd>

                    <dt>Enter ur password</dt>
                    <dd><Field name="password"></Field></dd>
                    <dd className="text-danger"><ErrorMessage name="password"/></dd>
                    <button className="btn btn-danger">login</button>
                </dl>


            </Form>

            </Formik>
        </div>
    )
}