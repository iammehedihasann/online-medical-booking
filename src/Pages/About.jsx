import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          About Our Clinic
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Welcome to our Doctor Appointment System! We are dedicated to
          providing you with a seamless and efficient way to book your medical
          appointments online.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To make healthcare accessible and convenient for everyone by
            connecting patients with qualified doctors and specialists at the
            click of a button.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/appointment"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Doctor Appointment. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default About;
