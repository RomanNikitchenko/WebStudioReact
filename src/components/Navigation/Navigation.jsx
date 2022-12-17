import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from 'components/Logo';

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--title-text-color);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &.active {
    color: var(--accent-color);
  }

  &:hover {
    color: var(--accent-color);
  }
`;

export const Navigation = () => {
  return (
    <NavMenu>
      <Logo />

      <StyledLink to="/" exact>
        Студия
      </StyledLink>

      <StyledLink to="/portfolio" exact>
        Портфолио
      </StyledLink>

      <StyledLink to="/contacts" exact>
        Контакты
      </StyledLink>
    </NavMenu>
  );
};
