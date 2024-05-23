'use client';

import React from 'react';
import { classNames } from '../utils';

interface IProps {
  className?: string;
}

const Loading: React.FC<IProps> = ({ className }) => {
  return (
    <svg
      className={classNames(
        'animate-spin -ml-1 h-12 w-12 text-white',
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="rgb(48, 63, 159)"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="rgb(48, 63, 159)"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Loading;
