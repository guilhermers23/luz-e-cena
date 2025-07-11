import React from "react";
import * as S from "./InputText.styled";

const InputText = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <S.Input {...props} />
);

export default InputText;
