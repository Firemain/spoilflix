import React from 'react';
import NavLink from './navlink';

const OverlayMenu = ({links}) => {
    return (
        <ul className='flex flex-col py-4 items-center '>
            {links.map((link, index) => (
                <li key={index} className='py-2'>
                    <NavLink href={link.href} title={link.title}></NavLink>
                </li>))}
        </ul>
)};

export default OverlayMenu;