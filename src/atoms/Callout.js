import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
const StyledCalloutBody = styled.div`
    
`
const CalloutBody = ({children}) => <StyledCallout>{children}</StyledCallout>
CalloutBody.defaultProps = {
children: undefined,
}
CalloutBody.propTypes = {
children: PropTypes.node,
}   

//#region CalloutBody
const StyledCallout = styled.div`
    background-color: #fff;
    color: #000;
    width: 100%;
    border: 1px solid ${props => props.theme.colors.border};
    border-left: 3px solid ${props => props.theme.colors.primary.main};
    border-radius: 4px;
    padding: 16px;
`


const Callout = ({children}) => <StyledCallout>{children}</StyledCallout>



Callout.defaultProps = {
    children: undefined,
}

Callout.propTypes = {
    children: PropTypes.node,
}

export default Callout;
//#endregion