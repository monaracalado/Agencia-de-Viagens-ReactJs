import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        background-image: url('https://github.com/monaracalado/Agencia_de_Viagens_Recode/blob/master/img/img_background.jpg?raw=true');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar{
        padding: 5px 0px;
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background-color: rgba(225, 225, 225, 0.5);
    }
    ::-webkit-scrollbar-track{
        width: 15px;
        background-image: linear-gradient(45deg, #142344, #1d305c);
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 15px;
        background-color: rgba(225, 225, 225, 0.5);
    }
    ::selection {
        background: rgba(55, 95, 196, 0.7); /* WebKit/Blink Browsers */
    }
`;