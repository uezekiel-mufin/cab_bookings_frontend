import './App.css';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { toggleMenu } from './redux/slices/menuSlice';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // const { cabs } = useSelector((state) => state.fetchCab);
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  useEffect(() => {
    if (!user) {
      navigate('/cabs-new');
    } else {
      navigate('/cabs-new');
    }
  }, [navigate, user]);

  return (
    <div className="grid relative grid-cols-1 md:grid-cols-7 lg:grid-cols-11 overflow-auto divide-x-2 divide-gray-200">
      <section className="hidden w-full md:flex md:col-span-2 h-screen lg:col-span-2">
        <Navbar />
      </section>
      {isMenuOpen && (
        <section className="animate-slide-in w-full bg-lime-100 md:hidden md:col-span-2 z-10 h-screen lg:col-span-2">
          <Navbar />
        </section>
      )}
      <section className="relative md:col-span-5 z-10 md:py-10 lg:py-0 pt-0 overflow-auto bg-lime-50 lg:col-span-9">
        {!isMenuOpen && (
          <button
            type="button"
            className="flex md:hidden w-auto absolute z-0 left-0 top-0 p-4"
            onClick={() => dispatch(toggleMenu())}
          >
            <AiOutlineMenuUnfold
              className={`text-4xl ${
                location.pathname === '/reservations-new'
                  ? 'text-lime-50'
                  : 'text-lime-800'
              }`}
            />
          </button>
        )}
        <Outlet />
      </section>
    </div>
  );
}

export default App;
