import styled from "styled-components";

export const Rodape = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 252px;
    background-color: var(--preto);
`

export const RodapeInfos = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-around;
    gap: var(--gap-xl);
    height: 128px;
    color: var(--cinza-claro);
`

export const Logo = styled.div`
    width: 30%;
`

export const ListaInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);
    color: var(--cinza-claro);
`


export const Titulo = styled.h4`
    margin: 0;
    font-family: var(--fonte-titulo);
    font-weight: 400;
`

// .ancora {
//     color: var(--cinza-claro);
//     text-decoration: none;
// }

// .ancora:hover {
//     color: var(--branco);
//     transform: scale(1.1);
// }

// .icones {
//     display: flex;
//     gap: var(--gap-xs);
//     color: var(--azul);
//     font-size: var(--font-size-m);
// }

// .icone {
//     color: var(--azul);
// }

// .desenvolvimento {
//     padding: var(--padding-m) var(--padding-s);
//     background-color: var(--cinza-claro);
//     color: var(--preto);
//     text-align: center;
//     font-family: var(--fonte-texto);
//     font-weight: 400;
//     font-size: var(--font-size-m);
// }