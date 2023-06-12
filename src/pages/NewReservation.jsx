/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

const NewReservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => console.log(data);
  return (
    <main className="flex w-full h-full text-[#645858] bg-lime-200 justify-center pt-20">
      <section>
        <h1 className="flex justify-center font-weight text-4xl mb-8 font-bold">
          Reserve a New Cab
        </h1>
        <form
          action=""
          onSubmit={handleFormSubmit(handleSubmit)}
          className="w-[450px]"
        >
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
              <input
                type="text"
                name="cab"
                id="cab"
                defaultValue="Honda Civic"
                {...register('cab', {
                  required: true,
                  message: 'Please chose a cab',
                })}
              />
            </label>
            {errors.cab && <span>{errors.cab.message}</span>}
          </div>

          <div>
            <button
              type="button"
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
