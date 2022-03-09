import React from "react";
import styles from "../../styles/layout.module.scss";

interface Props {
  children: any;
}

const ButtonWrapper: React.FC<Props> = ({ children }) => {
  return <div className={styles.buttonWrapper}>{children}</div>;
};

export default ButtonWrapper;
