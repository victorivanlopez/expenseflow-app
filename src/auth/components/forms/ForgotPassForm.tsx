import { FormEvent, useState } from 'react';
import {
  ButtonForm,
  FieldForm,
  Form,
  InputForm
} from './styles';
import { useAuthStore } from '../../../stores';
import { Alert } from '../../../ui/components';
import type { AlertResponse } from '../../../interfaces';

export const ForgotPassForm = () => {

  const sendEmailPasswordReset = useAuthStore(state => state.sendEmailPasswordReset);

  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState<AlertResponse>({
    message: '',
  });

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === '') {
      return setAlert({
        message: 'El correo es obligatorio.',
        type: 'error'
      });
    }

    const response = await sendEmailPasswordReset(email);

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
            type="email"
            placeholder="Email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FieldForm>

        <ButtonForm
          type="submit"
        >
          Continuar
        </ButtonForm>
      </Form>
    </>
  )
}