/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import {
  fetchReservations,
  deleteReservation,
} from '../redux/slices/reservationSlice';

const Reservations = () => {
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  const [newReservations, setNewReservations] = useState(reservations);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchReservations(user?.id));
  }, [dispatch]);

  const handleDelete = async (id) => {
    setSelectedId(id);
    setLoading(true);
    const result = await dispatch(deleteReservation(id));
    if (result.payload === 'OK') {
      setNewReservations(newReservations.filter((item) => item.id !== id));
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col items-center p-4 md:p-12 lg:p-20 pt-8 gap-8 pb-32">
      <h1 className="text-3xl font-bold text-lime-800">Reservation Details</h1>
      <ul className="w-full text-lime-900 flex flex-col gap-8 pb-20">
        {newReservations?.map((reservation) => (
          <li
            key={reservation.id}
            className="flex flex-col shadow-lg border gap-1 justify-center items-center p-4"
          >
            <h3 className="flex w-full justify-between">
              <p className="font-semibold text-lg">Item Name </p>
              <p>{reservation.cab.model}</p>
            </h3>
            <h3 className="flex w-full justify-between">
              <p className="font-semibold text-lg">Reservation Date </p>
              <p>{reservation.reserve_date}</p>
            </h3>
            <h3 className="flex w-full justify-between">
              <p className="font-semibold text-lg">Reservation City </p>
              <p>{reservation.city}</p>
            </h3>
            <div className="flex justify-stretch md:justify-end w-full mt-4 capitalize">
              {loading && selectedId === reservation.id ? (
                <Circles
                  height="40"
                  width="40"
                  color="rgba(101, 163, 13, 1)"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={loading}
                />
              ) : (
                <button
                  type="button"
                  className="capitalize w-full md:w-auto border hover:bg-lime-200 transition-all duration-300 ease-linear font-semibold border-lime-500 px-3 py-1"
                  onClick={() => handleDelete(reservation.id)}
                >
                  delete item
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
