"use client"
import React, { useState } from 'react';
import Link from "next/link"
import { signout } from '@/auth/auth';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-blue-500 border border-b-stone-400">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
       
        <div className="lg:hidden">
          <button className="Header-burger flex items-center text-blue-600 p-3" onClick={handleBurgerClick}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
          <li><Link className="text-sm text-gray-700 hover:text-gray-700" href="/admin">Dashboard</Link></li>
          
        </ul>
        <button  onClick={()=>{
                signout()
              }}  className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign Out</button>
      </nav>
      <div className={`Header-menu relative z-50 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="Header-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={handleCloseClick}></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm pt-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
           
            <button className="Header-close" onClick={handleCloseClick}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1"><Link className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="/admin">Dashboard</Link></li> 
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <button onClick={()=>{
                signout()
              }} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-xl" href="#">Sign Out</button>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2020</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
