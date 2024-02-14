import { ContainerAlert } from './styles';

interface Props {
  alert: { message: string, type?: 'error' | 'success' };
}

export const Alert = ({ alert }: Props) => {
  return (
    <ContainerAlert className={`${(alert?.type === 'error') ? 'error-alert' : 'success-alert'}`}>
      <p>{alert.message}</p>
    </ContainerAlert>
  )
}