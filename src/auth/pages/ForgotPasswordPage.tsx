import { ForgotPassForm } from "../components"
import { ContainerForm, HeaderForm, LinkForm } from "./styles"

export const ForgotPasswordPage = () => {
  return (
    <ContainerForm>
      <HeaderForm>
        <h1>¡Recupera el acceso a ExpenseFlow!</h1>
        <p>Indicanos tu correo para restablecer tu contraseña</p>
      </HeaderForm>

      <ForgotPassForm />

      <LinkForm
        to="/auth/login"
      >
        Iniciar sesión
      </LinkForm>
    </ContainerForm>
  )
}