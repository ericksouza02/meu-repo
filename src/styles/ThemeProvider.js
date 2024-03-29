import { ThemeProvider as StyledProvider } from "styled-components"

export const ThemeNames = {
    light: 'light',
    ocean: 'ocean'
}


const light = { 
        
    colors:{        
            primary: {
                main: '#F3D500',
                dark: '#E8BB00',
                light: '#FDED00',
                text: '#212121'
            },

            danger: {
                main: '#E80700',
                dark: '#D80300',
                light: '#F31F00',
                text: '#212121'
            },

            default: {
                primary: '#212121'
            },
            border: "rgba(0, 0, 0, 0.125)"
        }
    }

const allThemes = {
    light,
    ocean: {
        ...light,
        colors: {
            ...light.colors,
            primary: {
                main: '#2196f3',
                dark: '#1769aa',
                light: '#4dabf5',
                text: '#fff'
            }
        }
    }
}
    

const ThemeProvider = ({theme, children}) => (
    <StyledProvider theme={allThemes[theme]}>
        {children}
    </StyledProvider>
)

ThemeProvider.defaultProps = {
    theme: 'light',
}

export default ThemeProvider;