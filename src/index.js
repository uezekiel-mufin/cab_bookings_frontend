import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import ErrorPage from './components/ErrorPage';
import CabIndex from './components/CabIndex';
import Reservations from './components/Reservations';
import AddCab from './components/AddCab';
import NewReservation from './NewReservation';
import store from './redux/store/store';
import CabShow from './components/CabShow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'cabs',
        element: <CabIndex />,
      },
      {
        path: 'cabs/:id',
        element: <CabShow />,
      },
      {
        path: 'reservation',
        element: <Reservations />,
      },
      {
        path: 'cabs-new',
        element: <AddCab />,
      },
      {
        path: 'reservation-new',
        element: <NewReservation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
