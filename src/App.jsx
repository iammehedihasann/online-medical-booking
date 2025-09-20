import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";
import MyAppointment from "./Pages/MyAppointment";
import MyProfile from "./Pages/MyProfile";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className=" mx-4 sm:mx-[10]">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/doctor/:specialityData" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myappointment" element={<MyAppointment />} />
          <Route path="/appoinment/:docId" element={<Appointment />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
