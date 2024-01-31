import React from "react";

import Error from "../components/pages/Error";
import CardImage from '../draws/about.svg';

const error404 = () => 
    <Error 
    image={CardImage} 
    title='Not Found Error' 
    description="Página não encontrada, tente novamente"
    />

export default error404;