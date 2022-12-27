import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { ProductDetails } from './views/ProductDetails';
import HomeViev from './views/HomeView';
import PortfolioView from './views/PortfolioView';
import { getCurrentType } from 'redux/extraInfo/extraInfo-selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const options = useSelector(getCurrentType);
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeViev />} />
          <Route path="portfolio" element={<PortfolioView />}>
            <Route index element={<Navigate to={`${options}`} />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="contacts" element={<div>contacts</div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
