import styled from "styled-components";

export const Navegacao = styled.ul`
    display: flex;
    gap: var(--gap-xl);
    font-family: var(--fonte-texto);
    font-size: var(--font-size-m);
    font-weight: 400;

    list-style: none;
    padding-left: 0;

    li{
        list-style: none;
    }
    li a{
        display: block;
    }
    `
