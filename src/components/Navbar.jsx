"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { VscThreeBars } from "react-icons/vsc";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from './MenuOverlay';
const Navbar = () => {
    const [navbarOpen,setNavbarOpen]=useState(false)
    const navLink = [
        {
            href: '/',
            tittle:"Home"
        },
        {
            href: "/",
            tittle:"About"
        },
        {
            href: "/",
            tittle:"Projects"
        },
        {
            href: "/",
            tittle:"Contact"
        }
   ]

    return (
        <nav className=' fixed top-0 left-0 right-0 z-10 border border-[#33353F] bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap md:py-4 justify-between items-center mx-auto px-10 py-6'>
                <Link className='text-3xl text-white font-semibold' href={'#'}>PORTFOLIO</Link>
                <div className='mobile-menu md:hidden'>
                    {
                        navbarOpen ? (<button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><FaXmark/></button>)
                        : (<button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'><VscThreeBars/></button>)
                    } 
                </div>
                <div className='menu hidden md:block' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                       {
                        navLink?.map((nav,index)=><li key={index}><NavLink href={nav.href} tittle={nav.tittle}></NavLink></li>)
                        }
                    </ul>
                </div>
            </div>
                {
                    navbarOpen?<MenuOverlay link={navLink}></MenuOverlay>:<></>
                }
        </nav>
    );
};

export default Navbar;