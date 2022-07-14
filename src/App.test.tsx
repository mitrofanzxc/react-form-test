import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

describe('App', () => {
  it('App', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const HEADER = screen.getByTestId('header');
    expect(HEADER).toBeInTheDocument();
  });
});
