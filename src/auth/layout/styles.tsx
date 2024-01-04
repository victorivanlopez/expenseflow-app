import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  padding: 10rem 0;
  @media (min-width: 768px) {
    padding: 20rem 0;
  }
`;

export const FormContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 2rem;
`;