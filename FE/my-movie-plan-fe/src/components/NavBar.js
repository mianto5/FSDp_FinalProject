import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  let name = sessionStorage.getItem("name");
  let role = sessionStorage.getItem("role");
  let navigate = useNavigate();

  console.log(name);
  console.log(role);

  const logOut = () => {
    fetch("http://localhost:8080/logout")
      .then((response) => {
      if(response.ok) {
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("role");
        navigate("/");
      }
    });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#C20605" }}
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
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
          <ul className="navbar-nav me-right mb-2 mb-lg-0 ms-lg-4">
            {(name===null || name==="") && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login/user">
                  <b>Log In</b>
                </NavLink>
              </li>
            )}
            {(name!==null && name!=="") && (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={() => logOut()}
                >
                  <b>Log Out</b>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
