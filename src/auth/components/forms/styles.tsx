import styled from 'styled-components';

export const Form = styled.form`
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
`;

export const FieldForm = styled.div`
  margin-bottom: 2rem;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #DBDBDB;
  &:focus {
    outline: 1px solid #fdf4ef;
  }
`;

export const ButtonForm = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background-color: #e05935;
  color: #FFFFFF;
  border: none;
  transition: background-color .3s;
  &:hover {
    background-color: #d13e25;
  }
`;