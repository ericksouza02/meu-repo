import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GridRoot from "../atoms/GridRoot";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";

const ImageContainer = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    
`

const Error = ({image, title, description}) => (
    <Section inverse>
        <GridRoot sm={2}>
            <div>
                <Heading>
                    <h1>{title}</h1>
                </Heading>
                <p>
                    {description}
                </p>
            </div>
            <div>
                <ImageContainer src={image}/>
            </div>
        </GridRoot>
    </Section>
)


Error.defaultProps = {
    image: undefined,
    titulo: "",
    description: ""
}

Error.propTypes = {
    image: PropTypes.string,
    titulo: PropTypes.string,
    description: PropTypes.string
}

export default Error;