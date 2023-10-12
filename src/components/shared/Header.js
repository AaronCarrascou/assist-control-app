import React from "react";
import { Link } from 'react-router-dom';



function Header() {

  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid bg-primary">
          <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Contracts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/positions">Positions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employees">Employees</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }


  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            
            <span class="fs-4">Assist Control App</span>
        </a>

        <ul class="nav nav-pills">
            <li class="nav-item">
                <Link className="nav-link" to="/">Contracts</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/positions">Positions</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/employees">Employees</Link>
            </li>

        </ul>
    </header>

    
  )
}

export default Header;