import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import NftPage from './pages/NftPage';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/nftpage',
        element: <NftPage />,
    },
    {
        path: '/marketplace',
        element: <Marketplace />,
    },
    {
        path: '/rankings',
        element: <Rankings />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
