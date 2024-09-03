"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import NavLink from './navlink';
import OverlayMenu from './overlaymenu';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [previousUrl, setPreviousUrl] = useState(null); // Store the previous URL
  const router = useRouter();

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      if (!previousUrl) {
        setPreviousUrl(window.location.pathname); // Store the current URL before searching
      }
      router.push(`/search/${encodeURIComponent(query)}`);
    }
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    if (searchQuery.trim().length === 0 && previousUrl) {
      // If no query was entered, navigate back to the stored URL
      router.push(previousUrl);
      setPreviousUrl(null);
    }
  };

  const navlinks = [
    { href: '/', title: 'Movies' },
    { href: '/', title: 'Series' },
    // Add other links here
  ];

  return (
    <nav
      className="fixed w-full top-0 left-0 right-0 z-50 opacity-90"
      style={{ background: 'linear-gradient(to bottom, #1e1923, #141414)' }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        <div className='flex flex-row'>
          <div className="flex items-center px-5">
            {!isSearchOpen ? (
              <MagnifyingGlassIcon
                className="w-6 text-white cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              />
            ) : (
              <>
                <div className="flex-grow mx-4">
                  <input
                    type="text"
                    placeholder="Search movies..."
                    className="w-full max-w-md px-4 py-1 text-white bg-[#2c2a30] border border-[#f2e9e4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2e9e4]"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <XMarkIcon
                  className="w-6 text-white cursor-pointer"
                  onClick={handleCloseSearch}
                />
              </>
            )}
          </div>

          <div className="mobile-menu md:hidden block">
            {!isOpen ? (
              <button
                onClick={() => setIsOpen(true)}
                className="text-[#f2e9e4] flex items-center px-3 py-2 border rounded border-[#f2e9e4] hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#f2e9e4] flex items-center px-3 py-2 border rounded border-[#f2e9e4] hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:text-5xl text-2xl md:p-0 md:flex-row md:space-x-8 mt-0">
              {navlinks.map((navlink, index) => (
                <li key={index}>
                  <NavLink href={navlink.href} title={navlink.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <OverlayMenu links={navlinks} />
          </div>
        )}
      </div>
    </nav>
  );
}
