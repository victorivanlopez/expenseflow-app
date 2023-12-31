import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${({ theme }) => theme.font.DMSans};
    font-size: 1.6rem;
    line-height: 1.5;
  }

  h1,
  h2,
  h3 {
    margin: 0 0 1.5rem 0;
    font-weight: 700;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin: 0;
    letter-spacing: .1rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button:hover {
    cursor: pointer;
  }

  /* Utils */
  .container {
    width: min(90%, 105rem);
    margin: 0 auto;
  }

  .section {
    padding: 5rem 0;
  }

  .section-description {
    text-align: center;
    margin-bottom: 5rem;
  }

  .error {
    color: ${({ theme }) => theme.color.error};
  }
`;