import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  FlexContainer,
  HeaderContainer,
  LogoButton,
  LogoContainer,
  LogoImage,
  MenuOptionsUser,
  Navbar,
  UserButton,
  UserInfo,
  UserMenuContainer,
} from './styles';
import { useAuthStore } from '../../../stores';

interface Props {
  showUserMenu: boolean;
  setShowUserMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ showUserMenu, setShowUserMenu }: Props) => {
  const user = useAuthStore(state => state.user);

  return (
    <HeaderContainer>
      <Navbar>
        <FlexContainer>
          <LogoContainer>
            <LogoButton>
              <span className="sr-only">Abrir menú</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </LogoButton>
            <Link
              to="/"
            >
              <LogoImage src="./assets/expenseflow-logo.png" alt="ExpenseFlow Logo" />
            </Link>
          </LogoContainer>

          <UserMenuContainer
            onMouseEnter={()=> setShowUserMenu(true)}
            onMouseLeave={()=> setShowUserMenu(false)}
          >
            <UserButton
              type='button'
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <span className="sr-only">Abrir menú de usuario</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>

            </UserButton>
            <DropdownMenu show={showUserMenu.toString()}>
              <UserInfo>
                <p>{user?.fullName}</p>
                <p>{user?.email}</p>
              </UserInfo>
              <MenuOptionsUser>
                <li>
                  <a href="#">Perfil</a>
                </li>
                <li>
                  <a href="#">Ajustes</a>
                </li>
                <li>
                  <a href="#">Cerrar sesión</a>
                </li>
              </MenuOptionsUser>
            </DropdownMenu>
          </UserMenuContainer>
        </FlexContainer>
      </Navbar>
    </HeaderContainer>
  )
}