import { ExpansionPanelActions } from "@material-ui/core";
import { render } from "@testing-library/react";
import { iterator } from "core-js/library/es6/symbol";
import { ConstructionLoanApplicationForm } from "./components/ConstructionLoanApplicationForm.tsx/ConstructionLoanApplicationForm";
import Root from "./root.component";

// Currently this test checks to see if the Construction Loan Application is rendering in the DOM.

describe("Loan Appliaction Component", () => {
  // it("should have a local storage value for firstName not be null", () => {
  //   const firstName = localStorage.getItem("firstName");
  //   expect(firstName).toBe(!null);
  // });
  it("should be in the document", () => {
    const { getByText } = render(<ConstructionLoanApplicationForm />);
    expect(getByText(/Construction Loan Application/i)).toBeInTheDocument();
  });
});
