import React from "react";
import Footer from "./Footer";
import ThemeProvider from "../styles/ThemeProvider";
export default {
    title:"Components/Organisms/Footer",
    component: Footer
}
export const usage = () => (
    <ThemeProvider>
    <Footer/>
    </ThemeProvider>
)