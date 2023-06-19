import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
import { BsCarFront } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Circles } from 'react-loader-spinner';
import MultiColorProgressBar from '../components/CircularBar';
import { fetchCab } from '../redux/slices/cabSlice';

const CabShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCab = useSelector((state) => state.fetchCab.selectedCab);
  const { cabsLoading } = useSelector((state) => state.fetchCab);

  useEffect(() => {
    dispatch(fetchCab(id));
  }, [dispatch, id]);

  if (cabsLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Circles
          height="80"
          width="80"
          color="rgba(101, 163, 13, 1)"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={cabsLoading}
        />
      </div>
    );
  }

  return (
    <main className="px-4 md:p-10 md:px-4 xl:pl-16 py-8 overflow-auto relative h-screen text-[#645858] ">
      <button
        className="hidden lg:flex absolute bottom-0  lg:bottom-12 left-0 transform
          p-5 pl-16 rounded-r-full bg-lime-400"
        type="button"
        onClick={() => window.history.back()}
      >
        <BiLeftArrow className="text-white text-xl" />
      </button>
      <section className="grid lg:pl-10 lg:grid-cols-2">
        <section className="flex justify-end mb-4 pt-20">
          <img
            src={selectedCab.image_url}
            alt={selectedCab.model}
            className="aspect-square w-[90%]  lg:aspect-video lg:w-auto lg:h-[80%]  rounded-lg"
          />
        </section>
        <section className="flex flex-col gap-8 items-end md:px-6">
          <header className="flex flex-col items-end">
            <h1 className="font-bold text-3xl">{selectedCab.model}</h1>
            <p className="font-semibold tracking-wide text-lg">
              {selectedCab.engine_type}
            </p>
          </header>
          <section className="flex w-full flex-col  items-end space-y-2">
            <span className="flex font-semibold rounded-sm text-lg w-full xl:w-[80%] justify-between px-4 tracking-wider py-2 bg-gray-200">
              <h4>Rental Price</h4>
              <p className=" ">{`$${selectedCab.rental_price}/2KM`}</p>
            </span>
            <span className="flex font-semibold rounded-md text-lg w-full xl:w-[80%] justify-between px-4 tracking-wider py-1 ">
              <h4>Manufacturer:</h4>
              <p className=" font-bold">{selectedCab.manufacturer}</p>
            </span>
            <span className="flex font-semibold rounded-sm text-lg w-full xl:w-[80%] justify-between px-4 tracking-wider py-2 bg-gray-200">
              <h4>Capacity:</h4>
              <p className=" font-bold">{selectedCab.seating_capacity}</p>
            </span>
            <span className="flex font-semibold rounded-md text-lg w-full xl:w-[80%] justify-between px-4 tracking-wider py-1">
              <h4>Body Type:</h4>
              <p className=" font-bold">{selectedCab.body_type}</p>
            </span>
            <span className="flex font-semibold rounded-sm text-lg w-full xl:w-[80%] justify-between px-4 tracking-wider py-2 bg-gray-200">
              <h4>Transmission:</h4>
              <p className=" font-bold">{selectedCab.transmission}</p>
            </span>
            <span className="flex rounded-sm text-lg w-full xl-w-[80%] justify-end px-4 tracking-wider py-2">
              <h4 className="flex m-0 gap-1">
                <span className="font-bold text-xl">
                  {`${selectedCab.discount}% `}
                  discount
                </span>
                on distances over 2KM.
              </h4>
            </span>
          </section>
          <section className="flex flex-col items-end gap-8">
            <Link to="/cabs" className="flex items-center">
              <p className="font-semibold tracking-widest">
                Checkout other Models
              </p>
              <MdOutlineKeyboardArrowRight className="text-3xl animate-pulse text-orange-500" />
            </Link>
            <MultiColorProgressBar />
          </section>
          <section>
            <Link to="/reservations-new" state={selectedCab}>
              <button
                type="button"
                className="bg-lime-500 flex gap-2 items-center text-white rounded-3xl text-xl px-8 py-3"
              >
                <BsCarFront />
                Reserve Cab
                <span className="border rounded-full">
                  <MdOutlineKeyboardArrowRight className="text-sm animate-pulse" />
                </span>
              </button>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CabShow;
