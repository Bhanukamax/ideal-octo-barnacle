import { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../../styles/form-controls.module.scss";

interface FormInputProps extends HTMLProps<HTMLInputElement> {}

const FormInput: React.FC<FormInputProps> = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[name as string];

  return (
    <>
      <input className={styles.input} {...props} {...register(name || "")} />
      <p className={styles.error}>{error?.message || <span>&nbsp;</span>}</p>
    </>
  );
};

export default FormInput;
