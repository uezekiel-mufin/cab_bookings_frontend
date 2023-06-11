import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaMediumM, FaTwitter, FaInstagram } from 'react-icons/fa';
import { fetchCabs } from '../redux/slices/fetchCabSlice';

const CabIndex = () => {
  const [cabsLists, setCabsLists] = useState([]);
  const dispatch = useDispatch();
  const cabs = useSelector((state) => state.fetchCab.cabs);

  useEffect(() => {
    dispatch(fetchCabs());
  }, []);

  useEffect(() => {
    setCabsLists(cabs);
  }, [cabs]);

  return (
    <main className="py-10 space-y-12 transition-all duration-300 ease-linear">
      <header className="flex flex-col items-center">
        <h1 className="font-extrabold text-[#645858] text-5xl">Cabs Models</h1>
        <p className="text-base">Please select a cab for rentals</p>
      </header>
      <section className="">
        <ul className="flex relative gap-8 overflow-auto items-center justify-center p-12 px-32">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-300 p-8 pl-16 rounded-r-full"
            type="button"
          >
            <BiLeftArrow className="text-white text-xl" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-400 p-8 pr-16 rounded-l-full"
            type="button"
          >
            <BiRightArrow className="text-white text-xl" />
          </button>
          {cabsLists.slice(0, 3).map((cab) => (
            <li key={cab.id} className="flex flex-col gap-6 items-center">
              <img
                src={cab.imageUrl}
                alt={cab.model}
                className="rounded-full aspect-square w-60  "
              />
              <h2 className="font-extrabold text-[#645858] text-xl tracking-wider">
                {cab.model}
              </h2>
              <hr className="border-dotted w-1/2 font-bold text-2xl border-4" />
              <p className="text-[#807e80]">
                {`${cab.description.substring(0, 200)}...`}
              </p>
              <div className="flex gap-4">
                <span className="rounded-full border p-2">
                  <FaTwitter className="text-xl  text-[#a7a4a7]  cursor-pointer  " />
                </span>
                <span className="rounded-full border p-2">
                  <FaInstagram className="text-xl text-[#a7a4a7] cursor-pointer  " />
                </span>
                <span className="rounded-full border p-2">
                  <FaMediumM className="text-xl  text-[#a7a4a7]  cursor-pointer  " />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CabIndex;
