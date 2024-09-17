import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme.color.base.background};
        color: ${(props) => props.theme.color.base["base-text"]};
    }

`;