import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './ContactsNavList.module.css';
import { useMediaQuery } from '@react-hook/media-query';
import { IconSvg } from 'components/IconSvg';

export const ContactsNavList = () => {
  const [widthMailto, setWidthMailto] = useState('14');
  const [heightMailto, setHeightMailto] = useState('10');
  const [widthTel, setWidthTel] = useState('10');
  const [heightTel, setHeightTel] = useState('14');

  const isTablet = useMediaQuery('only screen and (max-width: 1199px)');
  const isdesktop = useMediaQuery('only screen and (min-width: 1200px)');

  useEffect(() => {
    if (isTablet) {
      setWidthMailto('14');
      setHeightMailto('10');
      setWidthTel('10');
      setHeightTel('14');
      return;
    }
    if (isdesktop) {
      setWidthMailto('16');
      setHeightMailto('12');
      setWidthTel('10');
      setHeightTel('16');
      return;
    }
  }, [isTablet, isdesktop]);

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink className={s.link} to="/mailto:info@devstudio.com">
          <IconSvg
            className={s.icon}
            iconId="mailto"
            width={widthMailto}
            height={heightMailto}
          />
          info@devstudio.com
        </NavLink>
      </li>

      <li className={s.item}>
        <NavLink className={s.link} to="/tel:+380961111111">
          <IconSvg
            className={s.icon}
            iconId="smartphone"
            width={widthTel}
            height={heightTel}
          />
          +38 096 111 11 11
        </NavLink>
      </li>
    </ul>
  );
};
