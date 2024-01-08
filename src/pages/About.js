import React from "react";
import Hero from "../molecules/Hero"
import Heading from "../atoms/Heading";
import GridRoot from '../atoms/GridRoot';
import styled from "styled-components";
import CarImage from '../assets/car-img.jpg'
import Section from '../molecules/Section'
import AboutImage from '../draws/about.svg';
import Footer from '../organisms/Footer'
const Article = styled.div`
    li, p {
        color: #000;
    }
`

const Image = styled.img`
    width: 100%
`

const About = () => (
    <>
        <Hero image={CarImage}>
            <Heading><h1>Auto Escola Nardini</h1></Heading>
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
        </Section>
        <Footer />
    </>
)


About.defaultProps = {

}

About.propTypes = {

}

export default About;