import React from 'react';
import styled from 'styled-components';
import { Logo } from 'components/Logo';
import { SiteNavList } from 'components/SiteNavList';
import { useMediaQuery } from '@react-hook/media-query';

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Navigation = () => {
  const isDesktopAndTablet = useMediaQuery(
    'only screen and (min-width: 768px)'
  );
  return (
    <NavMenu>
      <Logo />
      {isDesktopAndTablet && <SiteNavList />}
    </NavMenu>
  );
};
