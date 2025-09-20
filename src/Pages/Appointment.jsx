import React, { useState } from "react";
import image from "../assets/assets_frontend/appointment_img.png";
const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    reason: "",
  });
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appoinment booked succesfully! ");
    setForm({
      name: "",
      email: "",
      date: "",
      time: "",
      reason: "",
    });
  };
  return (
    <div className="flex items-center justify-center   min-h-screen bg-white">
      <div className=" max-w-md bg-gray-100 p-8 rounded-lg shadow-lg ">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Book an Appointment
        </h2>
        <form
          onSubmit={handleSubmit}
          className="  space-y-4 flex items-center justify-center flex-col"
        >
          <input
            className="w-full px-4 py-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="name"
            placeholder="Please write your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder="Please write your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="reason"
            placeholder="Reason for Appoinment"
            value={form.reason}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className=" hover hover:bg-green-400 hover:text-black opacity-2 transform duration-200 border border-green-500 shadow-lg bg-blue-500 text-black text-2xl p-2 rounded-md "
          >
            Book appoinment
          </button>
        </form>
      </div>
      <div className="ml-10  rounded">
        <img
          alt="appoinment image "
          src={image}
          className=" max-w-md p-8 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Appointment;
