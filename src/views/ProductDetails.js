import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import styled from 'styled-components';
import { PortfolioProduct } from 'components/PortfolioProduct';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrentIndex,
  getCurrentPage,
  getCurrentLimit,
} from 'redux/extraInfo/extraInfo-selectors';
import { addCurrentType } from 'redux/extraInfo/extraInfo-slice';

const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;
`;

const ProductDetails = () => {
  const [items, setItems] = useState([]);
  const [hits, setHits] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const options = useSelector(getCurrentIndex);
  const page = useSelector(getCurrentPage);
  const limit = useSelector(getCurrentLimit);

  useEffect(() => {
    getProductById(id, page, limit)
      .then(({ partItems, allItems }) => {
        
        if (page === 0) {
          setItems([...partItems]);
          setHits(allItems);
          return;
        }

        if (page > 0) {
          setItems(prevItems => [...prevItems, ...partItems]);
          return;
        }
      })
      .catch(error => {
        console.log(error);
      });

    dispatch(addCurrentType(id));
  }, [id, dispatch, page, limit]);

  return (
    <>
      {items.length > 0 && (
        <PortfolioList>
          {items.map(({ id, img, description, title, text }, index) => {
            return (
              <PortfolioProduct
                key={id}
                index={index}
                img={img}
                description={description}
                title={title}
                text={text}
                productIndex={options}
              />
            );
          })}
        </PortfolioList>
      )}
      {items.length !== hits.length && (
        <div>
          <LoadMoreButton />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
