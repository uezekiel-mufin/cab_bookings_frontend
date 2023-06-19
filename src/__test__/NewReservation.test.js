/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/store';
import NewReservation from '../pages/NewReservation';

describe('CabIndex', () => {
  it('renders', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <NewReservation />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders CabIndex and checks for main header', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewReservation />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const header = screen.getByText(/Book a Ride with Carbooky!/i);
      expect(header).toBeInTheDocument();
    });
  });
  it('renders CabIndex and checks for the subheader', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewReservation />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const subHead = screen.getByText(/Cab Model/i);
      expect(subHead).toBeInTheDocument();
    });
  });

  // test('renders CabIndex and checks for existence of data', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Cab cab={testCab} />
  //       </BrowserRouter>
  //     </Provider>,
  //   );

  //   const cabTitle = screen.getByText(
  //     (content, element) =>
  //       element.tagName.toLowerCase() === 'h2' &&
  //       content.includes(testCab.model),
  //   );

  //   expect(cabTitle).toBeInTheDocument();
  // });
});
