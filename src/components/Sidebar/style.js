import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MobileNav = styled.div`
  height: 7rem;
  width: 100%;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  display: initial;
  padding: 0 4rem;
  background: var(--primary-color);

  ${props => props.theme.mediaQueries.lg} {
    display: none;
  }
`;

const MobileNavContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileNavLogo = styled.h3`
  color: var(--white-color);
  font-size: 2.8rem;
  text-align: center;
  font-weight: 700;
  transition: all 0.3s ease;
`;

const MobileNavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => props.theme.mediaQueries.lg} {
    margin-bottom: 0;
  }
`;

const MenuToggler = styled.button`
  border: none;
  background: transparent;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const MobileNavOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(24, 24, 24, 0.3);
  display: inline-block;
  opacity: ${props => (props.isOpened ? '1' : '0')};
  pointer-events: ${props => (props.isOpened ? 'initial' : 'none')};
  transition: all 0.5s ease;

  ${props => props.theme.mediaQueries.lg} {
    display: none;
  }
`;

const StyledSidebar = styled.div`
  flex: initial;
  width: 30rem;
  min-height: 100vh;
  padding: 5rem 0;
  border-radius: 0;
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transform: ${props =>
    props.isOpened ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 0.8s ease;

  ${props => props.theme.mediaQueries.lg} {
    flex: 0 0 22.5rem;
    width: initial;
    position: initial;
    top: initial;
    left: initial;
    z-index: initial;
    transform: initial;
    background: var(--secondary-background-color);
  }
`;

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 5rem;
  min-height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const SidebarToggler = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: none;
  background: transparent;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  ${props => props.theme.mediaQueries.lg} {
    display: none;
  }
`;

const NavbarLogo = styled.h3`
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  color: var(--black-color);
  margin-bottom: 8rem;
  transition: all 0.3s ease;
`;

const NavbarMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;
`;

const NavbarHeading = styled.h3`
  position: relative;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0 3rem;
  margin-bottom: 2rem;
  border-left: 5px solid transparent;
  color: var(--black-color);
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 5rem;
  }
`;

const NavbarItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const NavbarLink = styled(NavLink)`
  position: relative;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  padding: 1rem 3rem;
  border-left: 5px solid transparent;
  color: var(--text-color);
  display: flex;
  align-items: center;
  border-radius: 2.5rem;
  transition: all 0.3s ease;

  & > * {
    margin-right: 1rem;
  }

  &:hover {
    color: var(--black-color);
  }
`;

export {
  MobileNav,
  MobileNavContainer,
  MobileNavLogo,
  MobileNavMenu,
  MenuToggler,
  MobileNavOverlay,
  StyledSidebar,
  NavbarWrapper,
  SidebarToggler,
  NavbarLogo,
  NavbarMenu,
  NavbarHeading,
  NavbarItem,
  NavbarLink
};
