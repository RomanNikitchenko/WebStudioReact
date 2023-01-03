import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './PortfolioProduct.module.css';
import { useDispatch } from 'react-redux';
import { changeCurrentType } from 'redux/extraInfo/extraInfo-slice';
import { useMediaQuery } from '@react-hook/media-query';

export const PortfolioProduct = ({
  img,
  description,
  title,
  text,
  index,
  productIndex,
}) => {
  const [lengthTitle, setLengthTitle] = useState('');
  const isDesktopAndTablet = useMediaQuery(
    'only screen and (min-width: 768px) and (max-width: 1199px)'
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (title.length > 28) {
      return setLengthTitle(`${title.slice(0, 28).trim()}${'...'}`);
    }

    setLengthTitle(`${title.trim()}`);
  }, [title, setLengthTitle]);

  const handleMouseEnter = evt => {
    if (title.length > 28) {
      dispatch(
        changeCurrentType(
          evt.currentTarget.name % 2 === 1 ? index - 1 : index + 1
        )
      );
      setLengthTitle(`${title.trim()}`);
      return;
    }
    return;
  };

  const handleMouseLeave = evt => {
    if (title.length > 28) {
      dispatch(changeCurrentType(null));
      setLengthTitle(`${title.slice(0, 25).trim()}${'...'}`);
      return;
    }
    return;
  };

  return (
    <li className={s.portfolioItem}>
      <NavLink
        name={index}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={s.portfolioLink}
      >
        <div className={s.portfolioDescription}>
          <img alt={img.alt} className={s.portfolioImg} />
          <p className={s.portfolioText}>{description}</p>
        </div>
        <div
          className={`${s.thumb} ${
            isDesktopAndTablet && productIndex === index && s.thumbItem
          }`}
        >
          <h2 className={s.thumbTitle}>{lengthTitle}</h2>
          <p className={s.thumbText}>{text}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default PortfolioProduct;
