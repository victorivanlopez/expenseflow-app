import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../components';
import { useState } from 'react';
import { MainContainer, MainContent, MainSection } from './styles';

export const DashboardLayout = () => {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  const onClickContainer = () => {
    if (showUserMenu) {
      setShowUserMenu(!showUserMenu);
    }
  }

  return (
    <MainSection
      onClick={onClickContainer}
    >
      <Sidebar />

      <MainContainer>
        <Header
          showUserMenu={showUserMenu}
          setShowUserMenu={setShowUserMenu}
        />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainContainer>
    </MainSection>
  )
}