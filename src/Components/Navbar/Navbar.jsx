import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  useEffect(() => {
    let nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
      console.log(window.scrollY);

      if (window.scrollY > 106) {
        nav.classList.replace("py-4", "py-2");
        nav.style.transition = " all 1s";
      } else {
        nav.classList.replace("py-2", "py-4");
        nav.style.transition = " all 1s";
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg py-4 fixed-top ">
        <div className="container-md">
          <Link className="navbar-brand text-white fs-2 fw-bolder" to="">
            Start Framework
          </Link>
          <button
            className="navbar-toggler text-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link rounded-1  d-inline-block "
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-md-3 rounded-1 d-inline-block"
                  to="prot"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link rounded-1 d-inline-block"
                  to="contact"
                >
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
