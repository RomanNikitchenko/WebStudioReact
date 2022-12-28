import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './PortfolioProduct.module.css';

export const PortfolioProduct = ({ img, description, title, text }) => {
  const [lengthTitle, setLengthTitle] = useState(false);

  useEffect(() => {
    if (title.length > 25) {
      return setLengthTitle(`${title.slice(0, 25).trim()}${'...'}`);
    }

    setLengthTitle(title.trim());
  }, [title, setLengthTitle]);

  return (
    <li className={s.portfolioItem}>
      <NavLink className={s.portfolioLink}>
        <div className={s.portfolioDescription}>
          <img alt={img.alt} className={s.portfolioImg} />
          <p className={s.portfolioText}>{description}</p>
        </div>
        <div className={s.thumb}>
          <h2 className={`${s.thumbTitle} ${s.thumbTitleOpacity}`}>
            {lengthTitle}
          </h2>
          <h2 className={`${s.thumbTitle} ${s.thumbTitleAccentOpacity}`}>
            {title}
          </h2>
          <p className={s.thumbText}>{text}</p>
        </div>
      </NavLink>
    </li>
  );
};
