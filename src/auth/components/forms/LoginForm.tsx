import { Link } from 'react-router-dom';
import {
  ButtonForm,
  Form,
  FieldForm,
  InputForm,
  ForgotPassForm
} from './styles';

export const LoginForm = () => {
  return (
    <Form>
      <FieldForm>
        <InputForm
          type="email"
          placeholder="Email"
        />
      </FieldForm>
      <FieldForm>
        <InputForm
          type="password"
          placeholder="Contraseña"
        />
      </FieldForm>

      <ForgotPassForm>
        <Link
          to="/auth/forgot-password"
        >
          ¿Has olvidado tu contraseña?
        </Link>
      </ForgotPassForm>

      <ButtonForm
        type="submit"
      >
        Iniciar sesión
      </ButtonForm>
    </Form>
  )
}
