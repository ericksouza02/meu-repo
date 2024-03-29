import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    body.sb-show-main.sb-main-padded{
    padding: 0;
    }

    html{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 100%;
        
        box-sizing: border-box;
    }

    a, button {
        font-family: 'Poppins', sans-serif;
    }

    *, *::before, *:after {
        box-sizing: inherit;
    }

    body {
        color: #fff;
        margin: 0;
        padding: 0;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5,
    h6 {
        line-height: 1.3;
        font-weight: 700;
        letter-spacing: 2px;
    }
`

export default GlobalStyle;
