import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Circles } from 'react-loader-spinner';
import { deleteCab, setUserCabs } from '../redux/slices/cabSlice';

const DeleteCab = () => {
  const dispatch = useDispatch();
  const { userCabs } = useSelector((state) => state.fetchCab);
  const { user } = useSelector((state) => state.user);
  const [newCabs, setNewCabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    dispatch(setUserCabs(user?.id));
  }, [user?.id]);

  useEffect(() => {
    setNewCabs(userCabs);
  }, [userCabs]);

  // Function to delete a cab using its id
  const handleDelete = async (id) => {
    setSelectedId(id);
    setLoading(true);
    const result = await dispatch(deleteCab(id));
    if (result.payload.status === 200) {
      const pageItems = userCabs.filter((item) => item.id !== id);
      setNewCabs(pageItems);
      toast.success('Cab deleted successfully');
    } else {
      toast.error('Could not delete, Try again later');
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col items-center mt-8 bg-lime-50 space-y-4 pt-10 text-lime-800 md:px-10 lg:px-20">
      <h1 className="text-3xl text-center font-bold tracking-widest">
        Delete Cab
      </h1>
      <hr className="border-dotted w-[300px]  font-bold text-2xl border-[3px]" />
      {newCabs.length === 0 && (
        <section className="flex justify-center pt-20 text-lime-800 items-center">
          <h1 className="text-2xl text-center font-bold tracking-widest">
            No cabs available...
          </h1>
        </section>
      )}
      <ul className="flex flex-col gap-8 w-full p-6 items-center">
        {newCabs.map((cab) => (
          <li
            key={cab.id}
            className="flex w-full p-3 justify-between shadow-lg border-lime-200 border items-center"
          >
            <p className="text-base md:text-xl font-semibold">{cab.model}</p>
            {loading && selectedId === cab.id ? (
              <Circles
                height="30"
                width="30"
                color="rgba(101, 163, 13, 1)"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={loading}
              />
            ) : (
              <button
                type="button"
                className="capitalize w-auto border hover:bg-lime-200 transition-all duration-300 ease-linear border-lime-500 px-2 md:px-3 py-0 md:py-1 text-base md:text-xl"
                onClick={() => handleDelete(cab.id)}
              >
                delete cab
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteCab;
