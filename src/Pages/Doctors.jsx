import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { doctors } from "../assets/assets_frontend/assets";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p>Browse through the doctors specilist</p>
      <div></div>
      <div>
        <p>General physician</p>
        <p>Gynecolist</p>
        <p>General physician</p>
        <p>Dermatologist</p>
        <p>Pediatricians</p>
        <p>Gastroenterolist</p>
      </div>
      {/* Right side */}
      <div>
        {filterDoc.map((item, index) => (
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
    </div>
  );
};

export default Doctors;
