import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './shared/routes';
import { Main, NotFound } from './pages';

const App: FC = () => {
  const { main, notFound } = PATHS;

  return (
    <Routes>
      <Route path={main} element={<Main />} />
      <Route path={notFound} element={<NotFound />} />
    </Routes>
  );
};

export { App };
