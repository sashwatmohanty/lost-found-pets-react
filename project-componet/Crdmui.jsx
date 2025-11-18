
// import { Formik,Form,Field,ErrorMessage } from "formik"
// import * as yup from "yup"
//  import { TextField } from "@mui/material";
//  import Button from "@mui/material";
// export function CardMul()
// {
//     return(
//         <div>
//             <Formik initialValues={{name:'',email:'',password:0}}validationSchema={yup.object({
//                 name:yup.string().required('name is requerd'),
//                  email:yup.string().required('email is requerd'),
//                   password:yup.string().required('password is requerd')

//             })}onSubmit={(response)=>{
//                 console.log(response);
                
//             }} 


//         >  

//             <Form className=" card d-flex justify-content-center align-items-center ">

//                 <dl  className="card p-4 border rounded shadow m-5">
//                     <h2 className="text-danger">Login page</h2>
//                     <dt>enter ur name</dt>
//                     <Field name="name"></Field>
//                     <dd className="text-danger"><ErrorMessage name="name"></ErrorMessage></dd>

//                       <dt>enter ur email</dt>
//                     <Field name="email"></Field>
                  
//                     <dd className="text-danger"><ErrorMessage name="email"></ErrorMessage></dd>

//                       <dt>enter ur name</dt>
//                     <Field name="password"></Field>
//                     <dd className="text-danger"><ErrorMessage name="password"></ErrorMessage></dd>

//                     <button className="btn btn-danger w-100" type="submit">submit</button>


                




                    
//                 </dl>
//             </Form>           

//             </Formik>

//         </div>
//     )
// }