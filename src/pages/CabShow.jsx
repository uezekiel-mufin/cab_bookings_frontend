import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
import { BsCarFront } from 'react-icons/bs';
import {
  MdOutlineFavoriteBorder,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import MultiColorProgressBar from '../components/CircularBar';
import { fetchCab } from '../redux/slices/fetchCabSlice';

const CabShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCab = useSelector((state) => state.fetchCab.selectedCab);
  const loading = useSelector((state) => state.fetchCab.loading);

  useEffect(() => {
    dispatch(fetchCab(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  console.log(selectedCab);
  return (
    <main className="p-10  relative h-full">
      <button
        className="absolute bottom-12 left-0 transform
          p-5 pl-16 rounded-r-full bg-lime-400"
        type="button"
        onClick={() => window.history.back()}
      >
        <BiLeftArrow className="text-white text-xl" />
      </button>
      <section className="grid pl-10 grid-cols-2">
        <section className="flex justify-end  pt-24">
          <img
            src={selectedCab.imageUrl}
            alt={selectedCab.model}
            className="aspect-square w-[80%] rounded-lg"
          />
        </section>
        <section className="flex flex-col gap-8 items-end px-6">
          <header className="flex flex-col items-end">
            <h1 className="font-bold text-2xl">{selectedCab.model}</h1>
            <p>{selectedCab.transmission}</p>
          </header>
          <section className="flex w-full flex-col  items-end space-y-2">
            <span className="flex font-semibold rounded-sm text-lg w-[60%] justify-between px-4 tracking-wider py-2 bg-gray-200">
              <h4>Rental Price</h4>
              <p className=" ">{`$${selectedCab.rentalPrice}/2KM`}</p>
            </span>
            <span className="flex font-semibold rounded-md text-lg w-[60%] justify-between px-4 tracking-wider py-1 ">
              <h4>Manufacturer:</h4>
              <p className=" font-bold">{selectedCab.manufacturer}</p>
            </span>
            <span className="flex font-semibold rounded-sm text-lg w-[60%] justify-between px-4 tracking-wider py-2 bg-gray-200">
              <h4>Capacity:</h4>
              <p className=" font-bold">{selectedCab.seatingCapacity}</p>
            </span>
            <span className="flex font-semibold rounded-md text-lg w-[60%] justify-between px-4 tracking-wider py-1">
              <h4>Body Type:</h4>
              <p className=" font-bold">{selectedCab.bodyType}</p>
            </span>
            <span className="flex font-semibold rounded-sm text-lg w-[60%] justify-between px-4 tracking-wider py-2 bg-gray-200">
              <h4>Transmission:</h4>
              <p className=" font-bold">{selectedCab.transmission}</p>
            </span>
            <span className="flex rounded-sm text-lg w-full justify-end px-4 tracking-wider py-2">
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
                {' '}
                Checkout other Models
              </p>
              <MdOutlineKeyboardArrowRight className="text-2xl animate-pulse" />
            </Link>
            <MultiColorProgressBar />
          </section>
          <section>
            <Link to="/reservations/new">
              <button
                type="button"
                className="bg-lime-300 flex gap-1 items-center text-white rounded-3xl text-xl px-8 py-3"
              >
                <BsCarFront />
                Reserve Cab
                <MdOutlineFavoriteBorder />
              </button>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CabShow;
