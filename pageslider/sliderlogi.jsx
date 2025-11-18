import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export function SliderLogin() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "320px", borderRadius: "12px" }}>
        <h4 className="text-center mb-3">Login</h4>
        <Formik
          initialValues={{ name: "", id: "", password: "", email: "" }}
          validationSchema={yup.object({
            name: yup.string().required("Name is required"),
            id: yup.string().required("ID is required"),
            password: yup.string().required("Password is required"),
            email: yup.string().email("Invalid email").required("Email is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="mb-2">
              <Field name="name" placeholder="Name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger small" />
            </div>

            <div className="mb-2">
              <Field name="id" placeholder="ID" className="form-control" />
              <ErrorMessage name="id" component="div" className="text-danger small" />
            </div>

            <div className="mb-2">
              <Field name="password" type="password" placeholder="Password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <Field name="email" placeholder="Email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger small" />
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
