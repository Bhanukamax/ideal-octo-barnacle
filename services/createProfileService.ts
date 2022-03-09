import { FormValuesModel } from "../store/model";

export const createProfileService = async (values: FormValuesModel) => {
  const endPoint = "/api/profiles";

  const options = {
    method: "POST",
    body: JSON.stringify(values),
  };

  return await fetch(endPoint, options);
};
