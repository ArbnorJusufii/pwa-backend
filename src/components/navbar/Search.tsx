'use client';
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/utils/index';

interface IProps {
  id?: number;
  isMobileView?: boolean;
}

const Search: React.FC<IProps> = ({ id, isMobileView }) => {
  const [vale, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div
      className={`relative flex ${
        isMobileView ? 'flex-1 bg-gray-900' : 'items-center w-full'
      } `}
    >
      {isMobileView && (
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          aria-hidden="true"
        />
      )}
      <input
        type="text"
        name={id != undefined ? `navigation-search-${id}` : 'navigation-search'}
        id={id != undefined ? `navigation-search-${id}` : 'navigation-search'}
        value={vale}
        placeholder="Search"
        autoComplete="off"
        onChange={onChange}
        className={classNames(
          isMobileView
            ? 'block h-full w-full border-0 py-0 pl-8 pr-0 bg-gray-900 text-white-900 placeholder:text-white-400 outline-none focus:ring-0 sm:text-sm'
            : 'block w-full bg-gray-600 outline-none rounded-md border-none  py-2.5 pl-9 pr-14 text-white shadow-sm placeholder:text-white sm:text-sm sm:leading-6'
        )}
      />
      {!isMobileView && (
        <MagnifyingGlassIcon
          className="pointer-events-none ml-2 absolute inset-y-0 left-0 h-full w-5  text-white"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Search;
