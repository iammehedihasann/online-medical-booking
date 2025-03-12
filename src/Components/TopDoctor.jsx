import React, { useContext } from "react";
// import { doctors } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import { AppContext } from "../Context/AppContext";

const TopDoctor = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className=" flex flex-col items-center justify-between  text-black p-2  max-w-6xl mx-auto mb-8 mt-10">
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-center pb-4">
        Top Doctors To Book
      </h1>
      <p className="text-center text-gray-600 max-w-lg pb-4">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctor Cards */}
      <div className="grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 md:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appoinment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]  bg-white p-4  shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mb-3 bg-gray-300"
            />
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <p className="text-sm text-green-600">Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          navigate("/doctors");
        }}
        className="mt-6 px-6 py-2 bg-blue-400 text-white font-semibold rounded-full hover:bg-blue-700 transition"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctor;
