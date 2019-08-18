import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
body {
    margin: 0;
    background-color: hsl(193, 93%, 14%);
    color: hsl(191, 0%, 83% );
}
main {
    padding: 1% 22% 1% 22%;
    text-align: justify;
}
h1 {
    text-align: center;
    color: #ff6161;
}
h2 {
    color: white;
}
h3 {
    color: white;
}
img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}
li {
    margin-bottom: calc(1.45rem / 2);
}
ol li {
    padding-left: 0;
}
ul li {
    padding-left: 0;
}
li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
}
li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
}
li *:last-child {
    margin-bottom: 0;
}
a:link, a:visited {
    color: #000;
    text-decoration: none;
}
`;

export default GlobalStyle;