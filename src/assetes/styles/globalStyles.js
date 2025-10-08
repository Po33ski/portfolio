import { createGlobalStyle } from "styled-components"

export const GloballStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
}

*, *::after, *::before {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
a, button, h2, h4 {
    font-family: 'Poppins', sans-serif;
    
}
`
