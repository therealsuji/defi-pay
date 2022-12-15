import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
    <>
      <div className='flex h-[60px] items-end justify-between rounded-b-md bg-secondary-color px-7'>
        <div className='flex gap-4'>
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
        <button className='flex h-10 w-[115px] items-center justify-center rounded-t-md px-[10px] text-base font-semibold hover:bg-sky-200 hover:text-black active:bg-primary-color active:text-white'>
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
