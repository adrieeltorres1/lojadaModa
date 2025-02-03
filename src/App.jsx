import { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
    font-family: "Montserrat", serif;
  }

`;

const App = () => {
  return ( 
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}
 
export default App;
