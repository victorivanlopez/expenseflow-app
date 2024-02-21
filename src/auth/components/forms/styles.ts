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
  border: 1px solid ${({ theme }) => theme.color.gray200};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.primary100};
  }
`;

export const ForgotPassForm = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: end;
  a {
    font-size: 1.5rem;
    &:hover {
      color: ${({ theme }) => theme.color.primary950};
    }
  }
`;

export const ButtonForm = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.primary500};
  color: ${({ theme }) => theme.color.white};
  border: none;
  transition: background-color .3s;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary600};
  }
`;