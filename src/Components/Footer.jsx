// import React from "react";
// import { assets } from "../assets/assets_frontend/assets";

// const Footer = () => {
//   return (
//     <div className="flex  md:flex-row relative  justify-between  text-black p-4   max-w-6xl mx-auto border-b mb-8  border-b-gray-400">
//       {/* footer left section  */}
//       <div className="my-10">
//         <img src={assets.logo} />
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim
//           mollitia reiciendis modi? Dignissimos, qui!
//         </p>
//       </div>
//       {/* footer middle section  */}
//       <div>
//         <p>Company</p>
//         <ul>
//           <li>Home</li>
//           <li>About us</li>
//           <li>Contact us</li>
//           <li>Privacy policy</li>
//         </ul>
//       </div>
//       {/* footer right section */}
//       <div>
//         <p>GET IN TOUCH</p>
//         <ul>
//           <li>+88017.......</li>
//           <li>usename@gmail.com</li>
//         </ul>
//       </div>
//       <div>
//         {/* copyright text */}
//         <div className="flex flex-cols-1 absolute right-0 bottom-0 items-center ">
//           <hr />
//           <p>copyright 2025@ Priscripto. All Right Reversed</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 pb-6">
        {/* Footer Left Section */}
        <div>
          <img src={assets.logo} alt="Prescripto Logo" className="w-32 mb-3" />
          <p className="text-sm text-gray-600">
            Your trusted platform for hassle-free doctor appointments.
          </p>
        </div>

        {/* Footer Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Footer Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-1 text-gray-700">
            <li>📞 +88017.......</li>
            <li>📧 username@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600 mt-4">
        <p>© 2025 Prescripto. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
