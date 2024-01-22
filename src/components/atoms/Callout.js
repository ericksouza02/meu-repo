import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import {breakAt, BreakPointSizes} from '../../styles/BreakPointSize';
//#region CalloutBody
const StyledCalloutBody = styled.div`
    h6, p{
        margin: 0 0 8px;
    }

`
export const CalloutBody = ({children}) => <StyledCalloutBody>{children}</StyledCalloutBody>
CalloutBody.defaultProps = {
children: undefined,
}
CalloutBody.propTypes = {
children: PropTypes.node,
}  
//#endregion CalloutBody 

//#region CalloutActions
const StyledCalloutActions = styled.div`
    margin-top: 8px;
`
export const CalloutActions = ({children}) => <StyledCalloutActions>{children}</StyledCalloutActions>
CalloutActions.defaultProps = {
children: undefined,
}
CalloutActions.propTypes = {
children: PropTypes.node,
}

//#endregion

//#region CalloutMedia
const StyledCalloutMedia = styled.div`
display: none;
${breakAt(BreakPointSizes.md)}{
        display: flex;
    }
    svg{
        color: ${props => props.theme.colors.primary.main};    
        max-height: 200px;
    }
`
export const CalloutMedia = ({children}) => <StyledCalloutMedia>{children}</StyledCalloutMedia>
CalloutMedia.defaultProps = {
children: undefined,
}
CalloutMedia.propTypes = {
children: PropTypes.node,
}
//#endregion CalloutMedia

//#region Callout
const StyledCallout = styled.div`
        display: flex;
        background-color: #fff;
        align-items: center;
        color: #000;
        width: 100%;
        height: 100%;
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