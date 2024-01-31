import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {Link} from 'react-router-dom';

import GridRoot from "../atoms/GridRoot";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Button from '../atoms/Button';

const ImageContainer = styled.img`
    text-align: right;

    width: 100%;
    height: auto;
    max-width: 400px;

    color: ${props => props.theme.colors.primary.main}
`

const ErrorContent = styled.div`
    h1 {
        margin-top: 0;
    }
`

const ErrorMessage = styled.p `
    margin: 24px 0;
    font-size: 1.2em;
    font-weight: bold;

`

const Error = ({image, title, description}) => (
    <Section inverse>
        <GridRoot sm={2}>
            <ErrorContent>
                <Heading>
                    <h1>{title}</h1>
                </Heading>
                <ErrorMessage>
                    {description}
                </ErrorMessage>
                <div>
                    <Button as={Link} to='/' color='primary'>
                        Voltar para página inicial
                    </Button>
                </div>
            </ErrorContent>
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