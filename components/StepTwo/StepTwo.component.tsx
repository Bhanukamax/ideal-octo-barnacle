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
import stepTwoValidationSchema from "../../validations/step-two.validations";
import StepTwoView from "./StepTwo.view";

type FormInputs = {
  email: string;
  confirmEmail: string;
};

const StepTwoComponent: React.FC = () => {
  const { nextStep, prevStep, updateValues } = useStoreActions(
    (store) => store
  );

  const methods = useInitiateStepForm<FormInputs>(stepTwoValidationSchema, {});

  const { values } = useStoreState((store) => store);

  useEffect(() => {
    methods.reset({ ...values });
  }, [values, methods]);

  const handleSubmit: SubmitHandler<FieldValues> = (values) => {
    updateValues(values);
    nextStep();
  };

  const handlePrev = () => {
    const [email, confirmEmail] = methods.getValues(["email", "confirmEmail"]);
    updateValues({ email, confirmEmail });
    prevStep();
  };

  return (
    <>
      <FormProvider {...methods}>
        <StepTwoView
          onSubmit={handleSubmit}
          onPrev={handlePrev}
          canProceed={methods.formState.isValid}
        />
      </FormProvider>
    </>
  );
};

export default StepTwoComponent;
