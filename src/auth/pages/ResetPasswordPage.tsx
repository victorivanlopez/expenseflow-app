import { ResetPasswordForm } from '../components/forms/ResetPasswordForm';
import { ContainerForm, HeaderForm } from './styles';

export const ResetPasswordPage = () => {
  return (
    <ContainerForm>
      <HeaderForm>
        <h1>¡Recupera el acceso a ExpenseFlow!</h1>
        <p>Indicanos tu nueva contraseña de acceso</p>
      </HeaderForm>

      <ResetPasswordForm />

    </ContainerForm>
  )
}