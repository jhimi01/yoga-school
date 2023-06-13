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
import ManageUser from './component/ManageUser/ManageUser';
import AddClasses from './component/AddClasses/AddClasses';
import InstructorClasses from './page/Instructor/InstructorClasses';
import MySelectedClass from './component/MySelectedClass/MySelectedClass';
import AdminManageClasses from './component/AdminManageClasses/AdminManageClasses';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import EnrollClass from './component/EnrollClass/EnrollClass';
import Payment from './page/Payment/Payment';
import { singleitembyid } from './api/selectedClass';
import PaymentHistory from './page/Payment/PaymentHistory';

const queryClient = new QueryClient()

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
        {path:'addclass', element: <AddClasses></AddClasses>},
        {path:'myclass', element: <InstructorClasses></InstructorClasses>},
        {path:'manageclass', element: <AdminManageClasses></AdminManageClasses>}, //
        {path:'manageuser', element: <ManageUser></ManageUser>},
        {path:'my-selected-classes', element: <MySelectedClass></MySelectedClass>},
        {path:'my-enrolled-classes', element: <PaymentHistory></PaymentHistory>},
          {
            path: 'my-enrolled-classes/:id',
            element: <Payment></Payment>,
            loader: ({params})=>singleitembyid(params.id)
          },
          
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
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

      </AuthProvider>
  </React.StrictMode>,
)
