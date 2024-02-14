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
    line-height: 1.2;
  }

  h1,
  h2,
  h3 {
    margin: 0 0 1.5rem 0;
    font-weight: 700;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
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
    color: #3c0f0e;
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

  .error-alert {
    background-color: #fee2e2;
    border-top: 1px solid #ef4444;
    border-bottom: 1px solid #ef4444;
    color: #b91c1c;
  }
  
  .success-alert {
    background-color: #bbf7d0;
    border-top: 1px solid #22c55e;
    border-bottom: 1px solid #22c55e;
    color: #15803d;
  }
`;