import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* reset css */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
:root {
    line-height: 1;
    font-family: "Campton" , "Spoqa Han Sans Neo", 'sans-serif';
    letter-spacing: -.02em;
	word-break: keep-all;
    
}
body { 
    min-height: 100vh; 
    /* mobile viewport bug fix */ 
    min-height: -webkit-fill-available; 
} 
html { height: -webkit-fill-available; }
ol, ul {
    list-style: none;
}
a {
    text-decoration: none;
    color: #212529;
}
a:active {
    color: #212529;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
img {
    display: block;
}
b {
    font-weight: bold;
}

@font-face {
	font-family: "Spoqa Han Sans Neo";
	src: url(font/SpoqaHanSansNeo-Bold.woff) format('woff');
	font-weight: 700;
}
@font-face {
	font-family: "Spoqa Han Sans Neo";
	src: url(font/SpoqaHanSansNeo-Medium.woff) format('woff');
	font-weight: 500;
}
@font-face {
	font-family: "Spoqa Han Sans Neo";
	src: url(font/SpoqaHanSansNeo-Regular.woff) format('woff');
	font-weight: 400;
}
@font-face {
	font-family: "Spoqa Han Sans Neo";
	src: url(font/SpoqaHanSansNeo-Light.woff) format('woff');
	font-weight: 300;
}
@font-face {
	font-family: "Campton";
	src: url(font/Campton-Bold.woff) format('woff');
	font-weight: 700;
}
@font-face {
	font-family: "Campton";
	src: url(font/Campton-SemiBold.woff) format('woff');
}
@font-face {
	font-family: "Campton";
	src: url(font/Campton-Medium.woff) format('woff');
	font-weight: 500;
}
@font-face {
	font-family: "Campton";
	src: url(font/Campton-Book.woff) format('woff');
	font-weight: 400;
}
`;

export default GlobalStyle;
