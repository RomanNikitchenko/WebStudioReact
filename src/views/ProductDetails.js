import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import styled from 'styled-components';
import { PortfolioProduct } from 'components/PortfolioProduct';
import { getCurrentIndex } from 'redux/extraInfo/extraInfo-selectors';
import { useSelector } from 'react-redux';

const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;
`;

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const options = useSelector(getCurrentIndex);

  useEffect(() => {
    getProductById(id).then(setProducts);
  }, [setProducts, id]);

  return (
    <PortfolioList>
      {product &&
        product.map(({ id, img, description, title, text }, index) => {
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
  );
};
