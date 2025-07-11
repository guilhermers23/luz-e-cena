import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: inline-block;
    `

export const Icone = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--font-size-l);
    `

export const Selector = styled.select`
    width: 312px;
    height: 51px;
    padding: 16px;
    appearance: none;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    font-family: var(--fonte-texto);
    background-color: var(--cinza-claro);
    color: var(--preto);
    `
