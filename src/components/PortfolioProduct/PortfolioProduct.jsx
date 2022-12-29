import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './PortfolioProduct.module.css';

export const PortfolioProduct = ({ img, description, title, text }) => {
  const [lengthTitle, setLengthTitle] = useState('');

  useEffect(() => {
    if (title.length > 25) {
      return setLengthTitle(`${title.slice(0, 25).trim()}${'...'}`);
    }

    setLengthTitle(`${title.trim()}`);
  }, [title, setLengthTitle]);

  const handleMouseEnter = e => {
    if (title.length > 25) {
      return setLengthTitle(`${title.trim()}`);
    }
    return;
  };

  const handleMouseLeave = e => {
    if (title.length > 25) {
      return setLengthTitle(`${title.slice(0, 25).trim()}${'...'}`);
    }
    return;
  };

  return (
    <li className={s.portfolioItem}>
      <NavLink
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={s.portfolioLink}
      >
        <div className={s.portfolioDescription}>
          <img alt={img.alt} className={s.portfolioImg} />
          <p className={s.portfolioText}>{description}</p>
        </div>
        <div className={s.thumb}>
          <h2 className={s.thumbTitle}>{lengthTitle}</h2>
          <p className={s.thumbText}>{text}</p>
        </div>
      </NavLink>
    </li>
  );
};
