/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';
import { createReservation } from '../redux/slices/reservationSlice';

const NewReservation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.reservation);
  const { cabs } = useSelector((state) => state.fetchCab);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  console.log(message);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = ({ name, date, cab, city }) => {
    console.log(name, date, cab, city);
    const obj = { name, date, cab, city };
    dispatch(createReservation(obj));
  };
  console.log(cabs);
  return (
    <main className="flex w-full h-full text-[#645858] bg-lime-200 justify-center pt-20">
      <section>
        <h1 className="flex justify-center font-weight text-4xl mb-8 font-bold">
          Reserve a New Cab
        </h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-[450px]">
          <div className="flex flex-col">
            <label htmlFor="city">
              City
              <input
                type="text"
                name="city"
                id="city"
                {...register('city', {
                  required: true,
                  message: 'Please enter your city',
                })}
              />
            </label>
            {errors.city && <span>{errors.city.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="date">
              Date
              <input
                type="date"
                name="date"
                id="date"
                {...register('date', {
                  required: true,
                  message: 'Please select a date',
                })}
              />
            </label>
            {errors.date && <span>{errors.date.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="Cab">
              Cab Model
              <select
                name="cab"
                id="cab"
                {...register('cab', {
                  required: true,
                  message: 'Please chose a cab',
                })}
              >
                {cabs.map((cab) => (
                  <option key={cab.id} value={cab.model}>
                    {cab.model}
                  </option>
                ))}
              </select>
            </label>
            {errors.cab && <span>{errors.cab.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="Cab">
              Username
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={user?.name || 'John Doe'}
                {...register('name', {
                  required: true,
                  message: 'Please choose a name',
                })}
              />
            </label>
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div>
            <button
              type="submit"
              className="bg-lime-500 w-full mt-8 flex gap-2 items-center text-white rounded-md justify-center text-2xl px-8 py-3"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default NewReservation;
