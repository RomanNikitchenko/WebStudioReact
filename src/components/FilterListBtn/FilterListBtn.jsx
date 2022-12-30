import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentType } from 'redux/extraInfo/extraInfo-slice';
import { getfilter } from 'fakeAPI';
import s from './FilterListBtn.module.css';

export const FilterListBtn = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getfilter().then(setProducts);
  }, [setProducts]);

  const handleClick = evt => {
    dispatch(addCurrentType(evt.target.name));
  };

  return (
    <ul className={s.list}>
      {products.map(({ id, name }) => (
        <li className={s.items} key={id}>
          <NavLink
            className={isActive => {
              return isActive.isActive ? `${s.link} ${s.active}` : `${s.link}`;
            }}
            name={`${id}`}
            to={`${id}`}
            onClick={handleClick}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
