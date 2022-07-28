import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 18px;
    }

    body{
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;