import styled from "styled-components";
import { FieldsetProps } from ".";

export const inputWrapper = styled.fieldset<FieldsetProps>`
  width: 40vw;
  height: 3rem;
  padding: var(--padding-xs) var(--padding-s);
  border-radius: 8px;
  display: flex;
  align-items: center;

  border: 3px solid
    ${(props) =>
      props.variant === "primary"
        ? "var(--cinza-escuro)"
        : "var(--border-color)"};

  background-color: ${(props) =>
    props.variant === "primary" ? "var(--cor-de-fundo-newsletter)" : "none"};

  &::placeholder {
    color: var(--preto);
    font-family: var(--fonte-texto);
    font-size: var(--font-size-m);
  }
`;
