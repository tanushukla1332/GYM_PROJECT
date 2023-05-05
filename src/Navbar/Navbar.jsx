import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../Logo/Logo1";
import Nav from "./Navbar.module.css";
import Button from "../Buttons/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Nav.main_container}>
      <nav className={Nav.container}>
        <Link to="/home" onClick={toggleMenu}>
          <Logo1 />
        </Link>
        <div
          className={`${Nav.menu_icon} ${isOpen ? Nav.menu_icon_active : ""}`}
          onClick={toggleMenu}
        >
        </div>
        <ul className={`${Nav.menu} ${isOpen ? Nav.menu_active : ""}`}>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={toggleMenu}>
              Pricing Section
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/client-stories" onClick={toggleMenu}>
              Client Stories
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}
