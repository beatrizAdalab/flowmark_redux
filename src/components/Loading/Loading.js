import React from 'react';

const Loading = () => {
  return (
    <div className='d-flex align-items-center justify-content-center p-5'>
      <div className='spinner-grow text-info p-5' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;