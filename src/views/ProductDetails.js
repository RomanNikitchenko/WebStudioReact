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

const PortfolItem = styled.li`
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

  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  &:hover p {
    transform: translateY(0);
  }
`;

const PortfolioDescription = styled.div`
  position: relative;
  overflow: hidden;
`;

const PortfolioImg = styled.img`
  width: 370px;
  height: 294px;
`;

const PortfolioText = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 63px 24px;
  background-color: rgba(33, 150, 243, 0.9);
  color: var(--text-color-white);
  font-size: 18px;
  line-height: 1.55;
  transform: translateY(101%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
          // const { srcset, sizes, src, alt } = img;
          return (
            <PortfolItem key={id}>
              <PortfolioLink>
                <PortfolioDescription>
                  <PortfolioImg />
                  <PortfolioText>{description}</PortfolioText>
                </PortfolioDescription>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </PortfolioLink>
            </PortfolItem>
          );
        })}
    </PortfolioList>
  );
};
