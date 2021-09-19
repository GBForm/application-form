import { ConstructionLoanApplicationForm } from "./components/ConstructionLoanApplicationForm.tsx/ConstructionLoanApplicationForm";
import { LoanApplicationCompanyModule } from "./components/LoanAppliactionCompany/LoanApplicationCompany";
export default function Root(props) {
  return (
    <>
      <h5>MiniApp1</h5>
      <div>
        <ConstructionLoanApplicationForm />
      </div>
      <div>
        <LoanApplicationCompanyModule />
      </div>
      <section>{props.name} is mounted!</section>
    </>
  );
}
