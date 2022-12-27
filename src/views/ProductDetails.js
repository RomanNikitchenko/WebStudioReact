import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import styled from 'styled-components';

const PortfolioList = styled.ul`
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

const PortfolioLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
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
        product.map(({ id, img, description, title, text }) => {
          // const { srcset, sizes, src, alt } = img;
          return (
            <PortfolioProduct key={id}>
              <PortfolioLink>
                <div>
                  {/* <img srcset={srcset} sizes={sizes} src={src} alt={alt} /> */}
                  <p>{description}</p>
                </div>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </PortfolioLink>
            </PortfolioProduct>
          );
        })}
    </PortfolioList>
  );
};
