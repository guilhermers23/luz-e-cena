import styled from "styled-components";

export const Cabecalho = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    background-color: var(--branco);
    padding: var(--padding-s) 0;
    list-style: none;
    `

export const MenuItem = styled.li`
    list-style: none;
`

export const Icones = styled.div`
    display: flex;
    gap: var(--gap-xl);
    font-family: var(--fonte-texto);
    font-size: var(--font-size-m);
    font-weight: 400;
`
