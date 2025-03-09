import React from "react";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex  md:flex-row  items-center justify-between  text-black p-4  max-w-6xl mx-auto border-b mb-8 border-b-gray-400">
      <img src={assets.logo} alt="Navbar_image" />
      <ul className="flex gap-5 font-style-none md:ml-3 ">
        <NavLink className="hover:border-b hover:border-b-gray-500 duration-300">
          <li className="py-1">
            {" "}
            <Link to="/">HOME</Link>
          </li>
        </NavLink>

        <NavLink className="hover:border-b hover:border-b-green-500 duration-300">
          <li className="py-1">
            {" "}
            <Link to="/doctor">DOCTOR</Link>{" "}
          </li>
        </NavLink>

        <NavLink className="hover:border-b hover:border-b-green-500 duration-300">
          <li className="py-1">
            {" "}
            <Link to="/about">ABOUT</Link>{" "}
          </li>
        </NavLink>

        <NavLink className="hover:border-b hover:border-b-green-500 duration-300">
          <li className="py-1">
            {" "}
            <Link to="/contact">CONTACT</Link>{" "}
          </li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative ">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="  absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appoinment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appoinment
                </p>
                <p
                  onClick={() => navigate(setToken(false))}
                  className="hover:text-black cursor-pointer"
                >
                  logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className=" bg-blue-400 px-8 py-3 rounded-full  font-light hidden md:block text-white text-[15px]"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
