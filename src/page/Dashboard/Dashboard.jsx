import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { GiMeditation } from "react-icons/gi";
import { AiFillFolderAdd } from "react-icons/ai";

import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user, role } = useContext(AuthContext);
  console.log(role);
  return (
    <div className="flex flex-col md:flex-row  mt-20 h-full">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5">
        <div className="flex text-center justify-center flex-col">
          <img
            src={user?.photoURL}
            className="rounded-full w-[80px] h-[80px] object-cover mx-auto"
            alt=""
          />
          <h1 className="text-xl font-semibold">{user.displayName}</h1>
          <p className="text-lg text-gray-400 uppercase">{role}</p>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {/* for instructor */}
            {role && role === "instructor" ? (
              <>
                <NavLink
                  to="/dashboard/addclass"
                  className={({ isActive }) => (isActive ? "bg-black" : "")}
                >
                  <li>
                    <a className="btn bg-base-300 rounded-none mb-4 w-full">
                      <AiFillFolderAdd className="text-2xl" /> Add Class
                    </a>
                  </li>
                </NavLink>

                <Link to="/dashboard/myclass">
                  <li>
                    <a className="btn bg-base-300 rounded-none mb-4 w-full">
                      <GiMeditation className="text-2xl" /> My Class
                    </a>
                  </li>
                </Link>

                <Link to="/">
                  <li>
                    <a className="btn bg-base-300 rounded-none mb-4 w-full">
                      <AiFillHome className="text-2xl" /> Home
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              ""
            )}

            {/* for admin */}
            {role && role === "admin" ? (
              <>
                <Link to="/dashboard/manageclass">
                  <li>
                    <a className="btn bg-base-300 rounded-none mb-4 w-full">
                      <GiMeditation className="text-2xl" /> Manage Classes
                    </a>
                  </li>
                </Link>

                <Link to="/dashboard/manageuser">
                  <li>
                    <a className="btn bg-base-300 rounded-none mb-4 w-full">
                      Manage Users
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              ""
            )}

            {/* for students */}
            {role && role === "student" ? (
              <>
                <Link to="/dashboard/my-selected-classes">
                  <li>
                    <a className="btn bg-base-300 rounded-none mb-4 w-full">
                      My Selected Classes
                    </a>
                  </li>
                </Link>

                <Link to="/dashboard/my-enrolled-classes">
                  <li>
                    <a className="btn bg-base-300 rounded-none mb-4 w-full">
                      My Enrolled Classes
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              ""
            )}
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
