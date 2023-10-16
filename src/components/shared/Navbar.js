import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="container d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
      <div className="d-flex align-items-center">
      <img src="/R1-logo.png" alt="R1 Logo" style={{ maxWidth: "50px", marginRight: "5px" }} />

        <Link to="/" className="text-dark text-decoration-none">
          <span className="fs-4">Assist Control App</span>
        </Link>
      </div>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">Employees</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/positions" className="nav-link" activeClassName="active">Positions</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contracts" className="nav-link" activeClassName="active">Contracts</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;