import { NavLink } from 'react-router-dom';
import s from './SiteNavList.module.css';

export const SiteNavList = ({ handleBtnClick }) => {
  const routes = [
    {
      id: 'studio',
      name: 'Студия',
      route: '/',
    },
    {
      id: 'portfolio',
      name: 'Портфолио',
      route: '/portfolio',
    },
    {
      id: 'contacts',
      name: 'Контакты',
      route: '/contacts',
    },
  ];

  const isActiveClick = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : `${s.link}`;
  };

  return (
    <ul className={s.list}>
      {routes.map(({ id, name, route }) => {
        return (
          <li key={id} className={s.item}>
            <NavLink
              to={route}
              className={isActiveClick}
              onClick={handleBtnClick}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
