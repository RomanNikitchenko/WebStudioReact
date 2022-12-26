import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getProductById } from '../fakeAPI';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getProductById(id).then(setProducts);
  }, [setProducts, id]);

  console.log(location.state ?? "All");

  return (
    <ul>
      {product &&
        product.map(({ id, img, description, title, text }) => {
          // const { srcset, sizes, src, alt } = img;
          return (
            <li key={id}>
              <div>
                {/* <img srcset={srcset} sizes={sizes} src={src} alt={alt}/> */}
                <p>{description}</p>
              </div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
