import { FcGoogle } from 'react-icons/fc';
import { LoginForm } from '../components';
import {
  ButtonContainer,
  ContainerForm,
  HeaderForm,
  LineForm,
  LinkForm
} from './styles';
import { useAuthStore } from '../../stores';

export const LoginPage = () => {
  const signInWithGoogle = useAuthStore((state) => state.signInWithGoogle);

  return (
    <ContainerForm>
      <HeaderForm>
        <h1>¡Bienvenido nuevamente a ExpenseFlow!</h1>
        <p>Inicia sesión en tu cuenta para continuar</p>
      </HeaderForm>
      <ButtonContainer
        onClick={signInWithGoogle}
      >
        <FcGoogle />
        Continuar con Google
      </ButtonContainer>
      <LineForm>
        <span className="line"></span>
        <span className="text-line">O</span>
        <span className="line"></span>
      </LineForm>

      <LoginForm />

      <LinkForm
        to="/auth/register"
      >
        Registrar una nueva cuenta
      </LinkForm>
    </ContainerForm>
  )
}