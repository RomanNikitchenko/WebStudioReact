import { NavLink } from 'react-router-dom';
import s from './SiteNavList.module.css';
import { useDispatch } from 'react-redux';
import { changeCurrentBtnMenu } from 'redux/extraInfo/extraInfo-slice';
import { useMediaQuery } from '@react-hook/media-query';

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

  const isMobile = useMediaQuery('only screen and (max-width: 767px)');

  const dispatch = useDispatch();

  const handleClick = () => {
    isMobile && dispatch(changeCurrentBtnMenu(false));
    return;
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
