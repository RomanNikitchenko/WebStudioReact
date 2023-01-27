import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  addCurrentType,
  changeCurrentLimit,
  changeCurrentType,
} from 'redux/extraInfo/extraInfo-slice';
import {
  getCurrentLimit,
  getCurrentIndex,
} from 'redux/extraInfo/extraInfo-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getfilter } from 'fakeAPI';
import s from './FilterListBtn.module.css';

export const FilterListBtn = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [unmount, setUnmount] = useState(true);

  const getLimit = useSelector(getCurrentLimit);
  const options = useSelector(getCurrentIndex);
  const dispatch = useDispatch();

  const limit = searchParams.get('limit') ?? getLimit;

  useEffect(() => {
    if (unmount) {
      dispatch(changeCurrentLimit(Number(limit)));
      setUnmount(false);
    }
    getfilter().then(setProducts);
  }, [setProducts, dispatch, limit, unmount]);

  const handleClick = id => {
    dispatch(changeCurrentLimit(0));
    dispatch(addCurrentType(id));
    options.length > 0 && dispatch(changeCurrentType([]));
  };

  const isActiveClick = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : `${s.link}`;
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
