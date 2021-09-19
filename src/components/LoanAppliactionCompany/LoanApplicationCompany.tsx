import React from "react";
//  import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { CompanyInfo, OtherProps, MyFormProps } from "./iLoanApplication";
import "./LoanApplicationCompany.css";
// import {useHistory } from "react-router";
// import logo from "/Users/samcarbine/workspace/get-built-form/src/components/Assets/blt-logo-web.svg"

// Would prefer to not use any here but just putting this together do get the routing for the concept file connected.
let history: any = null;

const InnerForm = (props: OtherProps & FormikProps<CompanyInfo>) => {
  const { touched, errors, isSubmitting, message } = props;

  // history = useHistory();

  return (
    <>
      <div>
        {/* <img className="logo logo-form" src={logo} alt="logo"/> */}
        <h1 className="form-header">{message}</h1>
      </div>
      <Form className="form">
        <div className="form-fields-wrapper">
          <h5 className="label"> Company Name </h5>
          <Field className="form-field" type="companyName" name="companyName" />
          {touched.companyName && errors.companyName && (
            <div className="required-alert">{errors.companyName}</div>
          )}
          <h5 className="label"> FEIN Number </h5>
          <Field
            className="form-field"
            type="fein"
            name="fein"
            placeholder=""
          />
          {touched.fein && errors.fein && (
            <div className="required-alert">{errors.fein}</div>
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

const LoanApplicationCompany = withFormik<MyFormProps, CompanyInfo>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      companyName: "",
      fein: undefined,
      SubmitFailed: true,
    };
  },
  // Sample Unit test

  // if(FEIN.length !== 9){
  //   throw new Error("
  //   Please enter a vail FEIN number. FEIN numbers must be 9 digits long.");
  // }
  // if(companyName.length >= 55){
  //   throw new Error("
  //   Your company name may only be 55 characters long. Please re-enter your company name");
  // }

  validate: (values: CompanyInfo) => {
    let errors: FormikErrors<CompanyInfo> = {};
    if (!values.companyName) {
      errors.companyName = "Required";
    }
    if (!values.fein) {
      errors.fein = "Required";
    }
    return errors;
  },

  handleSubmit: (values: CompanyInfo) => {
    // history.push("./success");
  },
})(InnerForm);

export const LoanApplicationCompanyModule = () => (
  <div className="card">
    <LoanApplicationCompany message="Construction Loan Application" />
  </div>
);
