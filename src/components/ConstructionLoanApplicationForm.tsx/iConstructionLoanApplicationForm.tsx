export interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  // Company: string;
  // AddressStreetNumber: number | null;
  // AddressStreetName: string;
  // City: string;
  // State: string;
  // ZipCode: number | null;
  SubmitFailed: boolean;
}

export interface OtherProps {
  message: string;
}

export interface MyFormProps {
  initialEmail?: string;
  message: string;
}
