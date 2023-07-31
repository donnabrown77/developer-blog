import React from "react";
/**
 *
 * @returns svg for search input control
 */
const SearchInput = () => {
  return (
    <svg
      className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
    </svg>
  );
};

export default SearchInput;
