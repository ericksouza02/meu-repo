import styled from "styled-components";
import ThemeProvider from './styles/ThemeProvider';
import GlobalStyle from './styles/GlobalStyle';
import About from './pages/About';
import Home from "./pages/Home";
import Product from './pages/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from "./pages/ProductDetail";

const Root = styled.div`
  color: #fff;
`

function App() {
  return (
    <Root>
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/serviços" element={<ProductDetail/>}/>
          </Routes>
          <Home/>
        </Router>
      </ThemeProvider>
    </Root>
  );
}

export default App;
