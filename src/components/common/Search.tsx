'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface IProps {
  defaultValue?: string;
  onChange?: (e: any) => void;
}

const Search: React.FC<IProps> = ({ defaultValue, onChange }) => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm w-full md:w-80 md:mt-0">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-500"
          aria-hidden="true"
        />
      </div>
      <input
        defaultValue={defaultValue}
        type="text"
        name="search"
        className="block w-full rounded-md border-0 font-normal text-md outline-none py-1.5 pl-10 text-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
