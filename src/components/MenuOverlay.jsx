import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({link}) => {
    return (
        <ul className='flex flex-col w-32 px-1 py-2'>
            {
               link?.map((nav,index)=><li key={index}><NavLink href=
               {nav.href} tittle={nav.tittle}></NavLink></li>)
            }
        </ul>
    );
};

export default MenuOverlay;