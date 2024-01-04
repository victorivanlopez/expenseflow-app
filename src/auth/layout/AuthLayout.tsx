import { Outlet } from 'react-router-dom';
import { Container, FormContainer, LogoContainer } from './styles';


export const AuthLayout = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <LogoContainer>
            <h1>ExpenseFlow Logo</h1>
          </LogoContainer>
          <Outlet />
        </FormContainer>
      </Container>
    </>
  )
}