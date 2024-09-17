import React, { useState } from "react";
import logo from "../../assets/mut_logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className="Header">
        <div className="HeaderImage">
          <img src={logo} alt="" />
        </div>
        <div className={`HeaderRight ${menuOpen ? "active" : ""}`}>
          <ul className="HeaderLinks">
            <div id="menu-close" className="close" onClick={handleMenuClose}>
              <IoCloseCircleOutline />
            </div>
            <li>
              <Link className="links" to="/">
                Tech News
              </Link>
            </li>
            <li>
              <Link className="links" to="/">
                Events
              </Link>
            </li>
            <li>
              <Link className="links" to="/">
                Performance
              </Link>
            </li>
            <li>
              <Link className="links" to="/">
                Resources
              </Link>
            </li>
          </ul>
          <div className="HeaderSign">
            <button>Sign up</button>
            <button>Sign in</button>
          </div>
        </div>
        <div id="menu-btn" className="hamburger" onClick={handleMenuOpen}>
            <GiHamburgerMenu />
          </div>
      </div>
    </>
  );
}

export default Header;
