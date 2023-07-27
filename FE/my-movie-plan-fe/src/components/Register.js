import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  fname: "",
  lname: "",
  email: "",
  userpassword: "",
};

export default function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(user),
    }).then((response) => {
      if(response.ok) {
        navigate("/login/user");
      }
    });
  };

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 my-5">
        <h3>Create an Account</h3>
        <p></p>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#eb0216" }}>
                Username:
              </label>{" "}
              <input
                type="text"
                className="form-control"
                name="username"
                value={user.username}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#eb0216" }}>
                First Name:
              </label>{" "}
              <input
                type="text"
                className="form-control"
                name="fname"
                value={user.fname}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#eb0216" }}>
                Last Name:
              </label>{" "}
              <input
                type="text"
                className="form-control"
                name="lname"
                value={user.lname}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#eb0216" }}>
                Email:
              </label>{" "}
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#eb0216" }}>
                Password:
              </label>{" "}
              <input
                type="password"
                className="form-control"
                name="userpassword"
                value={user.userpassword}
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
