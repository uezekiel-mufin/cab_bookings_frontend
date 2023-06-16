import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import Cookies from 'js-cookie';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCabs } from './redux/slices/cabSlice';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCabs());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/cabs');
    }
  }, [navigate, user]);

  return (
    <div className="grid  grid-cols-1 md:grid-cols-7 lg:grid-cols-11 overflow-auto divide-x-2 divide-gray-200">
      <section className="flex p-4 md:hidden fixed top-0 left-0 ">
        <AiOutlineMenuUnfold className="text-3xl text-gray-800" />
      </section>
      <section className="hidden w-full md:flex md:col-span-2 max-h-screen lg:col-span-2">
        <ToastContainer position="top-center" />
        <Navbar />
      </section>
      <section className=" md:col-span-5  overflow-auto bg-lime-50 lg:col-span-9">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
