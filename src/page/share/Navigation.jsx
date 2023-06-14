import React, { useContext } from "react";
import ToggleMood from "../../component/ToggleMood";
import Button from "../../component/Button";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCart from "../../hook/useCart";

const Navigation = () => {
  const { user, logout, role, loader } = useContext(AuthContext);
  const [selectClass, refetch] = useCart() || []
  // console.log(role)

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((errors) => {
        console.log(errors);
      });
  };

  
console.log(selectClass)
if(selectClass?.errors){
  return 
}
console.log(selectClass)

  // const total = parseFloat(selectClass?.reduce((sum, item) => item?.price + sum, 0))



  // if (selectClass === undefined || selectClass.length === 0) {
  //   return null; // Render nothing until selectClass is loaded
  // }

  // const total = parseFloat(
  //   selectClass.reduce((sum, item) => item.price + sum, 0)
  // );

  const navoptions = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl bg-white"
              : ""
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
              ? "rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl bg-white"
              : ""
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
              ? "rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl bg-white"
              : ""
          }
        >
          Classes
        </NavLink>
      </li>

  {/*==================== student  dashboard============*/}
      {user && role === 'admin' ? (
        <li className="font-bold">
          <NavLink
            to="/dashboard/manageclass"
            className={({ isActive }) =>
              isActive
                ? "rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl bg-white"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : ''}

      {/*==================== student  dashboard============*/}
      {user && role === 'student' ? (
        <li className="font-bold">
          <NavLink
            to="/dashboard/my-selected-classes"
            className={({ isActive }) =>
              isActive
                ? "rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl bg-white"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : ''}


       {/*==================== instructor  dashboard============*/}
       {user && role === 'instructor' ? (
        <li className="font-bold">
          <NavLink
            to="/dashboard/myclass"
            className={({ isActive }) =>
              isActive
                ? "rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl bg-white"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : ''}

      {/* <li className='font-bold'><NavLink to='/dashboard' className={({ isActive}) =>   isActive ? "rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl bg-white"  : ""  }>Dashboard</NavLink></li> */}
    </>
  );

  // fixed top-0 left-0 right-0 flex justify-center

  return (
    <div className="navbar top-0 z-10 fixed border-b backdrop-filter backdrop-blur-lg">
      <div className="w-5/6 mx-auto">
        <div className="navbar-start flex">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "0",
                borderBottomLeftRadius: "20px",
              }}
              className="menu menu-sm dropdown-content mt-5 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navoptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-lg md:text-2xl font-bold">
            DoYoga
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navoptions}</ul>
        </div>
        <div className="navbar-end items-center flex gap-5">
          <div className="hidden lg:flex">
            <ToggleMood></ToggleMood>
          </div>

          {/* view cart */}
          {user && role === "student" ? (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {/* <span className="badge badge-sm indicator-item">{selectClass?.length || 0}</span> */}
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <div className="card-actions">
                      {user && role === 'student' ? <Link to='/dashboard/my-selected-classes'><button className="btn btn-primary btn-block">
                        View cart
                      </button></Link>:''}
                    </div>
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
                    <img src={user?.photoURL} alt="User Avatar" />
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
                  className=" p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-5 font-bold"
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
