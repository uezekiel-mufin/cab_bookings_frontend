import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reservations from '../pages/Reservations';
import store from '../redux/store/store';
import reservationData from '../library/reservationData';

/**
 * @jest-environment jsdom
 */

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);

describe('Reservations', () => {
  it('renders', () => {
    mock
      .onGet('http://127.0.0.1:3000/api/v1/reservations')
      .reply(200, reservationData);
    const tree = TestRenderer.create(
      <Provider store={mockStore(store.getState())}>
        <BrowserRouter>
          <Reservations />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders CabIndex and checks for the subheader', async () => {
    mock
      .onGet('http://127.0.0.1:3000/api/v1/reservations')
      .reply(200, reservationData);
    render(
      <Provider store={mockStore(store.getState())}>
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
    mock
      .onGet('http://127.0.0.1:3000/api/v1/reservations')
      .reply(200, reservationData);
    render(
      <Provider store={mockStore(store.getState())}>
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
