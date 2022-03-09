import { createTypedHooks } from "easy-peasy";
import { FormStoreModel } from "./model";

const typedHooks = createTypedHooks<FormStoreModel>();

export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks;
