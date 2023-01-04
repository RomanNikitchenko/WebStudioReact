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

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ProductDetails = () => {
  const [product, setProducts] = useState([]);
  const [status, setStatus] = useState('idle');

  const { id } = useParams();
  const dispatch = useDispatch();
  const options = useSelector(getCurrentIndex);

  useEffect(() => {
    setStatus('pending');

    getProductById(id)
      .then(items => {
        setProducts(items);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });

    dispatch(addCurrentType(id));
  }, [id, dispatch]);

  return (
    <>
      {status === 'rejected' && <h1>NOT FAUND</h1>}
      {status === 'pending' && <h1>Pending</h1>}
      {status === 'resolved' && (
        <>
          <PortfolioList>
            {product.map(({ id, img, description, title, text }, index) => {
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
          <Div>
            <LoadMoreButton />
          </Div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
