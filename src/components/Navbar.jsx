import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  console.log('this is the navbar');
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="cabs">Cabs</Link>
          </li>
          <li>
            <Link to="/reservation-new">Reserve</Link>
          </li>
          <li>
            <Link to="/reservations">My Reservations</Link>
          </li>
          <li>
            <Link to="/cabs-new">Add Cab</Link>
          </li>
          <li>
            <Link to="/delete-cab">Delete Cab</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
