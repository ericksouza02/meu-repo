import React from "react";
import PropTypes from "prop-types"
import Container from '../atoms/Container'
import styled,{css} from "styled-components";
import { breakAt,BreakPointSizes } from "../styles/BreakPointSize";

const Content = styled.div`
    padding: 40px 0;
    
    ${props => props.inverse && css`
        background-color: #f7f7f7;
    `}

    ${breakAt(BreakPointSizes.md)}{
        padding: 80px 0;
    }

    p {
        color: #000
    }

    h1, h2 {
        margin-top: 0;
    }
`

const Section = ({inverse, children}) => (
    <Content inverse={inverse}>
        <Container>
            {children}
        </Container>
    </Content>
);

Section.defaultProps = {
    children: undefined,
    inverse: false,
}

Section.propTypes = {
    children: PropTypes.node,
    inverse: PropTypes.bool
}

export default Section;