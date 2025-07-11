import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --preto: #1e1e1e;
    --cinza-escuro: #252530;
    --cinza-medio: #a6a6a6;
    --cinza-claro: #efefef;
    --branco: #ffffff;
    --verde: #c3ff95;
    --azul: #6f99ff;
    --azul-claro: #ccdbff;
    --amarelo: #f5d010;
    --coral: #ed7562;
    --vermelho: #f45866;

    --border-color: #a6a6a6;
    --box-shadow-card: 0px 4px 24px 0px #7b7b7b26;

    --fonte-texto: "Poppins", sans-serif;
    --fonte-titulo: "Dela Gothic One", sans-serif;

    --gap-xs: 0.5rem;
    --gap-s: 1rem;
    --gap-m: 1.5rem;
    --gap-l: 2rem;
    --gap-xl: 3.5rem;

    --padding-xs: 0.5rem;
    --padding-s: 1rem;
    --padding-m: 1.5rem;
    --padding-l: 2rem;
    --padding-xl: 3.5rem;
    --padding-xxl: 5rem;

    --font-size-xs: 0.75rem;
    --font-size-s: 1rem;
    --font-size-m: 1.25rem;
    --font-size-l: 1.5rem;
    --font-size-xl: 3rem;
    --font-size-xxl: 4.75rem;

    --max-width-block: 75rem;

    --margin-xs: 0.5rem;
    --margin-s: 1rem;
    --margin-m: 1.5rem;
    --margin-l: 2rem;
    --margin-xl: 3rem;
    --margin-xxl: 6rem;
}

body {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: var(--fonte-texto);
    font-size: var(--font-size-s);
    font-weight: 400;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const Error = styled.p`
    color: #e63946;
    font-size: var(--font-size-s);
    margin-top: var(--margin-s);  
`

export default GlobalStyles;
