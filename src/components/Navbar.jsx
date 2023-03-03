import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import closeIcon from "../assets/icons8-close-24.png";
import aarohanLogoIcon from "../assets/aarohan-logo.png";
import menuIcon from "../assets/icons8-menu-24.png";

const Navbar = () => {
  const [navDisplay, setNavDisplay] = useState(false);

  const DisplayNavigation = () => {
    if (navDisplay === true) {
      setNavDisplay(false);
    } else if (navDisplay === false) {
      setNavDisplay(true);
    }
  };

  return (
    <>
      {navDisplay ? (
        <>
        <nav className="bg-purple-800 text-white h-screen p-3">
        <div className="flex justify-between">
          <img
            className="h-5 mt-4 ml-2 bg-white"
            src={closeIcon}
            alt="closeIcon"
            onClick={DisplayNavigation}
          />
          <img
            className="mr-2"
            src={aarohanLogoIcon}
            alt="aarohanLogoIcon"
          />
        </div>
        <ul className="flex flex-col font-sans font-medium px-2">
          <li className="p-2 mt-9">
            <Link className="py-4 pl-2 pr-64 focus:bg-purple-900" to="/">
              Home
            </Link>
          </li>
          <li className="p-2 mt-9">
            <Link
              className="py-4 pl-2 pr-52 focus:bg-purple-900"
              to="/Competitions"
            >
              Competitions
            </Link>
          </li>
          <li className="p-2 mt-9">
            <Link
              className="py-4 pl-2 pr-60 focus:bg-purple-900"
              to="/Sponsors"
            >
              Sponsors
            </Link>
          </li>
          <li className="p-2 mt-9">
            <Link
              className="py-4 pl-2 pr-64 focus:bg-purple-900"
              to="/Events"
            >
              Events
            </Link>
          </li>
          <li className="p-2 mt-9">
            <Link
              className="py-4 pl-2 pr-64 focus:bg-purple-900"
              to="/Photos"
            >
              Photos
            </Link>
          </li>
          <li className="p-2 mt-9">
            <Link
              className="py-4 pl-2 pr-56 focus:bg-purple-900"
              to="/ContactUs"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
      ) : (
        <div className="bg-orange-custom flex justify-between">  
          <img
          className="h-5 mt-2 ml-2 bg-white"
          src={menuIcon}
          alt="menuIcon"
          onClick={DisplayNavigation}
          />
          <img
              className="mr-2 mt-1"
              src={aarohanLogoIcon}
              alt="aarohanLogoIcon"
            />
        </div>    
      )}

    <Outlet />
    </>
  );
};

export default Navbar;
