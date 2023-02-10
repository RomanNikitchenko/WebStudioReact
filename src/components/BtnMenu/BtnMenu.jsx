import { IconCloseAndOpen } from 'components/IconCloseAndOpen';
import s from './BtnMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentBtnMenu } from 'redux/extraInfo/extraInfo-slice';
import { getCurrentBtnMenu } from 'redux/extraInfo/extraInfo-selectors';

export const BtnMenu = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(getCurrentBtnMenu);

  const handleBtnClick = () => {
    dispatch(changeCurrentBtnMenu(!openMenu));
  };

  return (
    <button className={s.btnMenu} onClick={handleBtnClick}>
      <IconCloseAndOpen s={s} openMenu={openMenu} />
    </button>
  );
};
