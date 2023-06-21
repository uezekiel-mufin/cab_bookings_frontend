import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/store';
import Login from '../pages/Login';

describe('Delete Cab', () => {
  it('renders sign up component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Sign up form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    const signup = screen.getByText(/Sign Up/i);
    expect(signup).toBeInTheDocument();
  });
  it('renders sign up component and whows the already have an account test', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    const subHead = screen.getByText(/Don't have an account?/i);
    expect(subHead).toBeInTheDocument();
  });
});
