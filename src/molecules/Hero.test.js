import { screen } from "@testing-library/react";
import Hero from '../molecules/Hero'
import ThemeProvider from '../styles/ThemeProvider'

test('renders children in Hero', () => {

    const {getByText} = screen.render(
    <ThemeProvider>
        <Hero>Erick Souza</Hero>
    </ThemeProvider>
)
    expect(screen.getByText('Erick Souza')).toBeInTheDocument()
})