import { ConstructionLoanApplicationForm } from "./components/ConstructionLoanApplicationForm.tsx/ConstructionLoanApplicationForm";
import { LoanApplicationCompanyModule } from "./components/LoanAppliactionCompany/LoanApplicationCompany";
export default function Root(props) {
  return (
    <>
      <div>
        <ConstructionLoanApplicationForm />
      </div>
      <div>
        {/* <LoanApplicationCompanyModule /> */}
      </div>
     
    </>
  );
}
