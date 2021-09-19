import { ExpansionPanelActions } from "@material-ui/core";
import { render } from "@testing-library/react";
import { iterator } from "core-js/library/es6/symbol";
import { ConstructionLoanApplicationForm } from "./components/ConstructionLoanApplicationForm.tsx/ConstructionLoanApplicationForm";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});

// This test is making sure that the form properly capotured and set the value of firstName in local storage to a not null or undefined value
// Currently this test
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
