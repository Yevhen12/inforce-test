import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PagesRoutes from './constants/routes/PagesRoutes';

const Home = lazy(() => import('./pages/Home/Home'))
const Product = lazy(() => import('./pages/Product/Product'))

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Routes>
          <Route path={PagesRoutes.HOME} element={<Home />} />
          <Route path={PagesRoutes.PRODUCT} element={<Product />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
