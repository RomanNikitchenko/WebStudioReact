import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import styled from 'styled-components';
import { PortfolioProduct } from 'components/PortfolioProduct';

const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;
`;

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getProductById(id).then(setProducts);
  }, [setProducts, id]);

  return (
    <PortfolioList>
      {product &&
        product.map(({ id, description, title, text }) => {
          return (
            <PortfolioProduct
              key={id}
              description={description}
              title={title}
              text={text}
            />
          );
        })}
    </PortfolioList>
  );
};
