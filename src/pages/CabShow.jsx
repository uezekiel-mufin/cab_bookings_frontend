import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
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
  return (
    <main className="p-8 relative h-full">
      <button
        className="absolute bottom-12 left-0 transform
          p-6 pl-16 rounded-r-full bg-lime-400"
        type="button"
        onClick={() => window.history.back()}
      >
        <BiLeftArrow className="text-white text-xl" />
      </button>
      <section className="grid grid-cols-2">
        <section>
          <img
            src={selectedCab.imageUrl}
            alt={selectedCab.model}
            className="aspect-square w-11/12 rounded-lg"
          />
        </section>
        <section>
          <h1>{selectedCab.model}</h1>
          <p>{selectedCab.description}</p>
        </section>
      </section>
    </main>
  );
};

export default CabShow;
