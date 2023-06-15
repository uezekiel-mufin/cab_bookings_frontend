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

  return <div className="h-screen">Reservations</div>;
};

export default Reservations;
