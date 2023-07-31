import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  password: "",
};

export default function UserLogin() {
  const [user, setUser] = useState(initialState);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    fetch("http://localhost:8080/login/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.ok) {
        sessionStorage.setItem("name", user.name);
        sessionStorage.setItem("role", "user");
        console.log(sessionStorage.getItem("name"));
        console.log(sessionStorage.getItem("role"));
        navigate("/movies");
      }else{
        alert("Invalid credentials.");
      }
    });
  };

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <h3>Log in to purchase tickets</h3>
        <p></p>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">User's Name:</label>{" "}
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>{" "}
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#C20605", color: "white" }}
              onClick={handleSubmit}
            >
              Log In
            </button>
          </form>
          <div className="text-center">
            <p></p>
            <NavLink
              className="nav-link"
              style={{ textDecoration: "underline", color: "white" }}
              to={"/register"}
            >
              <h4>Are you new here? Register!</h4>
            </NavLink>
            <br></br>
            <NavLink
              className="nav-link"
              style={{ textDecoration: "underline", color: "#C20605" }}
              to={"/login/admin"}
            >
              Log in as Admin instead
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
