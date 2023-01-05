import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import styled from 'styled-components';
import { PortfolioProduct } from 'components/PortfolioProduct';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentIndex } from 'redux/extraInfo/extraInfo-selectors';
import { addCurrentType } from 'redux/extraInfo/extraInfo-slice';

const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;
`;

const ProductDetails = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const options = useSelector(getCurrentIndex);

  useEffect(() => {
    getProductById(id)
      .then(items => {
        setItems(items);
      })
      .catch(error => {
        console.log(error);
      });
    dispatch(addCurrentType(id));
  }, [id, dispatch]);

  return (
    <>
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
      <div>
        <LoadMoreButton />
      </div>
    </>
  );
};

export default ProductDetails;
