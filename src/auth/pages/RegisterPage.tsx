import { RegisterForm } from '../components';
import { ContainerForm, HeaderForm } from './styles';

export const RegisterPage = () => {
  return (
    <ContainerForm>
      <HeaderForm>
        <h1>¡Crea tu cuenta en ExpenseFlow!</h1>
        <p>Llena los siguientes campos para continuar</p>
      </HeaderForm>
      <RegisterForm />
    </ContainerForm>
  )
}