import { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
  }

`;

const App = () => {
  return ( 
    <Header />
  );
}
 
export default App;
