import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import styled from 'styled-components';
import { PortfolioProduct } from 'components/PortfolioProduct';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { useSelector } from 'react-redux';
import { getCurrentIndex } from 'redux/extraInfo/extraInfo-selectors';

const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;
`;

const ProductDetails = () => {
  const [items, setItems] = useState([]);
  const [hits, setHits] = useState([]);
  const [searchParams] = useSearchParams();

  const limit = searchParams.get('limit') ?? 3;
  const { id } = useParams();

  const options = useSelector(getCurrentIndex);

  useEffect(() => {
    getProductById(id, limit)
      .then(({ partItems, allItems }) => {
        setItems([...partItems]);
        setHits(allItems);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id, limit]);

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
      <LoadMoreButton disabled={items.length === hits.length} />
    </>
  );
};

export default ProductDetails;
