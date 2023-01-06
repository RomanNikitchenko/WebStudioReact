import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  changeCurrentPage,
  changeCurrentLimit,
} from 'redux/extraInfo/extraInfo-slice';
import {
  getCurrentPage,
  getCurrentLimit,
} from 'redux/extraInfo/extraInfo-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getfilter } from 'fakeAPI';
import s from './FilterListBtn.module.css';

export const FilterListBtn = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const page = useSelector(getCurrentPage);
  const limit = useSelector(getCurrentLimit);

  useEffect(() => {
    getfilter().then(setProducts);

    return () => {
      dispatch(changeCurrentPage(0));
      dispatch(changeCurrentLimit(0));
    };
  }, [setProducts, dispatch]);

  const isActiveClick = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : `${s.link}`;
  };

  const handleClick = () => {
    page > 1 && dispatch(changeCurrentPage(0));
    limit > 3 && dispatch(changeCurrentLimit(0));
    return;
  };

  return (
    <ul className={s.list}>
      {products.map(({ id, name }) => (
        <li className={s.items} key={id}>
          <NavLink
            onClick={handleClick}
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
