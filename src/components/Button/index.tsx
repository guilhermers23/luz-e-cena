import { JSX } from "react";
import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "default" | "icon";
};

const Button = ({ children, variant = "default", ...props }: ButtonProps) => {
    const botaoRender = (variant: string): JSX.Element => {
        if (variant === "icon") {
            return <S.BotaoIcon {...props}>{children}</S.BotaoIcon>;
        } else {
            return <S.BotaoDefault {...props}>{children}</S.BotaoDefault>
        }
    };

    return botaoRender(variant);
};

export default Button;
