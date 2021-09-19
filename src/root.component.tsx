import { ConstructionLoanApplicationForm } from "./components/ConstructionLoanApplicationForm.tsx/ConstructionLoanApplicationForm";

export default function Root(props) {
  return (
    <>
      <ConstructionLoanApplicationForm />
      <section>{props.name} is mounted!</section>
    </>
  );
}
