import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    margin: 0 0 14px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
  }

  p{
    max-width: 320px;
  }

  .container {
    max-width: 1440px;
    padding: 0 20px;
    margin: auto;
  }

  a {
    text-decoration: none;
  }

  p {
    max-width: unset;
  }
  .home {
    text-align: center;
  }
  .form-add-contact {
    gap: 5px;
  }
`;
