import { FormEvent } from "react";
export enum FormStepEnum {
  NAMES = "NAMES",
  EMAIL = "EMAIL",
  CONFIRM = "CONFIRM",
}

export interface ConfirmProps {
  firstName: string;
  lastName: string;
  email: string;
}

export type FormElementEvent = FormEvent<HTMLFormElement>;
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;
