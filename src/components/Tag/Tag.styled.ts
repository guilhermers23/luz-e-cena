import { PropsTag } from "./index";
import styled from "styled-components";

const checkBackgroundColor = (props: PropsTag): string => {
  if (props.value === "2D") {
    return "var(--cinza-claro)";
  } else if (props.value === "3D") {
    return "var(--cinza-medio)";
  } else if (props.value === "10 anos") {
    return "var(--azul)";
  } else if (props.value === "12 anos") {
    return "var(--amarelo)";
  } else if (props.value === "14 anos") {
    return "var(--coral)";
  } else if (props.value === "16 anos") {
    return "var(--vermelho)";
  } else if (props.value === "18 anos") {
    return "#000";
  } else {
    return "var(--verde)";
  }
};

export const Tag = styled.span<PropsTag>`
  padding: var(--padding-xs) var(--padding-s);
  border-radius: 0.5rem;
  font-size: var(--font-size-s);
  font-weight: 400;
  text-align: center;
  font-family: var(--fonte-texto);
  color: var(--preto);
  background-color: ${(props) => checkBackgroundColor(props)};
`;
