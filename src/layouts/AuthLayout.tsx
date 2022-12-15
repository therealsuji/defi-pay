import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  );
};
