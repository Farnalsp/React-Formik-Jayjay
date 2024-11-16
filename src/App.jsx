import { Formik, Form, Field } from "formik";
import "./App.css";

function App() {
  const validateEmail = (values) => {
    let errors = "";
    if (!values) {
      errors = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values)) {
      errors = "Invalid email address";
    }
    return errors;
  };
  const validateUsername = (values) => {
    let errors = "";
    if (!values) {
      errors = "Required";
    } else if (values.length < 5) {
      errors = "Username Minimal 5 Karakter";
    }
    return errors;
  };
  const ValidatePassword = (values) => {
    let errors = "";
    if (!values) {
      errors = "Required";
    } else if (values.length < 8) {
      errors = "Password Harus lebih Dari 8 Huruf";
      return errors;
    }
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>Form Validation</h1>
        <Formik initialValues={{ Username: "", email: "", password: "" }} onSubmit={(values) => alert(`${values.Username} | ${values.email} | ${values.password}`)}>
          {({ errors, touched }) => (
            <Form>
                <Field name="Username" className="form-input" placeholder="Username" validate={validateUsername} />
                {touched.Username && errors.Username && <div>{errors.Username}</div>}
                <Field name="email" className="form-input" placeholder="Email"  validate={validateEmail} />
                {touched.email && errors.email && <div>{errors.email}</div>}
                <Field name="password" className="form-input" placeholder="Password"  validate={ValidatePassword} />
                {touched.password && errors.password && <div>{errors.password}</div>}

                <button type="submit" className="form-button">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default App;

// BUAT SEBUAH FORM DENGAN NAMA, EMAIL, PASSWORD DENGAN
// - NAMA TIDAK BOLEH KOSONG DAN MINIMAL 5 HURUF MAKSIMAL 12 HURUF
// - EMAIL TIDAK BOLEH KOSONG
// - PASSWORD TIDAK BOLEH KOSONG DAN MINIMAL 8 HURUF MAKSIMAL 12 HURUF
