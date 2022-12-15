import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

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

  const onHandleNavigate = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className='rounded-b-md bg-secondary-color'>
      <div className='flex h-[60px] items-center justify-between px-4 md:items-end md:px-7'>
        {/* Primary Nav */}
        <div className='hidden gap-4 md:flex'>
          {navbarItems.map((item, index) => (
            <NavLink
              className={`flex h-10 w-[115px] items-center justify-center rounded-t-md px-[10px] ${
                activeIndex === index
                  ? 'bg-primary-color text-white'
                  : 'hover:bg-sky-200'
              }`}
              to={item.to}
              onClick={() => onHandleNavigate(index)}
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

        <button
          className='md:hidden'
          onClick={() => setDrawerOpen((isOpen) => !isOpen)}
        >
          {drawerOpen ? (
            <Bars3Icon className='h-6 w-6 text-blue-500' />
          ) : (
            <XMarkIcon className='h-6 w-6 text-blue-500' />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={drawerOpen ? 'hidden' : ''}>
        {navbarItems.map((item, index) => (
          <NavLink
            className={`flex h-10 px-4 ${
              activeIndex === index
                ? 'bg-primary-color text-white'
                : 'hover:bg-sky-200'
            }`}
            to={item.to}
            onClick={() => onHandleNavigate(index)}
          >
            <button className='text-base font-semibold'>{item.name}</button>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
