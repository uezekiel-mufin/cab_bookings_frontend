import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaMediumM, FaTwitter, FaInstagram } from 'react-icons/fa';

const Cab = ({ cab }) => (
  <li
    key={cab.model}
    className="grid grid-rows-2 items-start gap-4 transition-all duration-300 ease-linear"
  >
    <Link to={`/cabs/${cab.id}`} className="flex flex-col gap-4 items-center">
      <img
        src={cab.image_url}
        alt={cab.model}
        className="rounded-full aspect-square w-40 "
      />
    </Link>
    <section className="flex flex-col gap-4 items-center justify-evenly">
      <h2 className="font-extrabold text-[#645858] text-xl tracking-wider">
        {`${cab.model.substring(0, 15)}`}
      </h2>
      <hr className="border-dotted w-full font-bold text-2xl border-[3px]" />
      <p className="text-[#807e80]">
        {`${cab.description.substring(0, 100)}...`}
      </p>
      <div className="flex gap-4">
        <span className="rounded-full border p-2">
          <FaTwitter className="text-xl  text-[#a7a4a7]  cursor-pointer  " />
        </span>
        <span className="rounded-full border p-2">
          <FaInstagram className="text-xl text-[#a7a4a7] cursor-pointer  " />
        </span>
        <span className="rounded-full border p-2">
          <FaMediumM className="text-xl  text-[#a7a4a7]  cursor-pointer  " />
        </span>
      </div>
    </section>
  </li>
);

export default Cab;

Cab.propTypes = {
  cab: PropTypes.shape({
    model: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
