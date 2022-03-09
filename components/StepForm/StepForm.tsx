import { useStoreState } from "../../store/hooks";
import styles from "../../styles/step-form.module.scss";
import { FormStepEnum } from "../../types/formTypes";
import StepConfirmComponent from "../StepConfirm/StepConfirm.component";
import StepDisplay from "../StepDisplay/StepDisplay";
import StepOneComponent from "../StepOne/StepOne.component";
import StepTwoComponent from "../StepTwo/StepTwo.component";

const StepForm = () => {
  const {
    formStep: step,
    stepLabel,
    stepNumber,
  } = useStoreState((state) => state);

  const renderStep = () => {
    switch (step) {
      case FormStepEnum.NAMES:
        return <StepOneComponent />;
      case FormStepEnum.EMAIL:
        return <StepTwoComponent />;
      case FormStepEnum.CONFIRM:
        return <StepConfirmComponent />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.form}>
      <h1>Wizard</h1>
      <StepDisplay activeStep={stepNumber} />

      <h2>{stepLabel}</h2>

      {renderStep()}
    </div>
  );
};

export default StepForm;
