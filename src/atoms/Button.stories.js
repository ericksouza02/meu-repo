import React from "react";
import {action, actions} from '@storybook/addon-actions';
import Button from './Button';
import styled from "styled-components";

export default {
    title: 'Components/Atoms/Button',
    component: Button,
};

const events = actions({ onClick: 'clicked' });

const Toolbar = styled.div `
    & > * {
        margin-right: 8px;
    }
`;

const ButtonWrapper = (props) => (
    <div>
        <p>Enabled:</p>
        <Toolbar>
            <Button {...events}>Default</Button>
            <Button color='primary' {...events}>
                Primary
            </Button>
            <Button color='danger'>
                Danger
            </Button>
        </Toolbar>
        <p>As a link:</p>
        <Toolbar>
            <Button as='a' href='#' {...props} {...events}>Default</Button>
            
            <Button as='a' href='#' color='primary' {...events}>
                Primary
            </Button>
            
            <Button as='a' href='#' color='danger'>
                Danger
            </Button>
        </Toolbar>
        <p>Disabled: </p>
        <Toolbar>
            <Button {...events}>Default</Button>
            <Button color='primary' {...events}>
                Primary
            </Button>
            <Button color='danger'>
                Danger
            </Button>
        </Toolbar>
    </div>
);

export const usage = () => <ButtonWrapper/>