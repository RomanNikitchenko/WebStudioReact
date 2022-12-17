import React from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import PublicRoute from './components/PublicRoure';

const HomeViev = lazy(() => import('views/HomeView'));
const PortfolioView = lazy(() => import('views/PortfolioView'));

const App = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeViev />
          </PublicRoute>

          <PublicRoute exact path="/portfolio">
            <PortfolioView />
          </PublicRoute>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
