"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import Hamburger from "./Hamburger";
import LetterX from "./LetterX";
import headerNavLinks from "@/data/headerNavLinks";
// names of header links are in
// separate file which allow them to be changed without affecting this component
/**
 *
 * @returns jsx to display the navigation bar
 */
const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className='flex items-center text-base leading-5 '>
      {/* show horizontal nav link medium or greater width */}
      <div className='hidden md:block'>
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className='p-1 font-medium sm:p-4 transition duration-150 ease-in-out'
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className='md:hidden'>
        <button
          type='button'
          className='ml-1 mr-1 h-8 w-8 rounded py-1'
          aria-controls='mobile-menu'
          aria-expanded='false'
          onClick={onToggleNav}
        >
          <Hamburger />
        </button>
        {/* when mobile menu is open move this div to x = 0
              when mobile menu is closed, move the element to the right by its own width,
              effectively pushing it out of the viewport horizontally.*/}

        <div
          className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-100 opacity-95 duration-300 ease-in-out dark:bg-black ${
            navShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className='flex justify-end'>
            <button
              type='button'
              className='mr-5 mt-14 h-8 w-8 rounded'
              aria-label='Toggle Menu'
              onClick={onToggleNav}
            >
              {/* X */}
              <LetterX />
            </button>
          </div>
          <nav className='fixed mt-8 h-full'>
            {headerNavLinks.map((link) => (
              <div key={link.title} className='px-12 py-4'>
                <Link
                  href={link.href}
                  className='text-2xl  tracking-widest text-grey-900 dark:text-grey-100'
                  onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <ThemeChanger />
    </div>
  );
};

export default Navbar;
