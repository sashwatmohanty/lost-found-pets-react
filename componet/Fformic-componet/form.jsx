import { Formik,Form,Field,ErrorMessage } from "formik"
// import * as  yup from "yup";



export function Frmmm()
{
    return(
        <div className="container fluid">
            <Formik initialValues={{id:0,name:'',mobile:''}} validationSchema={yup.object({
                id:yup.number().required('id is requerd'),
                 name:yup.string().required('name is requerd'),
                  mobile:yup.string().required('mobile is requerd')
            })} onSubmit={(product=>{
                console.log(product);
                
            })} >
                <Form>
                    <dl>
                        <dd>id number</dd>
                        <dt><Field type="number" name="id"/></dt>
                        <dd className="text-danger"><ErrorMessage name="id"></ErrorMessage></dd>
                          <dd>ur name</dd>
                        <dt><Field type="string" name="name"/></dt>
                         <dd className="text-danger"><ErrorMessage name="name"></ErrorMessage></dd>
                          <dd>ur mobile</dd>
                        <dt><Field type="string" name="mobile"/></dt>
                         <dd className="text-danger"><ErrorMessage name="mobile"></ErrorMessage></dd>
                    </dl>
                    <button className="btn btn-primary" type="submit">submit</button>
                </Form>
                
                

            </Formik>

        </div>
    )
}