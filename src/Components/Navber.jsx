import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { useContext } from "react";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import { FaUserCircle } from "react-icons/fa";

const Navber = () => {
  const { user, logOut } = useContext(Authinfo);
console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Join Us</NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="max-w-6xl mx-auto navbar ">
      <div className="navbar-start">
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
            className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-60" src={logoImg} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to='/profile' className="w-10 mr-5 rounded-full">
              {
                user.photoURL? <img className="w-full rounded-full" src={user.photoURL} alt="" />:<FaUserCircle className="text-4xl text-white"></FaUserCircle>
              }
              </Link>
            <button
              onClick={handleLogout}
              className="font-bold bg-gradient-to-r from-red-500 to-cyan-400 py-2 rounded-md px-4"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            className="font-bold bg-gradient-to-r from-red-500 to-cyan-400 py-2 rounded-md px-4"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
