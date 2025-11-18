import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function Resister() {
  return (
    <div className="container-fluid">
      <Formik
        initialValues={{ name: '', id: 0, email: '', mobile: 0, otp: 0 }}
        validationSchema={yup.object({
          name: yup.string().required("Name is required"),
          id: yup.number().required("ID is required"),
          email: yup.string().email("Invalid email").required("Email is required"),
          mobile: yup.number().required("Mobile is required"),
          otp: yup.number().required("OTP is required"),
        })}
        onSubmit={(product) => {
          console.log(product);
        }}
      >
        <Form>
          <dl className="card">
            <dd>Your name</dd>
            <div><Field name="name" /></div>
            <dd><ErrorMessage name="name" component="div" className="text-danger" /></dd>

            <dd>Your ID</dd>
            <div><Field name="id" /></div>
            <dd><ErrorMessage name="id" component="div" className="text-danger" /></dd>

            <dd>Your email</dd>
            <div><Field name="email" /></div>
            <dd><ErrorMessage name="email" component="div" className="text-danger" /></dd>

            <dd>Your mobile</dd>
            <div><Field name="mobile" /></div>
            <dd><ErrorMessage name="mobile" component="div" className="text-danger" /></dd>

            <dd>Your OTP</dd>
            <div><Field name="otp" /></div>
            <dd><ErrorMessage name="otp" component="div" className="text-danger" /></dd>
          </dl>

          <button className="btn btn-primary" type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
