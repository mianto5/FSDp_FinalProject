import React, { useEffect, useState } from "react";

const initialState = {
  name: "",
  password: "",
};

export default function AdminLogin() {
  const [admin, setAdmin] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
    fetch("http://localhost:8080/login/admin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(admin)    
    }).then((response) => {console.log(response)});
  };

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <h3>Log in as Admin to administrate the website</h3>
        <p></p>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Admin's Name:</label>{" "}
              <input
                type="text"
                className="form-control"
                name="name"
                value={admin.name}
                onChange={(e) => setAdmin({ ...admin, [e.target.name]: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>{" "}
              <input
                type="password"
                className="form-control"
                name="password"
                value={admin.password}
                onChange={(e) => setAdmin({ ...admin, [e.target.name]: e.target.value })}
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
        </div>
      </div>
    </div>
  );
}
