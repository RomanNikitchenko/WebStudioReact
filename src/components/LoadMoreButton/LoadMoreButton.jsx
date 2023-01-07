import { changeCurrentLimit } from 'redux/extraInfo/extraInfo-slice';
import { useDispatch } from 'react-redux';

export const LoadMoreButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCurrentLimit(3));
  };

  return (
    <button type="button" onClick={handleClick}>
      load more
    </button>
  );
};
