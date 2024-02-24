import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { MainContainer } from './styles';
import { useState } from 'react';

export const DashboardLayout = () => {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  const onClickContainer = () => {
    if(showUserMenu) {
      setShowUserMenu(!showUserMenu);
    }
  }

  return (
    <MainContainer
      onClick={onClickContainer}
    >
      <Header
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
      />
      <Outlet />
    </MainContainer>
  )
}