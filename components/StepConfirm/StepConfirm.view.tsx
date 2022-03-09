import styles from "../../styles/confirm.module.scss";
import { ButtonClickEvent } from "../../types/formTypes";
import Button from "../Button/Button";
import ButtonWrapper from "../Layouts/ButtonWrapper";

interface StepConfirmProps {
  firstName: string;
  lastName: string;
  email: string;
  onSubmit: (e: ButtonClickEvent) => void;
  onPrev: (e: ButtonClickEvent) => void;
}

const DataItem = ({ label, value }: { label: string; value: string }) => (
  <>
    <div>{label}</div>
    <div>{value}</div>
  </>
);

const StepConfirmView: React.FC<StepConfirmProps> = ({
  firstName,
  lastName,
  email,
  onSubmit,
  onPrev,
}) => {
  return (
    <>
      <div className={styles.container}>
        <DataItem label="First Name" value={firstName} />
        <DataItem label="Last Name" value={lastName} />
        <DataItem label="Email" value={email} />
      </div>
      <ButtonWrapper>
        <Button onClick={onPrev} buttonType="secondary">
          Back
        </Button>
        <Button onClick={onSubmit}>Submit</Button>
      </ButtonWrapper>
    </>
  );
};

export default StepConfirmView;
