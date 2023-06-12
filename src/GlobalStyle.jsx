import { createGlobalStyle } from 'styled-components';
// import rocket from './assets/images/rocket.png';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    min-width: 360px;
  }

  .titleText {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
