import { FormEvent, useState } from 'react';
import { ButtonForm, FieldForm, Form, InputForm } from './styles';
import { useAuthStore } from '../../../stores';
import { useForm } from '../../../hooks';
import { Alert } from '../../../ui/components';
import type { AlertResponse } from '../../../interfaces';

const initialForm = {
  email: '',
  password: '',
  fullName: '',
}

export const RegisterForm = () => {

  const signUpNewUser = useAuthStore(state => state.signUpNewUser);
  const {
    email,
    password,
    fullName,
    onInputChange,
    onResetForm
  } = useForm(initialForm);

  const [alert, setAlert] = useState<AlertResponse>({
    message: '',
  });

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([fullName, email, password,].includes('')) {
      return setAlert({
        message: 'Todos los campos son obligatorios',
        type: 'error'
      });
    }

    if (password.length < 6) {
      return setAlert({
        message: 'La contraseña debe tener al menos 6 caracteres',
        type: 'error'
      });
    }

    const response = await signUpNewUser(email, password, fullName);

    if (response.type === 'error') {
      return setAlert(response);
    }

    setAlert(response);
    onResetForm();
  }

  return (
    <>
      {alert.message && <Alert alert={alert} />}

      <Form onSubmit={onSubmitForm}>
        <FieldForm>
          <InputForm
            required
            type="text"
            placeholder="Nombre Completo"
            name='fullName'
            value={fullName}
            onChange={onInputChange}
          />
        </FieldForm>
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

        <ButtonForm
          type="submit"
        >
          Registrarse
        </ButtonForm>
      </Form>
    </>
  )
}