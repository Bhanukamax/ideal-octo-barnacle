import React from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { ButtonClickEvent } from "../../types/formTypes";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import ButtonWrapper from "../Layouts/ButtonWrapper";
import FormControlWrapper from "../Layouts/FormControlWrapper";

interface StepTwoViewProps {
  onSubmit: SubmitHandler<FieldValues>;
  onPrev: (e: ButtonClickEvent) => void;
  canProceed: boolean;
}

const StepTwoView: React.FC<StepTwoViewProps> = ({
  onSubmit,
  onPrev,
  canProceed,
}) => {
  const { handleSubmit } = useFormContext();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControlWrapper>
          <FormInput name="email" placeholder="Email" />
          <FormInput name="confirmEmail" placeholder="Confirm Email" />
          <ButtonWrapper>
            <Button onClick={onPrev} buttonType="secondary" type="reset">
              Back
            </Button>
            <Button type="submit" disabled={!canProceed}>
              Next
            </Button>
          </ButtonWrapper>
        </FormControlWrapper>
      </form>
    </>
  );
};

export default StepTwoView;
