import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCabs } from '../redux/slices/fetchCabSlice';

const CabIndex = () => {
  const dispatch = useDispatch();
  const cabs = useSelector((state) => state.fetchCab.cabs);

  useEffect(() => {
    dispatch(fetchCabs());
  }, []);

  console.log(cabs);
  return <div>CabIndex</div>;
};

export default CabIndex;
