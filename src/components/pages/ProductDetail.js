import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {FaIdCard, FaHome, FaScroll} from 'react-icons/fa'
import HeroImage from '../../assets/car-img.jpg';
import About from '../../draws/about.svg'

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import GridRoot from '../atoms/GridRoot';
import Button from '../atoms/Button';
import Footer from "../organisms/Footer";
import Section from '../molecules/Section';
import Callout, {CalloutMedia,CalloutBody,CalloutActions} from '../atoms/Callout'
import BreadCrumb from '../atoms/BreadCrumbge';

const Image = styled.img`
    width: 100%;
       height: 100%;
    color: ${props => props.theme.colors.primary.main}
`

const PinnedList = styled.ul`
    list-style: none;
    padding-left: 0;
    color: #000;
    margin-left: 0;
`

const PinnedItem = styled.li`
    display: inline-block;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 16px 16px;
    margin-left: 0;

    svg {
        margin-right: 8px;
        vertical-align: middle;

    }
    `
const ProductDetail = () => {
    
   return(
   <>
        <Hero image={HeroImage}>
            <Heading>
                <h1>Nome do Serviço</h1>
            </Heading>
            <BreadCrumb 
                items={[
                    {label: "Início", link:"/"},
                    {label: "Serviços", },
                    {label: "Nome do Serviço"}
                    ]}
            />
        </Hero>
        <Section>
            <p>
                lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
                lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
                lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
            </p>
            <p>
            lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
                lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
                lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
            </p>
            <p>
            lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
                lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
                lorem ispudor odlor kjai lno lorem ispudor odlor kjai lnov lorem ispudor odlor kjai lno lorem ispudor odlor kjai lno
            </p>
            <h3 style={{color: "#000"}}>Documentos Necessários</h3>
            <PinnedList>
                <PinnedItem>
                    <FaIdCard/>
                    RG</PinnedItem>
                <PinnedItem>
                    <FaIdCard/>
                    CPF</PinnedItem>
                <PinnedItem>
                    <FaScroll/>
                    Certidão de Nascimento/Casamento</PinnedItem>
                <PinnedItem>
                    <FaHome/>
                    Comprovante de Residência</PinnedItem>
            </PinnedList>
        </Section>
        <Section inverse>
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

        </Section>
    </>
   )
};

ProductDetail.defaultProps = {}

ProductDetail.propTypes = {}

export default ProductDetail;