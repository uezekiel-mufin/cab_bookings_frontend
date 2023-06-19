/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CabIndex from '../pages/CabIndex';
import cabData from '../library/cabs';
import store from '../redux/store/store';
import Cab from '../components/Cab';

/**
 * @jest-environment jsdom
 */

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);

describe('CabIndex', () => {
  it('renders', () => {
    mock.onGet('http://127.0.0.1:3000/api/v1/cabs').reply(200, cabData);
    const tree = TestRenderer.create(
      <Provider store={mockStore(store.getState())}>
        <BrowserRouter>
          <CabIndex />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders CabIndex and checks for main header', async () => {
    mock.onGet('http://127.0.0.1:3000/api/v1/cabs').reply(200, cabData);
    render(
      <Provider store={mockStore(store.getState())}>
        <BrowserRouter>
          <CabIndex />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const header = screen.getByText(/Secure your ride/i);
      expect(header).toBeInTheDocument();
    });
  });
  it('renders CabIndex and checks for the subheader', async () => {
    mock.onGet('http://127.0.0.1:3000/api/v1/cabs').reply(200, cabData);

    render(
      <Provider store={mockStore(store.getState())}>
        <BrowserRouter>
          <CabIndex />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const subHead = screen.getByText(/Please select a cab for rentals/i);
      expect(subHead).toBeInTheDocument();
    });
  });

  test('renders CabIndex and checks for existence of data', async () => {
    mock.onGet('http://127.0.0.1:3000/api/v1/cabs').reply(200, cabData);

    render(
      <Provider store={mockStore(store.getState())}>
        <BrowserRouter>
          <Cab cab={cabData[0]} />
        </BrowserRouter>
      </Provider>,
    );

    // Wait for the component to update with fetched data
    await waitFor(() => {
      const dataElement = screen.getByText(cabData[0].model);
      expect(dataElement).toBeInTheDocument();
    });
  });
});
