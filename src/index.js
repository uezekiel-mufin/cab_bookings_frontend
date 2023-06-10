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
import DeleteCab from './components/DeleteCab';

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
        path: 'reservations',
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
      {
        path: 'delete-cab',
        element: <DeleteCab />,
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
