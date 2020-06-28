import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router';
import {
  faChartArea,
  faFire,
  faPlay,
  faFireAlt,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import {
  MobileNav,
  MobileNavContainer,
  MobileNavLogo,
  MobileNavMenu,
  MenuToggler,
  StyledSidebar,
  NavbarWrapper,
  NavbarLogo,
  NavbarMenu,
  NavbarHeading,
  NavbarItem,
  NavbarLink,
  MobileNavOverlay,
  SidebarToggler,
} from './style';

const Sidebar = ({ opened }) => {
  const [isOpened, setIsOpened] = useState(false); // Opened state

  useEffect(() => {
    // No scroll when the sidebar is opened
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpened]);

  return (
    <React.Fragment>
      <MobileNav>
        <MobileNavContainer>
          <MobileNavOverlay
            onClick={() => setIsOpened(false)}
            isOpened={isOpened}
          />
          <MobileNavLogo>MoviesQi</MobileNavLogo>
          <MobileNavMenu>
            <MenuToggler onClick={() => setIsOpened(true)}>
              <FontAwesomeIcon icon={faBars} />
            </MenuToggler>
          </MobileNavMenu>
        </MobileNavContainer>
      </MobileNav>
      <StyledSidebar isOpened={isOpened}>
        <SidebarToggler onClick={() => setIsOpened(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </SidebarToggler>
        <NavbarWrapper>
          <NavbarLogo>MoviesQi</NavbarLogo>
          <NavbarMenu>
            <NavbarHeading>Movies</NavbarHeading>
            <NavbarItem>
              <NavbarLink
                to='/discover/movie/Popular'
                onClick={() => {
                  setIsOpened(false);
                }}
                activeStyle={{
                  background: 'var(--primary-color)',
                  color: 'var(--white-color)',
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
                Popular
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink
                to='/discover/movie/Top_Rated'
                onClick={() => {
                  setIsOpened(false);
                }}
                activeStyle={{
                  background: 'var(--primary-color)',
                  color: 'var(--white-color)',
                }}
              >
                <FontAwesomeIcon icon={faChartArea} />
                Top Rated
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink
                to='/discover/movie/Upcoming'
                onClick={() => {
                  setIsOpened(false);
                }}
                activeStyle={{
                  background: 'var(--primary-color)',
                  color: 'var(--white-color)',
                }}
              >
                <FontAwesomeIcon icon={faFireAlt} />
                Upcoming
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink
                to='/discover/movie/Now_Playing'
                onClick={() => {
                  setIsOpened(false);
                }}
                activeStyle={{
                  background: 'var(--primary-color)',
                  color: 'var(--white-color)',
                }}
              >
                <FontAwesomeIcon icon={faPlay} />
                Now Playing
              </NavbarLink>
            </NavbarItem>
            <NavbarHeading>Actors</NavbarHeading>
            <NavbarItem>
              <NavbarLink
                to='/discover/person/Popular'
                onClick={() => {
                  setIsOpened(false);
                }}
                activeStyle={{
                  background: 'var(--primary-color)',
                  color: 'var(--white-color)',
                }}
              >
                <FontAwesomeIcon icon={faFire} />
                Popular
              </NavbarLink>
            </NavbarItem>
          </NavbarMenu>
        </NavbarWrapper>
      </StyledSidebar>
    </React.Fragment>
  );
};

export default withRouter(Sidebar);
