import React from "react";
import {render, screen} from '@testing-library/react';

import ProductDetail from './ProductDetail';
import {buildProduct} from '../../models/builders/products';

test("renders Product Detail", () => {
    render(<ProductDetail product={buildProduct()}/>)
    expect(screen.getByText("Nome do serviço")).toBeInTheDocument()
})