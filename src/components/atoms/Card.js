import React from "react";
import styled, {css} from "styled-components";
import PropTypes from "prop-types"

//#region CardBody
const StyledBody = styled.div`
    padding: 16px;
    h6{
        margin-top: 0;
    }
`

export const CardBody = ({children}) =>   <StyledBody>{children}</StyledBody>


CardBody.defaultProps = {
    children: undefined,
}   

CardBody.propTypes = {
    children: PropTypes.node,
}
//#endregion

//#region CardMedia
const StyledMedia = styled.div`
    margin: 0;
    padding: 0;
    background-image: url(${props=> props.image});
    background-position: center bottom;
    background-size: cover;
    min-height: 270px;
`
export const CardMedia = ({image, children}) => (
    <StyledMedia image={image}>
        {children}
    </StyledMedia>
)

CardMedia.defaultProps = {
    image: undefined,
    children: undefined,
}   

CardMedia.propTypes = {
    image: PropTypes.node,
    children: PropTypes.node
}
//#endregion

//#region CardDescription
const StyledMediaDescription = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 8px 16px;
    color: #fff;
    align-self: flex-end;
    flex: 1;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        margin: 0;
    }
`

export const CardMediaDescription = ({children}) => <StyledMediaDescription>{children}</StyledMediaDescription>

CardMediaDescription.defaultProps = {
    children: undefined
}

CardMediaDescription.propTypes = {
    children: PropTypes.node
}
//#endregion

//#region Card
const StyledCard = styled.div`
    padding: 0;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    width: 500px;
    margin: auto;
`

const Card = ({children}) =><StyledCard>{children}</StyledCard>
;

Card.defaultProps = {
    image: '',
    title: 'Teste de Título',
    children: ''
}   

Card.propTypes = {
    image: PropTypes.node,
    title: PropTypes.string,
    children: PropTypes.node,
}

//#endregion

;

export default Card;