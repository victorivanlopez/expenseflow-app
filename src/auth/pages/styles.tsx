import styled from 'styled-components';

export const ContainerForm = styled.div`
  display: grid;
  place-items: center;
  max-width: 60rem;
  margin: 0 auto;
`;

export const HeaderForm = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  img {
    width: 25rem;
  }
  h1 {
    margin-top: 2rem;
    font-size: 4rem;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 3rem;
  margin-bottom: 4rem;
  border-radius: 1rem;
  background-color: #FFFFFF;
  border: 1px solid #DBDBDB;
  transition: background-color .3s;
  &:hover {
    background-color: #f9f9f9;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const LineForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    max-width: 60rem;
  }
  .line {
    width: 100%;
    border: 1px solid #DBDBDB;
  }
  .text-line {
    margin: 0 1rem;
  }
`;