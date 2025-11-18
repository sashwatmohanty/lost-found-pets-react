import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCapcha } from "../../Hooks/use-capcha";
import * as yup from "yup";
import './loginvalida.css'
import { Navtwo } from "../../controled-componet/Nav-two";

export function Validloginpage() {
  let code = useCapcha();
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center m-2  ">
     
      {/* <header>
        {
          <Navtwo title="Loginpagee" Listiteam={['home','contact','emial']} btn={['bi bi-search']}/>
        }

      </header> */}
      { <Formik
      
        initialValues={{ name: "", phoneno: "", password: "" }}
        validationSchema={yup.object({
          name: yup.string().required("Name is required"),
          phoneno: yup.number().required("Phone number is required"),
          password: yup.number().required("Password is required"),
        })}
        onSubmit={(product) => {
          console.log(product);
        }}
      >
        {
             form =>  <Form className="card bg-light p-4  ">
          <h2 className="text-center mb-4 text-primary">LOGIN PAGE</h2>

          <dl>
            <dd>Enter Name</dd>
            <div className="d-flex justify-content-center">
              <Field name="name" className="form-control w-50" />
            </div>
            <dd className="text-danger text-center">
              <ErrorMessage name="name" />
            </dd>

            <dd>Enter Phone No</dd>
            <div className="d-flex justify-content-center">
              <Field name="phoneno" className="form-control w-50" />
            </div>
            <dd className="text-danger text-center">
              <ErrorMessage name="phoneno" />
            </dd>

            <dd>Ur Capcha</dd>
            <dt><button className="btn btn-primary m-lg-4">{code}</button></dt>

            <dd>Enter Password</dd>
            <div className="d-flex justify-content-center">
              <Field name="password" type="password" className="form-control w-50" />
            </div>
            <dd className="text-danger text-center">
              <ErrorMessage name="password" />
            </dd>
          </dl>

          <div className="d-flex justify-content-center">
            <button disabled={!form.isValid} className="btn btn-primary p-2 m-2" type="submit">
              Login
            </button>
            <button id="btn" className= {(form.dirty?'d-inline':'d-none')}>save</button>
           
        
          </div>
       
          <div className={(form.isValid)?'d-none':'d-block'}>
            <h2 className="text-warning">plz chek the all error</h2>

             {
            Object.keys(form.errors).map((properties)=><li className="error-box">{form.errors[properties]}</li>)
             }

          </div>
            
           
        </Form>

        }
     
      </Formik> }
    </div>
  );
}
////react hook from