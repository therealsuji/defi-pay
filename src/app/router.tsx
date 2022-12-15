import Dashboard from 'features/Dashboard';
import Login from 'features/Login';
import ManageQR from 'features/ManageQR';
import NotFound from 'features/NotFound';
import Orders from 'features/Orders';
import Products from 'features/Products';
import Profile from 'features/Profile';
import { AuthLayout } from 'layouts/AuthLayout';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <DefaultLayout />,
        children: [
          { path: '/login', element: <Login /> },
          { path: '', element: <Navigate to='/login' /> },
        ],
      },

      {
        path: '/',
        element: <AuthLayout />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/orders', element: <Orders /> },
          { path: '/products', element: <Products /> },
          { path: '/manage-qr', element: <ManageQR /> },
          { path: '/profile', element: <Profile /> },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to='/404' /> },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

export default router;
