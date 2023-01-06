import {
  changeCurrentPage,
  changeCurrentLimit,
} from 'redux/extraInfo/extraInfo-slice';
import { useDispatch } from 'react-redux';

export const LoadMoreButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCurrentPage(3));
    dispatch(changeCurrentLimit(3));
  };

  return (
    <button type="button" onClick={handleClick}>
      load more
    </button>
  );
};
