export interface CompanyInfo {
	companyName : string;
	fein : number | undefined ;
	SubmitFailed : boolean;
}

export interface OtherProps {
	message: string;
      }
      
      export interface MyFormProps {
	initialEmail?: string;
	message: string;
      }