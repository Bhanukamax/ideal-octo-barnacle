import { action, computed, createStore, thunk } from "easy-peasy";
import { createProfileService } from "../services/createProfileService";
import { FormStepEnum } from "../types/formTypes";
import { FormStoreModel } from "./model";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const store = createStore<FormStoreModel>({
  formStep: FormStepEnum.NAMES,
  values: initialValues,
  // Computed
  stepLabel: computed((state) => {
    switch (state.formStep) {
      case FormStepEnum.NAMES:
        return "Name";
      case FormStepEnum.EMAIL:
        return "Email";
      case FormStepEnum.CONFIRM:
        return "Confirmation";
      default:
        return "";
    }
  }),
  stepNumber: computed((state) => {
    switch (state.formStep) {
      case FormStepEnum.NAMES:
        return 1;
      case FormStepEnum.EMAIL:
        return 2;
      case FormStepEnum.CONFIRM:
        return 3;
      default:
        return 0;
    }
  }),
  // Actions
  nextStep: action((state) => {
    switch (state.formStep) {
      case FormStepEnum.NAMES:
        state.formStep = FormStepEnum.EMAIL;
        break;
      case FormStepEnum.EMAIL:
        state.formStep = FormStepEnum.CONFIRM;
        break;
      default:
        break;
    }
  }),
  prevStep: action((state) => {
    switch (state.formStep) {
      case FormStepEnum.CONFIRM:
        state.formStep = FormStepEnum.EMAIL;
        break;
      case FormStepEnum.EMAIL:
        state.formStep = FormStepEnum.NAMES;
        break;
      default:
        break;
    }
  }),
  resetStore: action((state) => {
    state.formStep = FormStepEnum.NAMES;
    state.values = initialValues;
  }),
  updateValues: action((state, payload) => {
    const newValues = {
      ...state.values,
      ...payload,
    };
    state.values = newValues;
  }),
  // Thunks
  submitForm: thunk(async (action, payload) => {
    const res = createProfileService(payload);
    if ((await res).status !== 201) {
      return;
    }
    action.resetStore();
  }),
});

export default store;
