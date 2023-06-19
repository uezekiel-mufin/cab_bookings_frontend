/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CabIndex from '../pages/CabIndex';
import store from '../redux/store/store';
import Cab from '../components/Cab';

describe('CabIndex', () => {
  const testCab = {
    id: 7,
    manufacturer: 'Mercedes-Benz',
    model: 'Mercedes-Benz C-Class',
    transmission: 'Automatic',
    rental_price: 100,
    discount: 5,
    engine_type: '5L V8',
    image_url:
      'https://images.unsplash.com/photo-1681170368080-f240d1216904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1lcmNlZGVzJTIwQmVueiUyMEMlMjBDbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    seating_capacity: 5,
    body_type: 'Sedan',
    description:
      'The Mercedes-Benz C-Class is a luxury sedan that combines elegance, performance, and advanced technology. With its automatic transmission, you can enjoy a refined and comfortable driving experience. The C-Class offers seating for up to five passengers, providing a luxurious travel experience.',
  };

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
});
