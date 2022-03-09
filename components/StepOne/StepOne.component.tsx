import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import useInitiateStepForm from "../../hooks/use-initiate-step-form";
import { useStoreActions, useStoreState } from "../../store/hooks";
import stepOneValidationSchema from "../../validations/step-one.validation";
import StepOneView from "./StepOne.view";

type FormInputs = {
  firstName: string;
  lastName: string;
};

const StepOneComponent: React.FC = () => {
  const { nextStep, updateValues } = useStoreActions((store) => store);

  const methods = useInitiateStepForm<FormInputs>(stepOneValidationSchema, {});

  const { values } = useStoreState((store) => store);

  useEffect(() => {
    methods.reset({ ...values });
  }, [values, methods]);

  const handleSubmit: SubmitHandler<FieldValues> = (values) => {
    updateValues(values);
    nextStep();
  };

  return (
    <>
      <FormProvider {...methods}>
        <StepOneView
          onSubmit={handleSubmit}
          canProceed={methods.formState.isValid}
        />
      </FormProvider>
    </>
  );
};

export default StepOneComponent;
