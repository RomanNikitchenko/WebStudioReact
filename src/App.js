import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { getCurrentType } from 'redux/extraInfo/extraInfo-selectors';
import { useSelector } from 'react-redux';

// import ProductDetails from './views/ProductDetails';

const HomeViev = lazy(() => import('./views/HomeView'));
const PortfolioView = lazy(() => import('./views/PortfolioView'));
const ProductDetails = lazy(() => import('./views/ProductDetails'));

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
