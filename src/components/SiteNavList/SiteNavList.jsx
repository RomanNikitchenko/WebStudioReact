import { NavLink } from 'react-router-dom';
import s from './SiteNavList.module.css';
import { useDispatch } from 'react-redux';
import { changeCurrentBtnMenu } from 'redux/extraInfo/extraInfo-slice';

export const SiteNavList = () => {
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

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCurrentBtnMenu(false));
  };

  const isActiveClick = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : `${s.link}`;
  };

  return (
    <ul className={s.list}>
      {routes.map(({ id, name, route }) => {
        return (
          <li key={id} className={s.item}>
            <NavLink to={route} className={isActiveClick} onClick={handleClick}>
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
