import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        font-family: inherit;
        box-sizing: inherit;
        outline: none;
    }

    html {
        font-size: 53%;

        ${props => props.theme.mediaQueries.sm} {font-size: 56%}
        ${props => props.theme.mediaQueries.md} {font-size: 59%}
        ${props => props.theme.mediaQueries.xl} {font-size: 62.5%}
    }

    body {
        /* Colors */
        --primary-color: ${props => props.theme.colors.primary};
        --background-color: ${props => props.theme.colors.background};
        --secondary-background-color: ${props =>
          props.theme.colors.secondaryBackground};
        --text-color: ${props => props.theme.colors.text};
        --white-color: ${props => props.theme.colors.white};
        --black-color: ${props => props.theme.colors.black};
        
        /* Shadows */
        --box-shadow: ${props => props.theme.shadows.primary};
        
        /* Fonts */
        --font-size: 1.6rem;
        --font-family: 'Montserrat', sans-serif;
    
        /* Style */
        font-size: var(--font-size);
        font-family: var(--font-family);
        font-weight: 400;
        color: var(--text-color);
        background: var(--background-color);
        box-sizing: border-box;
        transition: all 0.3s ease;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    img {
        width: 100%;
        user-select: none;
    }

    ::selection {
        background: var(--primary-color);
        color: var(--white-color);
    }
`;

export default GlobalStyle;
