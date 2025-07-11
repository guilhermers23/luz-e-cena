import React from "react";
import * as S from "./InputText.styled";

const InputText = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <S.Input {...props} />
};

export default InputText;
