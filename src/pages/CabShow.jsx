import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
import { BsCarFront } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
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
    <main className="p-8  pt-24 relative h-full">
      <button
        className="absolute bottom-12 left-0 transform
          p-5 pl-16 rounded-r-full bg-lime-400"
        type="button"
        onClick={() => window.history.back()}
      >
        <BiLeftArrow className="text-white text-xl" />
      </button>
      <section className="grid grid-cols-2">
        <section className="flex justify-end">
          <img
            src={selectedCab.imageUrl}
            alt={selectedCab.model}
            className="aspect-square w-[70%] rounded-lg"
          />
        </section>
        <section className="flex flex-col items-end px-6">
          <header>
            <h1 className="font-bold text-2xl">{selectedCab.model}</h1>
            <p>{selectedCab.transmission}</p>
          </header>
          <section className="flex w-full flex-col odd:bg-gray-200 items-end space-y-4">
            <span className="flex text-xl w-[60%] justify-between">
              <h4>Rental Price:</h4>
              <p className=" font-bold">{selectedCab.rentalPrice}</p>
            </span>
            <span className="flex text-xl w-[60%]  justify-between">
              <h4>Manufacturer:</h4>
              <p className=" font-bold">{selectedCab.manufacturer}</p>
            </span>
            <span className="flex text-xl w-[60%]  justify-between">
              <h4>Capacity:</h4>
              <p className=" font-bold">{selectedCab.seatingCapacity}</p>
            </span>
            <span className="flex text-xl w-[60%]  justify-between">
              <h4>Body Type:</h4>
              <p className=" font-bold">{selectedCab.bodyType}</p>
            </span>
            <span className="flex text-xl w-[60%] justify-between">
              <h4>Transmission:</h4>
              <p className=" font-bold">{selectedCab.transmission}</p>
            </span>
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
