import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div>
      {/* footer left section  */}
      <div>
        <img src={assets.logo} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim
          mollitia reiciendis modi? Dignissimos, qui!
        </p>
      </div>
      {/* footer middle section  */}
      <div>
        <p>Company</p>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      {/* footer right section */}
      <div>
        <p>GET IN TOUCH</p>
        <ul>
          <li>+88017.......</li>
          <li>usename@gmail.com</li>
        </ul>
      </div>
      <div>
        {/* copyright text */}
        <div>
          <hr />
          <p>copyright 2025@ Priscripto. All Right Reversed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
