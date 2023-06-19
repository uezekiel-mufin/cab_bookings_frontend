/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reservations from '../pages/Reservations';
import store from '../redux/store/store';

describe('Reservations', () => {
  it('renders', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Reservations />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders CabIndex and checks for the subheader', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Reservations />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const header = screen.getByText(/Reservation Details/i);
      expect(header).toBeInTheDocument();
    });
  });

  test('renders CabIndex and checks for existence of data', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Reservations />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const header = screen.getByText(/No Reservations available.../i);
      expect(header).toBeInTheDocument();
    });
  });
});
