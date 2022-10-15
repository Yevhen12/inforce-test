import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PagesRoutes from './constants/routes/PagesRoutes';
import { useAppDispatch } from './redux/hooks';
import { fetchProducts } from './redux/slices/thunks/fetchProducts';

const Home = lazy(() => import('./pages/Home/Home'))
const Product = lazy(() => import('./pages/Product/Product'))

const App = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
      const getProducts = async () => {
          dispatch(await fetchProducts())
      }

      getProducts()
  }, [dispatch])


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
