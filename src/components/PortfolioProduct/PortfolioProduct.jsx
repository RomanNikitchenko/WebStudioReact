import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './PortfolioProduct.module.css';

export const PortfolioProduct = ({ description, title, text }) => {
  const [stringTitle, setStringTitle] = useState(false);

  useEffect(() => {
    if (title.length > 31) {
      return setStringTitle(true);
    }

    setStringTitle(false);
  }, [title, setStringTitle]);

  return (
    <li className={s.portfolioItem}>
      <NavLink className={s.portfolioLink}>
        <div className={s.portfolioDescription}>
          <img className={s.portfolioImg} />
          <p className={s.portfolioText}>{description}</p>
        </div>
        <div className={`${s.thumb} ${stringTitle && s.thumbAccent}`}>
          <h2
            className={`${s.thumbTitle} ${stringTitle && s.thumbTitleAccent}`}
          >
            {title}
          </h2>
          <p className={s.thumbText}>{text}</p>
        </div>
      </NavLink>
    </li>
  );
};
