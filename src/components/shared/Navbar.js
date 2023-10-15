import React from "react";
import { Link } from 'react-router-dom';



function Navbar() {

  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            
            <span class="fs-4">Assist Control App</span>
        </a>

        <ul class="nav nav-pills">
            <li class="nav-item">
                <Link className="nav-link" to="/">Employees</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/positions">Positions</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/contracts">Contracts</Link>
            </li>

        </ul>
    </header>

    
  )
}

export default Navbar;