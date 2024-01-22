import React from "react";
import {Link} from 'react-router-dom';
import AvatarImage from '../../assets/car-img.jpg'; 
import CarImage from '../../assets/car-img.jpg';
import AboutImage from '../../draws/about.svg';

import Hero from "../molecules/Hero"
import Heading from "../atoms/Heading";
import GridRoot from '../atoms/GridRoot';
import styled from "styled-components";
import Section from '../molecules/Section'
import Footer from '../organisms/Footer';
import BreadCrumb from '../atoms/BreadCrumbge';
import Card,{CardMedia, CardMediaDescription} from '../atoms/Card'

const Image = styled.img`
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${props => props.theme.colors.primary.main}
    max-height: 200px;
`

const instructors = [
    { id: 1, name: 'Thor Ragnarok', avatar: AvatarImage},
    { id: 2, name: 'Hulk Ultimate', avatar: AvatarImage},
    { id: 3, name: 'Iron Man', avatar: AvatarImage},
    { id: 4, name: 'Spider Man', avatar: AvatarImage},
]

const About = () => (

    <>
        <Hero image={CarImage}>
            <Heading><h1>Auto Escola Nardini</h1></Heading>
            <BreadCrumb items={[
                {label: "Início", link: "/"}, {label: "Sobre"}
            ]}/>
        </Hero>
        <Section>
        <GridRoot md={2}>
                <div>
                    <p>lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor</p>
                    <p>lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor</p>
                    <p>lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor</p>
                    <ul>
                        <li>lorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolor</li>
                        <li>lorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolor</li>
                        <li>lorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolor</li>
                        <li>lorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolor</li>
                        <li>lorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolorlorem ispur dolor</li>
                    </ul>
                </div>
                <div>
                    <p>lorem ispur dolor lorem .ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor</p>
                    <center>

                        <Image
                        src={AboutImage} 
                        alt="Prédio com Carros"
                        />
                    </center>
                </div>
        </GridRoot>
        </Section>
        <Section inverse>
            <GridRoot md={2}>
                <div>
                    <h1>Missão</h1>
                    <p>lorem ispur dolor emate odi aieu laou lanyyu odiau lorem ispudr dolor ikaj kjd iak mnaoi uida i ijiduai kjkd lorem ispudr dolor ikaj kjd iak mnaoi uida i ijiduai kjkd</p>
                </div>
                <div>
                    <h1>Visão</h1>
                    <p>lorem ispudr dolor ikaj kjd iak mnaoi uida i ijiduai kjkd lorem ispudr dolor ikaj kjd iak mnaoi uida i ijiduai kjkd lorem ispudr dolor ikaj kjd iak mnaoi uida i ijiduai kjkd</p>
                </div>
            </GridRoot>
        </Section>
        <Section>
            <Heading>
                <h2>Conheça nossos professores</h2>
            </Heading>
            <GridRoot md={1} lg={2}>
                {instructors.map(instructor => (
                    <Card key={instructor.id}>
                        <CardMedia image={instructor.avatar}>
                            <CardMediaDescription>
                                <h5>
                                    {instructor.name}
                                </h5>
                            </CardMediaDescription>
                        </CardMedia>
                    </Card> 
                ))}
            </GridRoot>
        </Section>
        <Footer />
    </>
);

export default About;