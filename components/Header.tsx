"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  // useEffect only runs on the client, so now we can safely show the UI
  const [hasMounted, setHasMounted] = useState(false);

  // When mounted on client, now we can show the UI
  // Avoiding hydration mismatch
  // https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pt-0'>
      <header className='flex items-center justify-between py-10'>
        <div>
          <Link href='#'>
            <div className='flex lg:px-0'>
              {/* logo */}
              <Link href='/'>
                <div
                  id='logo'
                  className='flex-shrink-0 flex items-center bg-primary  h-16 w-25 border-radius'
                >
                  <span
                    id='logo-text'
                    className='text-blue-800  dark:text-blue-400 font-weight:bold text-3xl'
                  >
                    Logo
                  </span>
                </div>
              </Link>
            </div>
          </Link>
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
