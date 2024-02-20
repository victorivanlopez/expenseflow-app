import { FormEvent, useState } from 'react';
import {
  ButtonForm,
  FieldForm,
  Form,
  InputForm
} from './styles';
import { Alert } from '../../../ui/components';
import type { AlertResponse } from '../../../interfaces';
import { useAuthStore } from '../../../stores';

export const ResetPasswordForm = () => {

  const resetPassword = useAuthStore(state => state.resetPassword);

  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState<AlertResponse>({
    message: '',
  });

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === '') {
      return setAlert({
        message: 'La contraseña es obligatoria',
        type: 'error'
      });
    }

    if (password.length < 6) {
      return setAlert({
        message: 'La contraseña debe tener al menos 6 caracteres',
        type: 'error'
      });
    }

    const response = await resetPassword(password);

    if (response.type === 'error') {
      return setAlert(response);
    }

    setAlert(response);
  }
  return (
    <>
      {alert.message && <Alert alert={alert} />}

      <Form onSubmit={onSubmitForm}>
        <FieldForm>
          <InputForm
            type="password"
            placeholder="Nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FieldForm>

        <ButtonForm
          type="submit"
        >
          Restablecer contraseña
        </ButtonForm>
      </Form>
    </>
  )
}
