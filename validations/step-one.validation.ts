import * as yup from "yup";
import { strings } from "../res";

const nameValidation = yup
  .string()
  .required(strings.requiredMsg)
  .min(2, (s) =>
    strings.min2required.replace("{n}", Number(s?.min).toString() || "")
  );

const stepOneValidationSchema = yup.object({
  firstName: nameValidation,
  lastName: nameValidation,
});

export default stepOneValidationSchema;
