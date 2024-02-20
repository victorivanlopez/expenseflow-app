import { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores';
import { Alert, LinkButton } from '../../ui/components';
import { ResetPasswordForm } from '../components';
import { ContainerForm, HeaderForm } from './styles';
import { AlertResponse } from '../../interfaces';

export const ResetPasswordPage = () => {
  const isChangingPass = useAuthStore(state => state.isChangingPass);
  const changedPassword = useAuthStore(state => state.changedPassword);
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

      {!isChangingPass && <Alert alert={alert} />}

      {isChangingPass && <ResetPasswordForm />}

      {changedPassword && (
        <LinkButton
          navigateTo='/'
          textButton='Ir al dashboard'
        />
      )}

    </ContainerForm>
  )
}