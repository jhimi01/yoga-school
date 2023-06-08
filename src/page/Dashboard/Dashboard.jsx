import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import {GiMeditation} from "react-icons/gi";
import { AiFillFolderAdd } from 'react-icons/ai';


import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
  return (
    <div className="flex flex-col md:flex-row h-screen mt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5">

        <div className="flex text-center justify-center flex-col">
        <img src={user?.photoURL} className="rounded-full  mx-auto" alt="" />
            <h1>{user.displayName}</h1>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <NavLink to="/dashboard/addclass" className={({ isActive}) =>   isActive ? "bg-black" : ""  }>
              <li>
                <a className="btn bg-base-300 rounded-none mb-4 w-full">
                 <AiFillFolderAdd className="text-2xl"/>   Add Class
                </a>
              </li>
            </NavLink>

            <Link to="/dashboard/myclass">
              <li>
                <a className="btn bg-base-300 rounded-none mb-4 w-full">
                 <GiMeditation className="text-2xl"/> My Class
                </a>
              </li>
            </Link>

            <Link to="/">
              <li>
                <a className="btn bg-base-300 rounded-none mb-4 w-full"> 
                <AiFillHome className="text-2xl"/> Home</a>
                
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
      <div className="divider md:divider-horizontal"></div> 
      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Content goes here */}
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
