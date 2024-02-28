import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100vh;
  max-width: 30rem;
  background-color: ${({theme}) => theme.color.white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-right: 1px solid ${({theme}) => theme.color.gray100};
  padding: 10rem 0;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavigationSidebar = styled.nav`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2.5rem;
    font-size: 1.8rem;
    font-weight: 600;
    border-right: 4px solid transparent;
    transition-duration: 200ms;
    &:hover {
      background-color: ${({ theme }) => theme.color.primary50};
    }
    &.active-nav {
      background-color: ${({ theme }) => theme.color.primary50};
      border-right: 4px solid ${({ theme }) => theme.color.primary500};
    }
    svg {
      width: 2.5rem;
    }
  }
`;

export const NavigationSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray300};
  margin: 2.4rem 0;
`;