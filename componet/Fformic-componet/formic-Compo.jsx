import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function Fcomponet() {
    return (
        
        <div className="container-fluid d-flex align-content-center justify-content-center mt-5 bg-dark w-25 text-bg-primary">
            
         
           
            <Formik
                initialValues={{ id: 0, name: '', mobile: '' }}
                validationSchema={yup.object({
                    id: yup.number().required('Product ID is required'),
                    name: yup.string().required('Product name is required'),
                    mobile: yup.string().required('Mobile number is required')
                })}
                onSubmit={(product) => {
                    console.log(product);
                }}
            >
                {() => (
                    
                    <Form className="d-flex justify-content-center align-items-center">
                      
                        <dl className="dl">
                            <dd>Enter your ID</dd>
                            <dt><Field  type="number" name="id" /></dt>
                            <dd className="text-danger"><ErrorMessage name="id" /></dd>

                            <dd>Enter name</dd>
                            <dt><Field type="text" name="name" /></dt>
                            <dd className="text-danger"><ErrorMessage name="name" /></dd>

                            <dd>Enter your mobile</dd>
                            <dt><Field type="text" name="mobile" /></dt>
                            <dd className="text-danger"><ErrorMessage name="mobile" /></dd>

                             <button className="btn btn-danger d-flex justify-content-center align-content-center w-100" type="submit">Submit</button>
                        </dl>
                       
                    </Form>
                )}
            </Formik>
        </div>
    );
}
