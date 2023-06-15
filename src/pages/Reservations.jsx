import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/slices/reservationSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  const { user } = useSelector((state) => state.user);
  console.log(reservations);

  useEffect(() => {
    dispatch(fetchReservations(user?.id));
  }, [dispatch, user?.id]);

  return (
    <div className="h-screen flex flex-col items-center p-4 md:p-12 lg:p-20 pt-8 gap-8 pb-32">
      <h1 className="text-2xl font-bold">Reservation Details</h1>
      <ul className="w-full flex flex-col gap-8 pb-20">
        {reservations?.map((reservation) => (
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
              <button
                type="button"
                className="capitalize w-full md:w-auto border hover:bg-lime-200 transition-all duration-300 ease-linear font-semibold border-lime-500 px-3 py-1"
              >
                delete item
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
