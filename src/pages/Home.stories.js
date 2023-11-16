import React from "react";
import Home from "./Home";
import ThemeProvider from "../styles/ThemeProvider";

export default {
    title:"Components/Pages/Home",
    component: Home
}

export const usage = () => (
    <ThemeProvider>
        <Home />
    </ThemeProvider>
)