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
  const [number, setNumber] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const options = useSelector(getCurrentIndex);
  console.log(number);

  useEffect(() => {
    getProductById(id)
      .then(items => {
        setItems(items);
      })
      .catch(error => {
        console.log(error);
      });
    
    setNumber(1);
    dispatch(addCurrentType(id));
  }, [id, dispatch]);

  const handleClick = () => {
    setNumber(prevNumber => (prevNumber += 1));
  };

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
        <LoadMoreButton handleClick={handleClick} />
      </div>
    </>
  );
};

export default ProductDetails;
