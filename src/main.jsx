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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path:'/', element: <Home />},
      {path:'/instructors', element: <Instructor />},
      {path:'/classes', element: <Clasess />},
      {path:'/dashboard', element: <Dashboard />},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
