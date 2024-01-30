import React from "react";
import {buildProductList} from '../../models/builders/products';

import ProductGrid from "./ProductGrid";

export default {
    title:"Components/Organisms/ProductGrid",
    component: ProductGrid
}

const products = buildProductList(6)

export const usage = () => <ProductGrid products={products}/>
