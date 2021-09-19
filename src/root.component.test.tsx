import { ExpansionPanelActions } from "@material-ui/core";
import { render } from "@testing-library/react";
import { iterator } from "core-js/library/es6/symbol";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});


// This test is making sure that the form properly capotured and set the value of firstName in local storage to a not null or undefined value
describe("Loan Appliaction Component", () => {
  it("should have a local storage value for firstName not be null or undefined", () => {
    expect(localStorage.getItem("firstName").toBe( !null || !undefined));
  });
});
