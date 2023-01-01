import { useState } from 'react';
import icon from 'assets/symbol-defs.svg';
import s from './BtnMenu.module.css';

export const BtnMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleBtnClick = () => {
    !openMenu ? setOpenMenu(true) : setOpenMenu(false);
  };

  return (
    <button className={s.btnMenu} onClick={handleBtnClick}>
      <svg className={s.icon} width="40" height="40">
        <use href={`${icon}#${openMenu ? 'menuClose' : 'menuOpen'}`}></use>
      </svg>
    </button>
  );
};
