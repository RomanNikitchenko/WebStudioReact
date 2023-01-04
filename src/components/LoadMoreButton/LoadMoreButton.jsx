import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentPage } from 'redux/extraInfo/extraInfo-slice';

export const LoadMoreButton = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch(changeCurrentPage({ page, limit }));
  }, [dispatch, page, limit]);

  const handleBtnClick = () => {
    setPage(prevPage => prevPage + 3);
    setLimit(prevLimit => prevLimit + 3);
  };

  return (
    <button type="button" onClick={handleBtnClick}>
      load more
    </button>
  );
};
