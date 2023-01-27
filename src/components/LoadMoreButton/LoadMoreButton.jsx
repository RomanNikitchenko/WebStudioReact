import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { changeCurrentLimit } from 'redux/extraInfo/extraInfo-slice';
import { getCurrentLimit } from 'redux/extraInfo/extraInfo-selectors';
import { useDispatch, useSelector } from 'react-redux';
import s from './LoadMoreButton.module.css';

export const LoadMoreButton = ({ disabled }) => {
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const limit = useSelector(getCurrentLimit);

  useEffect(() => {
    setSearchParams({ limit: limit });
  }, [setSearchParams, limit]);

  const handleClick = () => {
    dispatch(changeCurrentLimit(1));
  };

  return (
    <button
      className={`${s.button} ${disabled && s.buttonDisabled}`}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      load more
    </button>
  );
};
