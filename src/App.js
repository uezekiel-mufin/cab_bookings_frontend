import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-11 overflow-auto divide-x-2 divide-gray-200">
      <section className="hidden w-full md:flex md:col-span-2 max-h-screen lg:col-span-2">
        <ToastContainer position="top-center" />
        <Navbar />
      </section>
      <section className=" md:col-span-5 6 lg:col-span-9">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
