import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: #FFB433;
    box-sizing: border-box;
  } 
`;

export default GlobalStyle;
