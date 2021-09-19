import React from "react";
import { FormValues } from "./iConstructionLoanApplicationForm";

export const addConstructionLoanForm = (loanApp: FormValues) => {
  // In final concept function will send the form data to the database so it can mee accessed
  // by the success page to pull the users name
  // To be used if a dummie JSON API server MiniApp is used to persist data
  // Serve the JSON file on PORT 8088
  // If JSON server is used be sure to name the array holding the loan application data objects "loanApps"
  // Make sure to toggle
  // return fetch("http://localhost:8088/loanApps", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(loanApp),
  // });
  // The following can be taken out once data is being persisted
  // localStorage.setItem("name", loanApp.firstName);
  // Currently it pushes data to the FakeApi component
};
