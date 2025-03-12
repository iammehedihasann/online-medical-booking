// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../Context/AppContext";

// const Doctors = () => {
//   const navigate = useNavigate();
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const { doctors } = useContext(AppContext);

//   useEffect(() => {
//     if (speciality) {
//       setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   }, [doctors, speciality]);

//   return (
//     <div className="flex flex-col md:flex-row justify-between p-2 max-w-6xl mx-auto">
//       {/* Left Sidebar */}
//       <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg mt-4 ">
//         <h2 className="text-xl font-semibold text-black mb-4">
//           Browse through the doctors Specialties
//         </h2>
//         <div className="space-y-2">
//           {[
//             "General Physician",
//             "Gynecologist",
//             "Dermatologist",
//             "Pediatrician",
//             "Gastroenterologist",
//           ].map((specialty, index) => (
//             <p
//               key={index}
//               className="border border-gray-300 p-3 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition"
//             >
//               {specialty}
//             </p>
//           ))}
//         </div>
//       </div>

//       {/* Doctors List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 p-4">
//         {filterDoc.slice(0, 6).map((doctor, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/appoinment/${doctor._id}`)}
//             className="border border-blue-300 rounded-xl p-5 bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center"
//           >
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="w-24 h-24 rounded-full object-cover mb-3 bg-gray-300"
//             />
//             <p className="text-lg font-semibold">{doctor.name}</p>
//             <p className="text-sm text-gray-500">{doctor.speciality}</p>
//             <div className="flex items-center justify-center gap-2 mt-2">
//               <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//               <p className="text-sm text-green-600">Available</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Doctors;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Doctors = () => {
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null); // Store selected specialty
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (selectedSpeciality) {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === selectedSpeciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, selectedSpeciality]);

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 py-6">
      {/* Left Sidebar (Specialties) */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Browse Specialties
        </h2>
        <div className="space-y-2">
          {[
            "All",
            "General Physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatrician",
            "Gastroenterologist",
          ].map((specialty, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedSpeciality(specialty === "All" ? null : specialty)
              }
              className={`w-full text-left border border-gray-300 p-3 rounded-lg cursor-pointer transition ${
                selectedSpeciality === specialty
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 p-4">
        {filterDoc.slice(0, 15).map((doctor, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appoinment/${doctor._id}`)}
            className="border border-blue-300 rounded-xl p-5 bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full object-cover mb-3 bg-gray-300"
            />
            <p className="text-lg font-semibold">{doctor.name}</p>
            <p className="text-sm text-gray-500">{doctor.speciality}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="text-sm text-green-600">Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
