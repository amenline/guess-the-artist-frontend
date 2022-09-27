import React from 'react';
import { SpinnerCircularSplit } from 'spinners-react';

export const PageLoader = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <SpinnerCircularSplit
        size={50}
        thickness={100}
        speed={100}
        color='#fff'
        secondaryColor='#641ae6'
      />
    </div>
  );
};
