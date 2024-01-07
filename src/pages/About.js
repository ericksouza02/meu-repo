import React from "react";
import Hero from "../molecules/Hero"
import Heading from "../atoms/Heading";
import GridRoot from '../atoms/GridRoot';
import styled from "styled-components";
import CarImage from '../assets/car-img.jpg'
import Section from '../molecules/Section'

const Article = styled.div`
    li, p {
        color: #000;
    }
`

const About = () => (
    <>
        <Hero image={CarImage}>
            <Heading><h1>Auto Escola Nardini</h1></Heading>
        </Hero>
        <Section>
        <GridRoot md={2}>
            <Article>
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
                    <p>lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor lorem ispur dolor</p>

                </div>
            </Article>
        </GridRoot>
        </Section>
    </>
)


About.defaultProps = {

}

About.propTypes = {

}

export default About;