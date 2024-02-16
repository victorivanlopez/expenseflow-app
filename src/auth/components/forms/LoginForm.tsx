import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonForm,
  Form,
  FieldForm,
  InputForm,
  ForgotPassForm
} from './styles';
import { useForm } from '../../../hooks';
import type { AlertResponse } from '../../../interfaces';
import { useAuthStore } from '../../../stores';
import { Alert } from '../../../ui/components';

const initialForm = {
  email: '',
  password: '',
}

export const LoginForm = () => {
  const {
    email,
    password,
    onInputChange
  } = useForm(initialForm);

  const [alert, setAlert] = useState<AlertResponse>({
    message: '',
  });

  const signInWithEmail = useAuthStore(state => state.signInWithEmail);

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([email, password,].includes('')) {
      return setAlert({
        message: 'Todos los campos son obligatorios',
        type: 'error'
      });
    }

    const response = await signInWithEmail(email, password);

    if (response?.type === 'error') {
      return setAlert(response);
    }
  }

  return (
    <>
      {alert.message && <Alert alert={alert} />}

      <Form onSubmit={onSubmitForm}>
        <FieldForm>
          <InputForm
            required
            type="email"
            placeholder="Email"
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </FieldForm>
        <FieldForm>
          <InputForm
            required
            type="password"
            placeholder="Contraseña"
            name='password'
            value={password}
            onChange={onInputChange}
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
    </>
  )
}
