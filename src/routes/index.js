import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./home";
import About from './about';
import Home from "../components/pages/Home";
import ProductDetail from "./servicos";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<About />}/>
        <Route path="/serviços" element={<ProductDetail/>}/>
    </Routes>
);

export default AppRoutes;