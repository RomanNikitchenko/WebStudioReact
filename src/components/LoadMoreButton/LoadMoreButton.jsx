import { changeCurrentPage } from 'redux/extraInfo/extraInfo-slice';
import { useDispatch } from 'react-redux';

export const LoadMoreButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCurrentPage(1));
  };

  return (
    <button type="button" onClick={handleClick}>
      load more
    </button>
  );
};
