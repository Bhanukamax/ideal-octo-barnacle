import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import ButtonWrapper from "../Layouts/ButtonWrapper";
import FormControlWrapper from "../Layouts/FormControlWrapper";

interface StepOneViewProps {
  onSubmit: SubmitHandler<FieldValues>;
  canProceed: boolean;
}

const StepOneView: React.FC<StepOneViewProps> = ({ onSubmit, canProceed }) => {
  const { handleSubmit } = useFormContext();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControlWrapper>
          <FormInput name="firstName" placeholder="First Name" />
          <FormInput name="lastName" placeholder="Last Name" />
          <ButtonWrapper>
            <Button disabled={!canProceed}>Next</Button>
          </ButtonWrapper>
        </FormControlWrapper>
      </form>
    </>
  );
};

export default StepOneView;
