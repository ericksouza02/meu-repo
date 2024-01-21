import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from '../atoms/Button';
import Heading from "../atoms/Heading";
import Card, {CardBody, CardMedia} from "../atoms/Card";
import GridRoot from "../atoms/GridRoot";


const ToolBar = styled.div`
    margin-top: 20px;
    text-align: center;
`

const ProductGrid = ({products}) => {

    const [showProducts, setShowProducts] = useState(false)

    const filteredProducts = showProducts ? products : products.slice(0,3);
    return(
    <>

        <GridRoot md={3}>
            {filteredProducts.map((product)=> (
                <div key={product.id}>
                <Card>
                    <CardMedia image={product.image} />
                    <CardBody>
                        <Heading>
                            <h6>{product.title}</h6>
                        </Heading>
                        <p>{product.summary}</p>
                        <Button color='primary' variant='link' as={Link} to='/serviços'>
                            Saiba Mais
                        </Button>
                    </CardBody>
                </Card>
                </div>
            ))}
        </GridRoot>
        {!showProducts &&(

            <ToolBar>
            <Button variant='outlined' onClick={()=> {
                    setShowProducts(true);
                }}>
                Lista Completa de Serviços
            </Button>
           
        </ToolBar>
        )}
    </>
    )
};

ProductGrid.defaultProps = {
    products: []
}

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            image: PropTypes.string,
            title: PropTypes.string,
            summary: PropTypes.string,
        })
        ),
};

export default ProductGrid;