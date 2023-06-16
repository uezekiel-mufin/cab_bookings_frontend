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
import { toggleMenu } from './redux/slices/menuSlice';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

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
      {!isMenuOpen && (
        <button
          type="button"
          className="flex p-4 md:hidden w-auto fixed z-0 left-0 top-0  "
          onClick={() => dispatch(toggleMenu())}
        >
          <AiOutlineMenuUnfold className="text-3xl text-gray-800" />
        </button>
      )}
      <section className="hidden w-full md:flex md:col-span-2 max-h-screen lg:col-span-2">
        <ToastContainer position="top-center" />
        <Navbar />
      </section>
      {isMenuOpen && (
        <section className="w-full flex md:hidden md:col-span-2 z-10 h-screen lg:col-span-2">
          <Navbar />
        </section>
      )}
      <section className=" md:col-span-5 py-20 md:py-10 lg:py-0 pt-4 overflow-auto bg-lime-50 lg:col-span-9">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
