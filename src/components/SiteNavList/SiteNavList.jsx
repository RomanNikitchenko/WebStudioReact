import { NavLink } from 'react-router-dom';
import s from './SiteNavList.module.css';

export const SiteNavList = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          to="/"
          className={isActive => {
            return isActive.isActive ? `${s.link} ${s.active}` : `${s.link}`;
          }}
        >
          Студия
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/portfolio"
          className={isActive => {
            return isActive.isActive ? `${s.link} ${s.active}` : `${s.link}`;
          }}
        >
          Портфолио
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/contacts"
          className={isActive => {
            return isActive.isActive ? `${s.link} ${s.active}` : `${s.link}`;
          }}
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  );
};
