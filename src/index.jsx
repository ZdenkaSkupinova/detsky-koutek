import React from 'react'; 
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import { CentersPage } from './Components/CentersPage/CentersPage';
import { CenterDetail } from './Components/CenterDetail/CenterDetail';
import { NavigationLinks } from './Components/NavigationLinks/NavigationLinks'; 


import './global.css';

const App = () => {
  return (
    <div className='container'>
      <header>
        <h1 className='h1-nadpis'>Dětský koutek</h1>
          <nav>
            <NavigationLinks />
          </nav>
        </header>
        <main>
        <Outlet />
      </main>
    </div>
  )
}


const routerWithChildren = createBrowserRouter([{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/pobocky',
        element: <CentersPage />,
      children: [
        {
          path: '/pobocky/:id',
          element: <CenterDetail />
        },
      ],
    },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
}])

createRoot(document.querySelector('#app')).render(
<RouterProvider router={routerWithChildren} />);
