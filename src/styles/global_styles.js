import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --green-bg: #2f2618;
    --cream-bg: #f8edeb;
   
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    background: #fff1e6;
    font-family: 'Allura', cursive;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }

a {
    text-decoration: none;
    color:white;
}

a:visited{
    color:white;
}

li {
    list-style:none
}
`;