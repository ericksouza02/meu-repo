import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";

import ThemeProvider from './styles/ThemeProvider';
import GlobalStyle from './styles/GlobalStyle';
import Routes from "./routes";

const Root = styled.div`
  color: #fff;
`

function App() {
  return (
    <Root>
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <Routes/>
        </Router>
      </ThemeProvider>
    </Root>
  );
}

export default App;
