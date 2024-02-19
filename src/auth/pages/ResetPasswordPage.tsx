import { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores';
import { Alert } from '../../ui/components';
import { ResetPasswordForm } from '../components/forms/ResetPasswordForm';
import { ContainerForm, HeaderForm } from './styles';
import { AlertResponse } from '../../interfaces';

export const ResetPasswordPage = () => {
  const isChangingPass = useAuthStore(state => state.isChangingPass);
  const [alert, setAlert] = useState<AlertResponse>({
    message: '',
  });

  useEffect(() => {
    if (!isChangingPass) {
      return setAlert({
        message: 'Acción no válida.',
        type: 'error'
      });
    }
  }, [isChangingPass])


  return (
    <ContainerForm>
      <HeaderForm>
        <h1>¡Recupera el acceso a ExpenseFlow!</h1>
        <p>Indicanos tu nueva contraseña de acceso</p>
      </HeaderForm>

      {isChangingPass && <ResetPasswordForm />}

      {!isChangingPass && <Alert alert={alert} />}

    </ContainerForm>
  )
}