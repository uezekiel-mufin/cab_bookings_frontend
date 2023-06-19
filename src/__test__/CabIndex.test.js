/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CabIndex from '../pages/CabIndex';
import store from '../redux/store/store';
import cabsData from '../library/cabs';
import Cab from '../components/Cab';

describe('CabIndex', () => {
  it('renders', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <CabIndex />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders CabIndex and checks for main header', async () => {
    render(
      <Provider store={store}>
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
    render(
      <Provider store={store}>
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

  test('renders CabIndex and checks for existence of data', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cab cab={cabsData[0]} />
        </BrowserRouter>
      </Provider>,
    );

    const cabTitle = screen.getByText(
      (content, element) =>
        element.tagName.toLowerCase() === 'h2' &&
        content.includes(cabsData[0].model),
    );

    expect(cabTitle).toBeInTheDocument();
  });
});
