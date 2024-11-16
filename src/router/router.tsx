import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Page404 from '../pages/404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
