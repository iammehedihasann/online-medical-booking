import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import Footer

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow ">{children}</div>
      <Footer /> {/* Footer added inside Layout */}
    </div>
  );
};

export default Layout;
