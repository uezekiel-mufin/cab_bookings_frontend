import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="grid grid-cols-7  divide-x-2 divide-gray-200">
      <section className="col-span-1">
        <Navbar />
      </section>
      <section className="col-span-6">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
