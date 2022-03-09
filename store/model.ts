import { Action, Computed, Thunk } from "easy-peasy";
import { FormStepEnum } from "../types/formTypes";

export interface FormValuesModel {
  firstName: string;
  lastName: string;
  email: string;
}

export interface FormStoreModel {
  formStep: FormStepEnum;
  values: FormValuesModel;
  stepNumber: Computed<FormStoreModel, number>;
  stepLabel: Computed<FormStoreModel, string>;
  nextStep: Action<FormStoreModel>;
  prevStep: Action<FormStoreModel>;
  resetStore: Action<FormStoreModel>;
  updateValues: Action<FormStoreModel, {}>;
  submitForm: Thunk<FormStoreModel, FormValuesModel>;
}
