import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#C20605"}}>
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#" style={{color: "white"}}>
          <b>My Movie Plan</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                <b>About</b>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
              <b>Movies</b>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
              <b>Contact</b>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}