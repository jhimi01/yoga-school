import React, { useContext } from "react";
import Button from "../../component/Button";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCart from "../../hook/useCart";
import { IoMdCart } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import yoga from "../../../public/yoga (1).png";

const Navigation = () => {
  const { user, logout, role, loader } = useContext(AuthContext);
  const [selectClass, refetch] = useCart() || [];
  const { pathname } = useLocation(); // Get current pathname


  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((errors) => {
        console.log(errors);
      });
  };

  console.log(selectClass);
  if (selectClass?.errors) {
    return;
  }
  console.log(selectClass);

  const navoptions = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl text-white border"
              : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? "rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl text-white border"
              : "text-white"
          }
        >
          Instructors
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? "rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl text-white border"
              : "text-white"
          }
        >
          Classes
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive
              ? "rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl text-white border"
              : "text-white"
          }
        >
          FAQ
        </NavLink>
      </li>

      {/*==================== student  dashboard============*/}
      {user && role === "admin" ? (
        <li className="font-bold">
          <NavLink
            to="/dashboard/manageclass"
            className={({ isActive }) =>
              isActive
                ? "rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl text-white border"
                : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}

      {/*==================== student  dashboard============*/}
      {user && role === "student" ? (
        <li className="font-bold">
          <NavLink
            to="/dashboard/my-selected-classes"
            className={({ isActive }) =>
              isActive
                ? "rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl text-white border"
                : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}

      {/*==================== instructor  dashboard============*/}
      {user && role === "instructor" ? (
        <li className="font-bold">
          <NavLink
            to="/dashboard/myclass"
            className={({ isActive }) =>
              isActive
                ? "rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl text-white border"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div
    className={`navbar absolute z-10 backdrop-filter ${
      pathname === "/" ? "" : "bg-gray-950"
    }`}
  >
      <div className="w-5/6 mx-auto">
        <div className="navbar-start flex">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <IoMenu className="text-2xl text-white" />
            </label>
            <ul
              tabIndex={0}
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "0",
                borderBottomLeftRadius: "20px",
              }}
              className="menu menu-sm dropdown-content mt-5 p-2 shadow bg-slate-500 rounded-box w-52 text-white"
            >
              {navoptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-lg md:text-2xl font-bold text-white">
            DoYoga
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navoptions}</ul>
        </div>
        <div className="navbar-end items-center flex gap-5">
          {/* view cart */}
          {user && role === "student" ? (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <IoMdCart className="text-2xl text-white" />
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content w-40 mt-2 mr-auto border-none outline-0"
                >
                    <div className="card-actions">
                      {user && role === "student" ? (
                        <Link to="/dashboard/my-selected-classes">
                          <Button>View cart</Button>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user?.photoURL || yoga}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  style={{
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "0",
                    borderBottomLeftRadius: "20px",
                  }}
                  className="p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-5 font-bold"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <div onClick={handleLogout}>
                    <li>
                      <a>Logout</a>
                    </li>
                  </div>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <Button>login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
