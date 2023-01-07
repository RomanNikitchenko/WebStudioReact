import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  addCurrentType,
  changeCurrentLimit,
} from 'redux/extraInfo/extraInfo-slice';
import { getCurrentLimit } from 'redux/extraInfo/extraInfo-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getfilter } from 'fakeAPI';
import s from './FilterListBtn.module.css';

export const FilterListBtn = () => {
  const [products, setProducts] = useState([]);
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const limit = useSelector(getCurrentLimit);

  useEffect(() => {
    setSearchParams({ limit: limit });
    getfilter().then(setProducts);
  }, [setProducts, setSearchParams, limit]);

  const isActiveClick = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : `${s.link}`;
  };

  const handleClick = id => {
    dispatch(changeCurrentLimit(0));
    dispatch(addCurrentType(id));
  };

  return (
    <ul className={s.list}>
      {products.map(({ id, name }) => (
        <li className={s.items} key={id}>
          <NavLink
            onClick={() => handleClick(id)}
            className={isActiveClick}
            name={`${id}`}
            to={`${id}`}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
