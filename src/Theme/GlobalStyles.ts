import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

a,
*,
*::before,
*::after {
  box-sizing: border-box;
}

/** Custom Properties, Update these properties for your own design **/

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/** General Style **/
body {
  font-family: "Source Sans Pro", sans-serif, "Source Code Pro", monospace;
  margin: 0;
  padding: 0;
}

ul, ol, li, nav {
  list-style:none;
}

a {
  text-decoration: none; 
  color: black;
}

`;

export default GlobalStyle;
