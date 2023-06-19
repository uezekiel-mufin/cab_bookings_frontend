import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import store from '../redux/store/store';

describe('Homepage', () => {
  it('renders', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Homepage component and check for login link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    );
    const link = screen.getByText(/Welcome to CarBooky/i);
    expect(link).toBeInTheDocument();
  });
  test('renders Homepage component and check for login link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    );
    const link = screen.getByText(/Book a ride in just a few clicks!/i);
    expect(link).toBeInTheDocument();
  });
  test('renders Homepage component and check for login link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    );
    const link = screen.getByText(/Log in/i);
    expect(link).toBeInTheDocument();
  });
  test('renders Homepage component and checkout for sign up link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    );
    const link = screen.getByText(/Sign up/i);
    expect(link).toBeInTheDocument();
  });
});
