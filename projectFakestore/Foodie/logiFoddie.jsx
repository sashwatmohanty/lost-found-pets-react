import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export function LoginFoddie() {
  const [cookie, setCookie] = useCookies(["name"]);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={yup.object({
          name: yup.string().required("Name is required"),
          password: yup.string().required("Password is required"),
          email: yup.string().email("Invalid email").required("Email is required"),
        })}
        onSubmit={(values) => {
          // Save cookie with user name
          setCookie("name", values.name, { path: "/" });
          // Navigate to menu
          navigate("/menu");
        }}
      >
        {() => (
          <Form className="card p-4 shadow-lg rounded-3" style={{ width: "350px" }}>
            <h3 className="text-center mb-4 text-danger">🍴 Foodie Login</h3>

            {/* Name Field */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger small mt-1" />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger small mt-1" />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-danger w-100">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
