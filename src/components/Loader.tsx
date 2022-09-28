import React from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';

export const Loader = () => {
  return (
    <div className='mx-auto w-fit p-16'>
      <SpinnerRoundOutlined
        size={50}
        thickness={100}
        speed={100}
        color='#3ABFF8'
      />
    </div>
  );
};
