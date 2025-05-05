import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "default" | "icon";
};

const Button = ({ children, variant = "default", ...props }: ButtonProps) => {
    const classMap = {
        default: styles.default,
        icon: styles.icon
    };

    return (
        <button className={classNames(styles.botao, classMap[variant])} {...props}>{children}</button>
    )
};

export default Button;