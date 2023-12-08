import Link from 'next/link';
import React from 'react';

const NavLink = ({href,tittle}) => {
    return (
         <Link href={href} className='py-2 pl-3 pr-4 text-[#ADB7BE] 
         md:text-lg rounded md:p-0 hover:text-white'>
         {tittle}
        </Link>         
    );
};

export default NavLink;