import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--margin-xl) 0;
  max-width: 1200px;
`;

export const Titulo = styled.h1`
  color: var(--preto);
  font-family: var(--fonte-titulo);
  font-size: var(--font-size-xl);
  align-self: flex-start;
`;
