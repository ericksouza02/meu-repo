import React from "react";
import Card,{CardBody, CardMedia, CardMediaDescription} from "./Card";
import Section from '../molecules/Section';
import CardImage from '../assets/car-img.jpg';


import Button from './Button';
import Heading from "./Heading";
import ThemeProvider from "../styles/ThemeProvider";
export default {
    title:"Components/Atoms/Card",
    component: Card, 
    subcomponents: {CardBody, CardMedia, CardMediaDescription}
}


export const usage = () => (
    <Section inverse>
        <Card>
            <CardBody>
                <Heading>
                    <h6>Título</h6>
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.</p>
                <Button 
                color='primary' 
                variant='link'>
                    Saiba Mais
                </Button>               
            </CardBody>
        </Card>
      
    </Section>
)

export const withMedia = () => (
    <Section inverse>
        <Card>
            <CardMedia image={CardImage}>
                <CardMediaDescription>
                    <h4>Descrição da Imagem</h4>
                </CardMediaDescription>
            </CardMedia>
            <CardBody>
                <Heading>
                    <h6>Título</h6>
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.</p>
                <Button 
                    color='primary' 
                    variant='link'
                    
                    >
                        Saiba Mais
                    
                </Button>  
            </CardBody>
        </Card> 
        
    </Section>
)

export const onlyMedia = () => (
    <Section>
        <Card>
            <CardMedia image={CardImage}>
                <CardMediaDescription>
                    Ola eu sou um teste
                    <h4>Descrição da imagem</h4>
                </CardMediaDescription>
            </CardMedia>
        </Card>
    </Section>

)
