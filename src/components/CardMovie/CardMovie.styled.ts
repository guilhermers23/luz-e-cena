import styled from "styled-components";

export const Card = styled.li`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 32%;
  max-width: 17em;
  width: 100%;
  height: 100%;
  box-shadow: var(--box-shadow-card);
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  padding: var(--padding-s);
  font-family: var(--fonte-texto);
  flex-grow: 1;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: var(--font-size-s);
  }
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
`;

export const SectionCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
