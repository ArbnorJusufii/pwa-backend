'use client';
import React from 'react';

interface IProps {
  count: string;
}

const Count: React.FC<IProps> = ({ count }) => {
  return (
    <span
      className='ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-700 '
      aria-hidden='true'>
      {count}
    </span>
  );
};

export default Count;
