import React from "react";
import {screen,fireEvent } from '@testing-library/react'
import ThemeProvider from "../styles/ThemeProvider";

import Button from "./Button"

test('element children in the Button', () => {
    const { getByText } = screen.render(
    <ThemeProvider>
        <Button>Clique Aqui</Button>
    </ThemeProvider>
)
    expect(screen.getByText('Clique Aqui')).toBeInTheDocument()
});

test('event click on Button', () => {

    const handleCLick = jest.fn()

    const {getByRole} = screen.render(
    <ThemeProvider>
        <Button onClick={handleCLick}/>
    </ThemeProvider>
    )

    fireEvent.click(screen.getByRole('button')) // paramentros fireEvent.click(elemento, evento)

    expect(handleCLick).toBeCalled()
});

// Jeito de fazer com que o teste não quebre
// Object.values(ButtonColors).map(item=>[item])

test.each([
   ['primary', 'outlined'],
   ['primary', 'link'],
   ['danger', 'outlined'],
   ['danger', 'link'],
   ['default', 'outlined'],
   ['default', 'link']
])('renders with %i color', (color, variant) => {

    const { asFragment } = screen.render(
    <ThemeProvider>
        <Button color={color} variant={variant}/>
    </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
});