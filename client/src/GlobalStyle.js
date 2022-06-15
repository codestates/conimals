import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #FFFFFC;
    box-sizing: border-box;
    scroll-behavior: smooth; 
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 57px;
    letter-spacing: .5px;
    line-height: 60px;
    margin: 0;
    display: inline;
    font-weight: 700;
  }

  h2 {
    font-size: 48px;
    letter-spacing: 0px;
    line-height: 50px;
    margin: 0;
    display: inline;
    font-weight: 500;
    /* @media screen and (max-width: 450px) {
      font-size: 2rem;
  } */
  }

  h3 {
    font-size: 34px;
    letter-spacing: .25px;
    line-height: 40px;
    margin: 0;
    display: inline;
    font-weight: 400;
    /* @media screen and (max-width: 450px) {
      font-size: 1.5rem;
  } */
  }

  h4 {
    font-size: 24px;
    letter-spacing: 0;
    line-height: 32px;
    margin: 0;
    display: inline;
    font-weight: 400;
  }
  
  h5 {
    font-size: 20px;
    letter-spacing: .25px;
    line-height: 32px;
    margin: 0;
    display: inline;
    font-weight: 400;
  }

  h6 {
    font-size: 15px;
    letter-spacing: .15px;
    line-height: 28px;
    margin: 0;
    display: inline;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
/* 수평 스크롤 막기 */
  html, body {
  max-width: 100%;
  overflow-x: hidden;
}

`;

export default GlobalStyle;
