import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './SiteNavList.module.css';

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

export const SiteNavList = () => {
  return (
    <List>
      <Item>
        <NavLink
          to="/"
          className={isActive => {
            return isActive.isActive ? `${s.link} ${s.active}` : `${s.link}`;
          }}
        >
          Студия
        </NavLink>
      </Item>
      <Item>
        <NavLink
          to="/portfolio"
          className={isActive => {
            return isActive.isActive ? `${s.link} ${s.active}` : `${s.link}`;
          }}
        >
          Портфолио
        </NavLink>
      </Item>
      <Item>
        <NavLink
          to="/contacts"
          className={isActive => {
            return isActive.isActive ? `${s.link} ${s.active}` : `${s.link}`;
          }}
        >
          Контакты
        </NavLink>
      </Item>
    </List>
  );
};
