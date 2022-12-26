import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { ProductDetails } from './views/ProductDetails';

import HomeViev from './views/HomeView';
import PortfolioView from './views/PortfolioView';
import Allprodusts from './views/AllProducts';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeViev />} />
          <Route path="portfolio" element={<PortfolioView />}>
            <Route index element={<Allprodusts />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="contacts" element={<div>contacts</div>} />
          <Route path="*" element={<div>*</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
