import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider } from 'styled-components' // Prover um tema
import GlobalStyle from './styles/global'

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}> 
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)


/**
 * //Todas as minhas rotas tem acesso ao contexto <AuthProvider>
 */