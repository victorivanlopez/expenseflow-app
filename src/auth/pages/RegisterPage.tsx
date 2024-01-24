import { RegisterForm } from '../components';
import { ContainerForm, HeaderForm, LinkForm } from './styles';

export const RegisterPage = () => {
  return (
    <ContainerForm>
      <HeaderForm>
        <h1>¡Registra una cuenta en ExpenseFlow!</h1>
        <p>Llena los siguientes campos para continuar</p>
      </HeaderForm>

      <RegisterForm />

      <LinkForm
        to="/auth/login"
      >
        Iniciar sesión
      </LinkForm>
    </ContainerForm>
  )
}