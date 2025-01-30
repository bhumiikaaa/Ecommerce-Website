import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Roboto:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0A0A0A;
    color: #FFFFFF;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 1rem;
  }

  a {
    color: #00FFFF;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #FFFFFF;
    }
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
`

export default GlobalStyle

