// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService';

// function Navbar() {
//     const isAuthenticated = ApiService.isAuthenticated();
//     const isAdmin = ApiService.isAdmin();
//     const isUser = ApiService.isUser();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         const isLogout = window.confirm('Are you sure you want to logout this user?');
//         if (isLogout) {
//             ApiService.logout();
//             navigate('/home');
//         }
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <NavLink to="/home">Swaraj Hotel</NavLink>
//             </div>
//             <ul className="navbar-ul">
//                 <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
//                 <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
//                 <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

//                 {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
//                 {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

//                 {!isAuthenticated &&<li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
//                 {!isAuthenticated &&<li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
//                 {isAuthenticated && <li onClick={handleLogout}>Logout</li>}

//   <button id="theme_change_button">
//           <span>{theme === "light" ? "Dark" : "Light"}</span> Mode
//         </button>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService';
// import { getTheme, applyTheme } from '../../theme'; // adjust path if needed

// function Navbar() {
//     const [theme, setThemeState] = useState(getTheme());

//     const isAuthenticated = ApiService.isAuthenticated();
//     const isAdmin = ApiService.isAdmin();
//     const isUser = ApiService.isUser();
//     const navigate = useNavigate();

//     useEffect(() => {
//         applyTheme(theme);
//     }, [theme]);

//     const handleLogout = () => {
//         const isLogout = window.confirm('Are you sure you want to logout this user?');
//         if (isLogout) {
//             ApiService.logout();
//             navigate('/home');
//         }
//     };

//     const handleThemeToggle = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         applyTheme(newTheme, theme);
//         setThemeState(newTheme);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <NavLink to="/home">Swaraj Hotel</NavLink>
//             </div>
//             <ul className="navbar-ul">
//                 <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
//                 <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
//                 <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

//                 {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
//                 {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

//                 {!isAuthenticated && <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
//                 {!isAuthenticated && <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
//                 {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
// {/*
//                 <li>
//                     <button id="theme_change_button" onClick={handleThemeToggle}>
//                         <span>{theme === 'light' ? 'Dark' : 'Light'}</span> Mode
//                     </button>
//                 </li> */}
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import { getTheme, applyTheme } from "../../theme";

function Navbar() {
  const [theme, setThemeState] = useState(getTheme());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthenticated = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();
  const isUser = ApiService.isUser();
  const navigate = useNavigate();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleLogout = () => {
    const isLogout = window.confirm(
      "Are you sure you want to logout this user?"
    );
    if (isLogout) {
      ApiService.logout();
      navigate("/home");
    }
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme, theme);
    setThemeState(newTheme);
  };

  
  

  return (
    <nav className="bg-[#e0f2f1] dark:bg-gray-800 shadow-md font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* 💻 Laptop/Desktop View */}
          <div className="hidden md:flex justify-between items-center">
            {/* Brand */}
            <div className="flex-shrink-0 flex items-center text-2xl font-bold text-teal-600  dark:text-white font-inter">
              <NavLink to="/home">Swaraj Hotel</NavLink>
            </div>

            {/* Nav Links */}
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-200">
              <li>
                <NavLink
                  to="/home"
//                    className="
//     text-xs font-medium text-red-600 hover:text-red-500     /* default (<720px) */
//     mdx:text-sm mdx:font-semibold mdx:text-blue-600 mdx:hover:text-blue-800  /* ≥720px */
//     lg:text-lg lg:font-semibold lg:text-teal-700 lg:hover:text-blue-500      /* ≥1024px */
//   "
//                 >
className="flex-shrink-0 flex items-center text-xl font-thin text-teal-600 dark:text-white font-inter">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rooms"
                  className="flex-shrink-0 flex items-center text-xl font-thin text-teal-600 dark:text-white font-inter"
                >
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink to="/find-booking" className="flex-shrink-0 flex items-center text-xl font-thin text-teal-600 dark:text-white font-inter">
                  Find my Booking
                </NavLink>
              </li>
              {isUser && (
                <li>
                  <NavLink to="/profile" className="flex-shrink-0 flex items-center text-xl font-thin text-teal-600 dark:text-white font-inter">
                    Profile
                  </NavLink>
                </li>
              )}
              {isAdmin && (
                <li>
                  <NavLink to="/admin" className="flex-shrink-0 flex items-center text-xl font-thin text-teal-600 dark:text-white font-inter">
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>

            {/* Auth Buttons */}
            <div className="flex gap-4 items-center">
              {!isAuthenticated && (
                <>
                  <NavLink
                    to="/login"
                    className="flex-shrink-0 flex items-center text-xl font-thin bg-purple-600 px-4 rounded-full py-1 text-white  dark:text-white font-inter"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="flex-shrink-0 flex items-center text-xl font-thin bg-purple-600 px-4 rounded-full py-1 text-white  dark:text-white font-inter"
                  >
                    Register
                  </NavLink>
                </>
              )}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="flex-shrink-0 flex items-center text-xl font-thin text-white bg-red-600 px-4 rounded-full py-1 dark:text-white font-inter"
                >
                  Logout
                </button>
              )}
              <button
                onClick={handleThemeToggle}
                className="flex-shrink-0 flex items-center text-xl font-thin bg-purple-600 px-4 rounded-full py-1 text-white  dark:text-white font-inter"
              >
                {theme === "light" ? "Dark" : "Light"} Mode
              </button>
            </div>
          </div>

          {/* 📱 Mobile View */}
          <div className="flex flex-col space-y-3 md:hidden">
            {/* Top Row: Brand + Auth */}
            <div className="flex justify-between items-center">
              {/* Brand */}
              <div className="text-2xl font-bold text-teal-600 mr-3 dark:text-white whitespace-nowrap">
                <NavLink to="/home">Swaraj Hotel</NavLink>
              </div>

              {/* Auth Buttons */}
              <div className="flex gap-2 items-center">
                {!isAuthenticated && (
                  <>
                    <NavLink
                      to="/login"
                      className="text-md text-white bg-green-700 px-3 py-1 rounded-full  dark:text-white hover:text-blue-500"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="text-md text-gray-700 dark:text-white hover:text-blue-500"
                    >
                      Register
                    </NavLink>
                  </>
                )}
                {isAuthenticated && (
                  <button
                    onClick={handleLogout}
                    className="text-md  text-white px-3 py-1 rounded-full bg-red-500 dark:text-white hover:text-red-500"
                  >
                    Logout
                  </button>
                )}
                <button
                  onClick={handleThemeToggle}
                  className="text-md text-gray-700 bg-teal-400 px-2 py-1 rounded-full dark:text-white "
                >
                  {theme === "light" ? "Dark" : "Light"} Mode
                </button>
              </div>
            </div>

            {/* Bottom Row: Nav Links */}
            <ul className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-200">
              <li>
                <NavLink
                  to="/home"
                  className=" text-md text-gray-700 dark:text-white hover:text-blue-500"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rooms"
                  className="text-md text-gray-700 dark:text-white hover:text-blue-500"
                >
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/find-booking"
                  className="text-md text-gray-700 dark:text-white hover:text-blue-500"
                >
                  Find my Booking
                </NavLink>
              </li>
              {isUser && (
                <li>
                  <NavLink
                    to="/profile"
                    className="text-md text-white bg-green-600 px-3 py-1 rounded-full dark:text-white hover:text-blue-500"
                  >
                    Profile
                  </NavLink>
                </li>
              )}
              {isAdmin && (
                <li>
                  <NavLink
                    to="/admin"
                    className="text-md text-white bg-green-600 px-3 py-1 rounded-full dark:text-white bg- hover:text-blue-500"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
