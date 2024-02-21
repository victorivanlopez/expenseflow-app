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
    background-color: ${({ theme }) => theme.color.gray50};
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

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .error-alert {
    background-color: ${({ theme }) => theme.color.red100};
    border-top: 1px solid ${({ theme }) => theme.color.red400};
    border-bottom: 1px solid ${({ theme }) => theme.color.red400};
    color: ${({ theme }) => theme.color.red500};
  }
  
  .success-alert {
    background-color: ${({ theme }) => theme.color.green100};
    border-top: 1px solid ${({ theme }) => theme.color.green400};
    border-bottom: 1px solid ${({ theme }) => theme.color.green400};
    color: ${({ theme }) => theme.color.green500};
  }
`;