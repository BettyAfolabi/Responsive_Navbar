import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <i className="bx bx-md bxs-color"></i>
          <h2>Organizely</h2>
        </div>

        {/* Mobile navigation*/}
        <button className="menu" onClick={toggleNavbar}>
          <i className="bx bx-md bx-menu"></i>
        </button>
        <div className={`mobile-links ${isOpen ? "open" : ""}`}>
          <div className="cancel">
            <i className="bx bx-x bx-md" onClick={() => setIsOpen(false)}></i>
          </div>

          <Link to="/home" className="mobile-link">
            <i class="bx bxs-home"></i> Home
          </Link>
          <Link to="/about" className="mobile-link">
            <i class="bx bxs-search-alt-2"></i> About us
          </Link>
          <Link to="/contact" className="mobile-link">
            <i class="bx bx-phone"></i> Contact
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="links">
          <Link to="/home" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About us
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
        <Outlet />
      </nav>
    </>
  );
}

export default NavBar;
