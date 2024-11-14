import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Faq from '../pages/Faq';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Faq',
    element: <Faq />
  }
]);
