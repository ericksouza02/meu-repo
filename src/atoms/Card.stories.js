import React from "react";
import Card,{CardBody, CardMedia} from "./Card";
import Section from '../molecules/Section';
import CardImage from '../assets/car-img.jpg';


import Button from './Button';
import Heading from "./Heading";
import ThemeProvider from "../styles/ThemeProvider";
export default {
    title:"Components/Atoms/Card",
    component: Card, 
    subcomponents: {CardBody, CardMedia}
}


export const usage = () => (
    <ThemeProvider>
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
        <Button color='primary' variant='outlined'>Lista Completa de Serviços</Button> 
    </Section>
    </ThemeProvider>
)

export const withMedia = () => (
    <ThemeProvider>

    <Section inverse>
        <Card>
            <CardMedia image={CardImage}/>
            <CardBody>
                <Heading>
                    <h6>Título</h6>
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.</p>
            </CardBody>
            <Button 
                color='primary' 
                variant='link'>
                    Saiba Mais
            </Button>  
        </Card> 
        <Button color='primary' variant='outlined'>Lista Completa de Serviços</Button>
    </Section>
    </ThemeProvider>
)