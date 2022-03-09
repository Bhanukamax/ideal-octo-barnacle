import StepLabel from "../StepLabel/StepLabel";
import styles from "../../styles/step-form.module.scss";

interface StepDisplayProps {
  activeStep: number;
}

const StepDisplay: React.FC<StepDisplayProps> = ({ activeStep }) => {
  return (
    <ul className={styles.stepDisplay}>
      <StepLabel step={1} label="Name" isActivated={activeStep >= 1} />
      <StepLabel step={2} label="Email" isActivated={activeStep >= 2} />
      <StepLabel step={3} label="Confirmation" isActivated={activeStep >= 3} />
    </ul>
  );
};

export default StepDisplay;
