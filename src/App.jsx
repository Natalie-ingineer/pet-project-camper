import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './modules/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const Catalog = lazy(() => import('./pages/Catalog'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const Features = lazy(() => import('./modules/Features/Features'));
const Reviews = lazy(() => import('./modules/Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
