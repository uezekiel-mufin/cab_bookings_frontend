/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/store';
import DeleteCab from '../pages/DeleteCab';

describe('Delete Cab', () => {
  it('renders', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteCab />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Delete Cab', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteCab />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const header = screen.getByText(/Delete Cab/i);
      expect(header).toBeInTheDocument();
    });
  });
  it('renders Delete Cab', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteCab />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const subHead = screen.getByText(/No cabs available.../i);
      expect(subHead).toBeInTheDocument();
    });
  });
});
