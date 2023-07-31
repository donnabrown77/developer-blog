"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Moon from "./Moon";
import Sun from "./Sun";

/**
 *
 * @returns jsx to switch based on user touching the moon icon
 */
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <button
          className='ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4  text-gray-900 hover:text-gray-400'
          aria-label='Toggle light and dark mode'
          type='button'
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </button>
      ) : (
        <button
          className='ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4  text-gray-50 hover:text-gray-400'
          aria-label='Toggle light and dark mode'
          onClick={() => setTheme("light")}
        >
          <Sun />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
