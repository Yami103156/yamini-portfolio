import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
 
   { name: "Achievements", id: "achievements" },
    { name: "Projects", id: "projects" }, // ✅ Added Projects
];

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center px-4 py-2">
        <span className="navbar-brand">Yamini</span>
        <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
          {navItems.map(({ name, id }) => (
            <li className="nav-item" key={id}>
              <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
