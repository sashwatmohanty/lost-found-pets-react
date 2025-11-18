import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export function InstaLogin() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "350px", borderRadius: "12px" }}>
        <h3 className="text-center mb-3" style={{ fontFamily: "'Billabong', cursive" }}>
          Instagram
        </h3>

        <Formik
          initialValues={{ phonenumber: "", password: "" }}
          validationSchema={yup.object({
            phonenumber: yup
              .string()
              .required("Phone number, username, or email is required"),
            password: yup.string().required("Password is required"),
          })}
          onSubmit={(response) => {
            console.log(response);
          }}
        >
          <Form>
            <div className="mb-3">
              <Field
                name="phonenumber"
                className="form-control"
                placeholder="Phone number, username, or email"
              />
              <small className="text-danger">
                <ErrorMessage name="phonenumber" />
              </small>
            </div>

            <div className="mb-3">
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <small className="text-danger">
                <ErrorMessage name="password" />
              </small>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#3897f0", border: "none" }}
            >
              Log In
            </button>

            <div className="text-center my-3">OR</div>

            <div className="text-center">
              <a href="/" className="text-primary text-decoration-none">
                Forgot password?
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
