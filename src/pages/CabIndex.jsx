import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { fetchCabs, nextCab, prevCab } from '../redux/slices/fetchCabSlice';
import Cab from '../components/Cab';

const CabIndex = () => {
  const [cabsLists, setCabsLists] = useState([]);
  const dispatch = useDispatch();
  const cabs = useSelector((state) => state.fetchCab.displayedCabs);
  const currentPage = useSelector((state) => state.fetchCab.currentPage);
  const numOfPages = useSelector((state) => state.fetchCab.numOfPages);
  useEffect(() => {
    dispatch(fetchCabs());
  }, [dispatch]);

  useEffect(() => {
    setCabsLists(cabs);
  }, [cabs]);

  return (
    <main className="py-8 transition-all duration-300 ease-linear">
      <header className="flex flex-col gap-4 items-center">
        <h1 className="font-extrabold text-[#645858] text-5xl capitalize">
          Secure your ride
        </h1>
        <p className="text-base font-semibold italic text-[#8f8787]">
          Please select a cab for rentals
        </p>
        <hr className="border-dotted w-[300px] mt-4 font-bold text-2xl border-[3px]" />
      </header>
      <section className="">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative gap-8 overflow-auto items-center transition-all duration-300 ease-linear justify-center p-12 px-32">
          <button
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
              currentPage > 1 ? 'bg-lime-400' : 'bg-slate-200'
            } p-8 pl-16 rounded-r-full`}
            type="button"
            onClick={() => dispatch(prevCab())}
            disabled={currentPage === 1}
          >
            <BiLeftArrow className="text-white text-xl" />
          </button>
          <button
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${
              currentPage === numOfPages - 2 ? 'bg-slate-200' : 'bg-lime-400'
            } p-8 pr-16 rounded-l-full`}
            type="button"
            onClick={() => dispatch(nextCab())}
            disabled={currentPage === numOfPages - 2}
          >
            <BiRightArrow className="text-white text-xl" />
          </button>
          {cabsLists.map((cab) => (
            <Cab cab={cab} key={cab.id} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CabIndex;
