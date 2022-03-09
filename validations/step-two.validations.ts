import * as yup from "yup";
import { strings } from "../res";

const email = yup
  .string()
  .email("Must be a valid email address")
  .required(strings.requiredMsg);

const confirmEmail = yup
  .string()
  .oneOf([yup.ref("email")], "Your emails don't match")
  .required(strings.requiredMsg);

const stepTwoValidationSchema = yup.object({
  email,
  confirmEmail,
});

export default stepTwoValidationSchema;
