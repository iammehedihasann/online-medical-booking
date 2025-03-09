import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-between bg-indigo-500 text-white p-8 rounded-lg max-w-6xl mx-auto">
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white  font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment With Trusted Doctor
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-2 text-white text-sm font-light">
          <img src={assets.group_profiles} alt="Group-Image" />
          <p className="text-lg">
            Simply browse through our extensive list of trusted doctors and
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          onClick={() => navigate("/Book-appoinment")}
          className="inline-flex items-center gap-2 w-fit px-3 py-2 bg-white text-black font-semibold text-sm rounded-full  hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-4 h-4" src={assets.arrow_icon} alt="arrow icon" />
        </a>

        {/* <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Book Appointment
        </button> */}
      </div>

      {/* Right Side (Image or Illustration) */}
      <div className="md:w-1/2 relative flex justify-center mt-16 md:mt-0 ">
        <img
          src={assets.header_img}
          alt="Doctor Illustration"
          className="w-full h-90 object-cover rounded"
        />
      </div>
    </div>
  );
};
export default Header;
