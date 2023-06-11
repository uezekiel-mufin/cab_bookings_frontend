import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import CabIndex from './pages/CabIndex';
import Reservations from './pages/Reservations';
import AddCab from './pages/AddCab';
import NewReservation from './NewReservation';
import store from './redux/store/store';
import CabShow from './pages/CabShow';
import DeleteCab from './pages/DeleteCab';

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
