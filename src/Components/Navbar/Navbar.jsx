import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg py-4 ">
        <div className="container-md">
          <Link className="navbar-brand text-white fs-2 fw-bolder" to="">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link rounded-1  d-inline-block " aria-current="page" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-md-3 rounded-1 d-inline-block" to="prot">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link rounded-1 d-inline-block" to="contact">
                  Contact
                </NavLink>
              </li>
      
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
