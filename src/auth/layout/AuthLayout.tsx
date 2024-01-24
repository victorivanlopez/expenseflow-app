
import { Outlet } from 'react-router-dom';
import { Container } from './styles';


export const AuthLayout = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}