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
            <Link to="/new-reservation">Reserve</Link>
          </li>
          <li>
            <Link to="/reservations">My Reservations</Link>
          </li>
          <li>
            <Link to="/new-cab">Add Cab</Link>
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
