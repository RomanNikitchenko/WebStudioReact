import icon from 'assets/symbol-defs.svg';
import s from './BtnMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentBtnMenu } from 'redux/extraInfo/extraInfo-slice';
import { getCurrentBtnMenu } from 'redux/extraInfo/extraInfo-selectors';

export const BtnMenu = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(getCurrentBtnMenu);

  const handleBtnClick = () => {
    !openMenu
      ? dispatch(changeCurrentBtnMenu(true))
      : dispatch(changeCurrentBtnMenu(false));
  };

  return (
    <button className={s.btnMenu} onClick={handleBtnClick}>
      <svg className={s.icon} width="40" height="40">
        <use href={`${icon}#${openMenu ? 'menuClose' : 'menuOpen'}`}></use>
      </svg>
    </button>
  );
};
