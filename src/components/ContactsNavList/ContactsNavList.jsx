import { NavLink } from 'react-router-dom';
import s from './ContactsNavList.module.css';
import { useMediaQuery } from '@react-hook/media-query';
import icon from 'assets/symbol-icons.svg';

export const ContactsNavList = () => {
  // const isMobile = useMediaQuery('only screen and (min-width: 767px)');
  const isTablet = useMediaQuery('only screen and (max-width: 1199px)');
  const isdesktop = useMediaQuery('only screen and (min-width: 1200px)');

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink className={s.link} to="/mailto:info@devstudio.com">
          {isTablet && (
            <svg className={s.icon} width="14" height="10">
              <use href={`${icon}#icon-arrowToBackReportSection`}></use>
            </svg>
          )}
          {isdesktop && (
            <svg className={s.icon} width="16" height="12">
              <use href={`${icon}#icon-arrowToBackReportSection`}></use>
            </svg>
          )}
          info@devstudio.com
        </NavLink>
      </li>

      <li className={s.item}>
        <NavLink className={s.link} to="/tel:+380961111111">
          {isTablet && (
            <svg className={s.icon} width="10" height="14">
              <use href={`${icon}#icon-arrowToBackReportSection`}></use>
            </svg>
          )}
          {isdesktop && (
            <svg className={s.icon} width="10" height="16">
              <use href={`${icon}#icon-arrowToBackReportSection`}></use>
            </svg>
          )}
          +38 096 111 11 11
        </NavLink>
      </li>
    </ul>
  );
};
