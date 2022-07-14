import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PATHS } from './shared';
import { Layout, Main, Category, Product } from './pages';

const App: FC = () => {
  const { main, men, menId, women, womenId, notFound } = PATHS;

  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={men} element={<Category productCategory="men" />} />
        <Route path={menId} element={<Product productCategory="men" />} />
        <Route path={women} element={<Category productCategory="women" />} />
        <Route path={womenId} element={<Product productCategory="women" />} />
        <Route path={notFound} element={<Main />} />
      </Route>
    </Routes>
  );
};

export { App };
