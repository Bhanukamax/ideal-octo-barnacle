import classNames from "classnames";
import styles from "../../styles/step-form.module.scss";

interface StepLabelProps {
  step: number;
  isActivated: boolean;
  label: string;
}

const StepLabel: React.FC<StepLabelProps> = ({
  step: stepNumber,
  label: stepName,
  isActivated,
}) => {
  return (
    <li
      className={classNames(styles.stepLabel, {
        [styles.stepLabelActive]: isActivated,
      })}
    >
      <div className={styles.number}>{stepNumber}</div>
      <div className={styles.label}>{stepName}</div>
    </li>
  );
};

export default StepLabel;
