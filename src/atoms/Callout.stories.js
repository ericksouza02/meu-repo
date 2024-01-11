import React from "react";

import Callout, {CalloutBody, CalloutActions, CalloutMedia} from "./Callout";
import Button from '../atoms/Button'
import About from '../draws/about.svg'
import styled from "styled-components";

export default {
    title: "Components/Atoms/Callout",
    component: Callout,
    subcomponents: {CalloutBody, CalloutActions, CalloutMedia}
}

const Image = styled.img`
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.primary.main}
`

export const usage = () => 
<Callout>
    <CalloutBody>
        <h2>Faça sua matrícula agora mesmo</h2>
        <p>lorem ispum dolor sit amet consectetur adipoisin vel perferendis et a, porro atque officia li corporis ovaeti delecctus aut repelllendus libero? quasi, consequeirj</p>
        <CalloutActions>
            <Button color='primary'>Matrícula</Button>
        </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
        <Image src={About}/>
    </CalloutMedia>
</Callout>





