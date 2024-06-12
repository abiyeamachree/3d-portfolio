import React from 'react';

const Loader = () => {
  return (
    <div>
      <progress value={50} max={100} />
      <span>Loading...</span>
    </div>
  );
};

export default Loader;