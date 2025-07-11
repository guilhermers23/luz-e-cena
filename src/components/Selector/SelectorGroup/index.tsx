import React from "react";
import * as S from "./SelectorGroup.styled";

interface SelectorGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode;
};

const SelectorGroup = ({ icon, children, ...props }: SelectorGroupProps) => (
    <S.Container>
        {icon && <S.Icone>{icon}</S.Icone>}
        <S.Selector {...props}>{children}</S.Selector>
    </S.Container>
);

export default SelectorGroup;