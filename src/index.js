import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignInPage from 'pages/signin';
import SignUpPage from 'pages/signup';
import 'stylesheets/globals.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/todo" replace={true} />,
  },
  {
    path: "/todo",
    element: <div>TODO</div>,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
