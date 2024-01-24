import { FcGoogle } from 'react-icons/fc';
import { LoginForm } from '../components';
import {
  ButtonContainer,
  ContainerForm,
  HeaderForm,
  LineForm
} from './styles';

export const LoginPage = () => {
  return (
    <ContainerForm>
      <HeaderForm>
        <h1>¡Bienvenido nuevamente a ExpenseFlow!</h1>
        <p>Inicia sesión en tu cuenta para continuar</p>
      </HeaderForm>
      <ButtonContainer>
        <FcGoogle />
        Continuar con Google
      </ButtonContainer>
      <LineForm>
        <span className="line"></span>
        <span className="text-line">O</span>
        <span className="line"></span>
      </LineForm>
      <LoginForm />
    </ContainerForm>
  )
}