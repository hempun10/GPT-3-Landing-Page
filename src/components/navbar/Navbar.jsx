import React from "react";
import { RiMenu3Line, RiCloseLin, RiLogoutBoxFill } from "react-icons/ri";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
