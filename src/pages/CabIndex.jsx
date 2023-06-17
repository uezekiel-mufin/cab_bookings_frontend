import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { Circles } from 'react-loader-spinner';
import { nextCab, prevCab, fetchCabs } from '../redux/slices/cabSlice';
import Cab from '../components/Cab';

const CabIndex = () => {
  const [cabsLists, setCabsLists] = useState([]);
  const { loading } = useSelector((state) => state.fetchCab);
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

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Circles
          height="80"
          width="80"
          color="rgba(101, 163, 13, 1)"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        />
      </div>
    );
  }

  return (
    <main className="py-16 transition-all h-screen overflow-auto duration-300 ease-linear">
      <header className="flex flex-col gap-2 md:gap-4 text-lime-800 items-center">
        <h1 className="font-extrabold text-2xl lg:text-3xl xl:text-5xl capitalize">
          Secure your ride
        </h1>
        <p className="text-sm md:text-base font-semibold italic ">
          Please select a cab for rentals
        </p>
        <hr className="border-dotted w-[300px] mt-4 font-bold text-2xl border-[3px]" />
      </header>
      {cabsLists.length === 0 && (
        <section className="flex justify-center pt-20 text-lime-800 items-center">
          <h1 className="text-2xl text-center font-bold tracking-widest">
            No cabs available...
          </h1>
        </section>
      )}
      <section className="mb-16 lg:mb-0">
        <ul className="grid pb-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative gap-8 gap-y-16  items-center transition-all duration-300 ease-linear justify-center p-12 px-4 md:px-12 lg:px-20 xl:px-32">
          {cabsLists.length > 0 && (
            <>
              <button
                className={`absolute top-full my-8 lg:top-1/2 left-0 transform -translate-y-1/2 ${
                  currentPage > 1 ? 'bg-lime-400' : 'bg-slate-200'
                } p-6 lg:p-8 pl-10 lg:pl-16 rounded-r-full`}
                type="button"
                onClick={() => dispatch(prevCab())}
                disabled={currentPage === 1}
              >
                <BiLeftArrow className="text-white text-xl" />
              </button>
              <button
                className={`absolute top-full my-8 lg:top-1/2 right-0 transform -translate-y-1/2 ${
                  currentPage === numOfPages - 2
                    ? 'bg-slate-200'
                    : 'bg-lime-400'
                } p-6 lg:p-8 pr-10 lg:pr-16 rounded-l-full`}
                type="button"
                onClick={() => dispatch(nextCab())}
                disabled={currentPage === numOfPages - 2}
              >
                <BiRightArrow className="text-white text-xl" />
              </button>
            </>
          )}
          {cabsLists.map((cab) => (
            <motion.div key={cab.id} className="shadow-xl p-4 lg:shadow-none">
              <Cab cab={cab} />
            </motion.div>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CabIndex;
