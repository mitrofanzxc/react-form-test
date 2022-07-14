import { FC } from 'react';
import './NotFound.scss';

const NotFound: FC = () => {
  return (
    <section className="not-found">
      <h1 className="h1">404</h1>
      <h2 className="h2">Nothing was found</h2>
      <h3 className="h3">Try again later or check the address of the page...</h3>
    </section>
  );
};

export { NotFound };
