import { useState, useEffect } from 'react';
import { getProducts } from '../fakeAPI';

const Allprodusts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, [setProducts]);

  return (
    <ul>
      {products &&
        products.map(({ id, img, description, title, text }) => {
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

export default Allprodusts;
