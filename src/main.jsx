import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './page/HomePage/Home.jsx';
import Instructor from './page/Instructor/Instructor';
import Clasess from './page/Clasess/Clasess';
import Dashboard from './page/Dashboard/Dashboard';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path:'/', element: <Home />},
      {path:'/instructors', element: <Instructor />},
      {path:'/classes', element: <Clasess />},
      {path:'/dashboard', element: <Dashboard />},
      {path:'/login', element: <Login />},
      {path:'/sing-up', element: <Register />},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
