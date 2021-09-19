import React from "react";
//  import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import {
  FormValues,
  OtherProps,
  MyFormProps,
} from "./iConstructionLoanApplicationForm";
import "./ConstructionLoanApplicationForm.css";
// import {useHistory } from "react-router";
// import logo from "../Assets/blt-logo-web.svg"

// Would prefer to not use any here but just putting this together do get the routing for the concept file connected.
let history: any = null;

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;

  // history = useHistory()

  return (
    <>
      <div>
        {/* <img className="logo logo-form" src={logo} alt="logo"/> */}
        <h1 className="form-header">{message}</h1>
      </div>
      <Form className="form">
        <div className="form-fields-wrapper">
          <h5 className="label"> First Name </h5>
          <Field
            className="form-field"
            type="firstName"
            name="firstName"
            placeholder="First Name"
          />
          {touched.firstName && errors.firstName && (
            <div className="required-alert">{errors.firstName}</div>
          )}
          <h5 className="label"> Last Name </h5>
          <Field
            className="form-field"
            type="lastName"
            name="lastName"
            placeholder="Last Name"
          />
          {touched.lastName && errors.lastName && (
            <div className="required-alert">{errors.lastName}</div>
          )}
          <h5 className="label"> Email </h5>
          <Field
            className="form-field"
            type="email"
            name="email"
            placeholder="email"
          />
          {touched.email && errors.email && (
            <div className="required-alert">{errors.email}</div>
          )}

          {!errors.SubmitFailed ? (
            <></>
          ) : (
            <>
              <div>The submission failed. Please try again later </div>
            </>
          )}

          <button
            className="btn btn-primary btn-form"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

const LoanApplicationForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      firstName: "",
      lastName: "",
      isBuilder: "",
      SubmitFailed: true,
    };
  },

  // Sample Unit test

  // function ValidateEmail(email)
  // {
  //  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  //   {
  //     return (true)
  //   }
  //     throw new Error("You have entered an invalid email address!")
  //     return (false)
  // }

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    return errors;
  },

  handleSubmit: (values: FormValues) => {
    // addConstructionLoanForm(values);
    localStorage.setItem("name", values.firstName);
    // history.push("./company-info");
  },
})(InnerForm);

export const ConstructionLoanApplicationForm = () => (
  <div className="card">
    <LoanApplicationForm message="Construction Loan Application" />
  </div>
);
