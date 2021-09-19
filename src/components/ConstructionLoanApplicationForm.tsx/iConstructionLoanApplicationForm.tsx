export interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  SubmitFailed: boolean;
}

export interface OtherProps {
  message: string;
}

export interface MyFormProps {
  initialEmail?: string;
  message: string;
}
