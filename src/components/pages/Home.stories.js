import React from "react";

import {buildProductList} from "../../stories/builders/products";

import Home from "./Home";

export default {
    title:"Components/Pages/Home",
    component: Home
}

const products = buildProductList(4);

export const Usage = () => (
        <Home products={products}/>
);