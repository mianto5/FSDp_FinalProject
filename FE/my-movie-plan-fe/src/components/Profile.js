import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const initialUser = {
  uid: "",
  username: "",
  fname: "",
  lname: "",
  email: "",
};

export default function Profile() {
  const [user, setUser] = useState(initialUser);
  const [purchases, setPurchases] = useState([]);
  let name = sessionStorage.getItem("name");
  let role = sessionStorage.getItem("role");

  useEffect(() => {
    fetch("http://localhost:8080/profile/" + name)
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/purchases/" + name)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPurchases(data);
      });
  }, []);

  return (
    <div>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h3>Hello, {user.fname}!</h3>
          <p></p>
          <div>
            <p></p>
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <h5>Account Details:</h5>
                <p>
                  <b>User ID: </b>
                  {user.uid}
                </p>
                <p>
                  <b>Username: </b>
                  {user.username}
                </p>
                <p>
                  <b>Name: </b>
                  {user.fname} {user.lname}
                </p>
                <p>
                  <b>Email: </b>
                  {user.email}
                </p>
              </div>
              <div className="col-lg-9 col-md-12">
                <h5>Purchase History:</h5>
                <p></p>
                <div>
                  <table className="table table-striped table-dark">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchases.map((purchase) => (
                        <tr>
                          <th scope="row">{purchase.pid}</th>
                          <td>{purchase.purchasedate}</td>
                          <td>${purchase.totalprice}</td>
                          <td>
                            <NavLink
                              className="btn btn-sm"
                              style={{
                                backgroundColor: "#C20605",
                                color: "white",
                              }}
                              to={"/order/" + purchase.pid}
                            >
                              Detail
                            </NavLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
