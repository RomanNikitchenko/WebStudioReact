import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import styled from 'styled-components';

const WorksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;
`;

const PortfolioProduct = styled.li`
  @media screen and (min-width: 480px) {
    flex-basis: calc(100% / 1 - 30px);
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2 - 30px);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 30px);
  }

  margin-left: 30px;
  margin-top: 30px;
`;

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getProductById(id).then(setProducts);
  }, [setProducts, id]);

  return (
    <WorksList>
      {product &&
        product.map(({ id, img, description, title, text }) => {
          // const { srcset, sizes, src, alt } = img;
          return (
            <PortfolioProduct key={id}>
              <div>
                {/* <img srcset={srcset} sizes={sizes} src={src} alt={alt} /> */}
                <p>{description}</p>
              </div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </PortfolioProduct>
          );
        })}
    </WorksList>
  );
};
