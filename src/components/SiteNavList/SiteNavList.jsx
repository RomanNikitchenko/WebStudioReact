import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
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
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    left: 50%;
    bottom: -31px;
    width: 0px;
    min-height: 4px;
    border-radius: 4px;
    background-color: var(--accent-color);
    transform: translate(-50%, -0%);
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    color: var(--accent-color);

    &::after {
      content: ' ';
      width: 100%;
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--accent-color);
  }
`;

export const SiteNavList = () => {
  return (
    <List>
      <Item>
        <StyledLink to="/">Студия</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/portfolio">Портфолио</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/contacts">Контакты</StyledLink>
      </Item>
    </List>
  );
};
