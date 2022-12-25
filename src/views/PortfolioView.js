import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { getProducts } from "../fakeAPI";

export const PortfolioView = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts);
  }, [setProducts])

  return (
    <main>
      <div>
        {products.map(({id, name}) => (
          <div key={id}>
            <Link to={`${id}`}>
              <h3>{name}</h3>
            </Link>
          </div>
        ))}
        </div>
        <Outlet />
    </main>
  );
};

export default PortfolioView;