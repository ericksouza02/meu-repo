import React from "react";
import {useProducts} from '../hooks/products'

import HomePage from '../components/pages/Home';

const Home = () => {
    const products = useProducts();
    
    return <HomePage products={products}/>
}

export default Home;