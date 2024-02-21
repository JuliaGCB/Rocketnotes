import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider } from 'styled-components' // Prover um tema

import { Details } from './pages/Details';
import GlobalStyle from './styles/global'
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}> 
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
