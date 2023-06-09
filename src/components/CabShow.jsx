import React from 'react';
import { useParams } from 'react-router-dom';

const CabShow = () => {
  const { id } = useParams();
  console.log(id);
  return <div>CabShow</div>;
};

export default CabShow;
