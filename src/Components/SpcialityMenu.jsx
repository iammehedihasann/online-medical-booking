import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="p-6">
      <h1 className="text-2xl font-bold text-center">Find by Speciality</h1>
      <p className="text-center text-gray-600 mb-6">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition hover:translate-y-[-10px] duration-600"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-20 h-20 object-cover mb-2"
            />
            <p className="text-lg font-semibold">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
