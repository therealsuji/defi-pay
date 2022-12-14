import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import styles from './index.module.scss';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const navbarItems = [
    {
      name: 'Dashboard',
      to: '/dashboard',
    },
    {
      name: 'Orders',
      to: '/orders',
    },
    {
      name: 'Products',
      to: '/products',
    },
    {
      name: 'Manage QR',
      to: '/manage-qr',
    },
    {
      name: 'Profile',
      to: '/profile',
    },
  ];

  return (
    <nav className='rounded-b-md bg-secondary-color'>
      <div className='flex h-[60px] items-center justify-between px-4 md:items-end md:px-7'>
        {/* Primary Nav */}
        <div className='hidden gap-4 md:flex'>
          {navbarItems.map((item) => (
            <NavLink
              className={`flex h-10 w-[115px] items-center justify-center rounded-t-md px-[10px] ${styles.link}`}
              to={item.to}
            >
              <button className='text-base font-semibold'>{item.name}</button>
            </NavLink>
          ))}
        </div>
        {/* Secondary Nav */}
        <div className='hidden md:block'>
          <button className='flex h-10 w-[115px] items-center justify-center rounded-t-md px-[10px] text-base font-semibold hover:bg-sky-200 hover:text-black active:bg-primary-color active:text-white'>
            Logout
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className='md:hidden'
          onClick={() => setDrawerOpen((isOpen) => !isOpen)}
        >
          {drawerOpen ? (
            <XMarkIcon className='h-6 w-6 text-primary-color' />
          ) : (
            <Bars3Icon className='h-6 w-6 text-primary-color' />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {drawerOpen ? (
        <div className={'md:hidden'}>
          {navbarItems.map((item, index) => (
            <NavLink className={`flex h-10 px-4 ${styles.link}`} to={item.to}>
              <button className='text-base font-semibold'>{item.name}</button>
            </NavLink>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
