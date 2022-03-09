import classNames from "classnames";
import styles from "../../styles/form-controls.module.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...props }) => {
  const _buttonType = buttonType || "primary";
  let className = styles.button;

  switch (_buttonType) {
    case "secondary":
      className = classNames(className, styles.buttonSecondary);
    default:
      break;
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
