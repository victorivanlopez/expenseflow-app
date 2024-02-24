import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed; 
    top: 0; 
    z-index: 1;
    width: 100%;
    border-bottom: 1px solid #E5E7EB;
    background-color: #ffffff;
    padding: 1rem 2rem;
    @media (min-width: 1024px) {
      padding: 2rem 4rem;
  }
`;

export const Navbar = styled.nav`
  position: relative;
`;

export const FlexContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center; 
  gap: 1rem;
`;

export const LogoButton = styled.button`
  width: 5rem;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  color: ${({ theme }) => theme.color.primary500}; 
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  width: 10rem;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 14rem;
  }
`;

export const UserMenuContainer = styled.div`
  
`;

export const UserMenuFlex = styled.div`

`;

export const UserButton = styled.button`
  width: 4rem;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  color: ${({ theme }) => theme.color.black};
`;

export const DropdownMenu = styled.div<{ show: string }>`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  right: 1rem;
  z-index: 1;
  margin-top: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  font-size: 1.5rem;
  ${({ show }) => show === 'true' && css`
    display: block;
  `}
`;

export const UserInfo = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
`;

export const MenuOptionsUser = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItem = styled.a`
  
`;