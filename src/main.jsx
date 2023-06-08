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
import Error from './page/Error';
import PrivateRoute from './page/route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path:'/', element: <Home />},
      {path:'/instructors', element: <Instructor />},
      {path:'/classes', element: <Clasess />},
      {path:'/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children:[
        {path:'/dashboard/addclass', element: <p>add class</p>},
        {path:'/dashboard/myclass', element: <p>my classes</p>}
      ]
    },
      {path:'/login', element: <Login />},
      {path:'/sing-up', element: <Register />},
    ]
  },
  {
    path:'*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
