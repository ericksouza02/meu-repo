import React from "react";

import CardImage from '../../draws/about.svg';

import Error from "./Error";

export default {
    title: "Components/Pages/Error",
    component: Error
};  

export const usage = () =>    
     <Error 
     image={CardImage} 
     title='Not Found Error' 
     description="Página não encontrada, tente novamente"
     />
