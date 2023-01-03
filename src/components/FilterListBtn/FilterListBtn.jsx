import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getfilter } from 'fakeAPI';
import s from './FilterListBtn.module.css';

export const FilterListBtn = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getfilter().then(setProducts);
  }, [setProducts]);

  const isActiveClick = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : `${s.link}`;
  };

  return (
    <ul className={s.list}>
      {products.map(({ id, name }) => (
        <li className={s.items} key={id}>
          <NavLink className={isActiveClick} name={`${id}`} to={`${id}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
