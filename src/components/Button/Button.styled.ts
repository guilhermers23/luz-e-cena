import styled from "styled-components";

export const Botao = styled.button`
    padding: var(--padding-s);
    font-family: var(--fonte-texto);
    font-size: var(--font-size-s);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    `

export const BotaoDefault = styled(Botao)`
    color: var(--branco);
    background-color: var(--cinza-escuro);
    `

export const BotaoIcon = styled(Botao)`
    background: none;
    font-size: var(--font-size-l);
    border: none;
    padding: 0.5rem;
    color: #333;
    `