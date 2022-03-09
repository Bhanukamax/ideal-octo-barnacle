import styles from "../../styles/layout.module.scss";

interface Props {
  children: any;
}

const FormControlWrapper: React.FC<Props> = ({ children }) => {
  return <div className={styles.formControlWrapper}>{children}</div>;
};

export default FormControlWrapper;
