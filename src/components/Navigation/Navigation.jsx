import React from 'react';
import styled from 'styled-components';
import { Logo } from 'components/Logo';
import { SiteNavList } from 'components/SiteNavList';

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Navigation = () => {
  return (
    <NavMenu>
      <Logo />
      <SiteNavList />
    </NavMenu>
  );
};
