import * as S from "./Fieldset.styled";

export interface FieldsetProps {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
};

const Fieldset = ({ children, variant = "primary" }: FieldsetProps) => {
    return (
        <S.inputWrapper variant={variant}>
            {children}
        </S.inputWrapper>
    )
};

export default Fieldset;
