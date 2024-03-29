import React from "react";
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom';

const Root = styled.div`
    padding: 16px 0;
    color: #000;
`;

const Item = styled.span`
    display: inline-block;
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    text-decoration: none;

    &:hover {
        ${(props) => props.isClickLabel && css`
        cursor: pointer;
        color: ${props => props.theme.colors.primary.main};
        `}
    }

    &:not(:first-child) {
        &::before {
            content: ">";
            color: ${props => props.theme.colors.primary.main};
            padding: 0 16px;
        }
    }
        `;
        
const BreadCrumb = ({ items }) => (
    
    <Root>
        {items.map((item) =>  (
            <Item key={item.label} as={item.link && Link} to={item.link} isClickLabel={!!item.link}>
                {item.label}
            </Item>
        ))}
    </Root>
)


BreadCrumb.defaultProps = {
 items: [],
}
BreadCrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            link: PropTypes.string,
        })
    ),
}

export default BreadCrumb;