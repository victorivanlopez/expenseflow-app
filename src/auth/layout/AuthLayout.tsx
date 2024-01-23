import { Outlet } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import {
  Container,
  ContainerButton,
  FormContainer,
  FormContainerLine,
  FormHeader
} from './styles';


export const AuthLayout = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <FormHeader>
            <h1>¡Bienvenido nuevamente a ExpenseFlow!</h1>
            <p>Inicia sesión en tu cuenta para continuar</p>
          </FormHeader>
          <ContainerButton>
            <FcGoogle />
            Continuar con Google
          </ContainerButton>
          <FormContainerLine>
            <span className="line"></span>
            <span className="text-line">O</span>
            <span className="line"></span>
          </FormContainerLine>
          <Outlet />
        </FormContainer>
      </Container>
    </>
  )
}