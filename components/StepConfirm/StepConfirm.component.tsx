import { useStoreActions, useStoreState } from "../../store/hooks";
import { ButtonClickEvent } from "../../types/formTypes";
import StepConfirmView from "./StepConfirm.view";

const StepConfirmComponent = () => {
  const { firstName, lastName, email } = useStoreState((state) => state.values);
  const { submitForm } = useStoreActions((store) => store);
  const { prevStep } = useStoreActions((store) => store);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    submitForm({
      firstName,
      lastName,
      email,
    });
  };

  const handlePrev = (e: ButtonClickEvent) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <StepConfirmView
        firstName={firstName}
        lastName={lastName}
        email={email}
        onSubmit={handleSubmit}
        onPrev={handlePrev}
      />
    </>
  );
};

export default StepConfirmComponent;
