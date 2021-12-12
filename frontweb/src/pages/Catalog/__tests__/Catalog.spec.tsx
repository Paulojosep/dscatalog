import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Catalog from '../index';
import history from '../../../util/history';
import { server } from './fixtures';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('shoul render Catalog with given products', async () => {

  render(
    <Router history={history}>
        <Catalog />
    </Router>
  );

  expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();
  
  await waitFor(() => {
      expect(screen.getByText("PC Gamer")).toBeInTheDocument();
  });
});
