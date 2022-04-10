import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('./fonts/nunito-v16-latin-regular.woff2') format('woff2'), 
        url('./fonts/nunito-v16-latin-regular.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('./fonts/nunito-v16-latin-600.woff2') format('woff2'), 
        url('./fonts/nunito-v16-latin-600.woff') format('woff'); 
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('./fonts/nunito-v16-latin-700.woff2') format('woff2'), 
        url('./fonts/nunito-v16-latin-700.woff') format('woff'); 
  }

  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.mainFont}, 'sans-serif';
  }

  body {
    font-size: 1.6rem;
    background-color: ${theme.colors.white};
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
