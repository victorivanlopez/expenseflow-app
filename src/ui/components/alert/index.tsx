import { ContainerAlert } from './styles';
import type { AlertResponse } from '../../../interfaces';

interface Props {
  alert: AlertResponse;
}

export const Alert = ({ alert }: Props) => {
  return (
    <ContainerAlert className={`${(alert?.type === 'error') ? 'error-alert' : 'success-alert'}`}>
      <p>{alert.message}</p>
    </ContainerAlert>
  )
}