import React, { useEffect, useState } from "react";

const initialState = {
  uid: "",
  username: "",
  fname: "",
  lname: "",
  email: "",
};

export default function Profile() {
  const [user, setUser] = useState(initialState);
  let name = sessionStorage.getItem("name");
  let role = sessionStorage.getItem("role");

  useEffect(() => {
    fetch("http://localhost:8080/profile/" + name)
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  return (
    <div>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h3>Hello, {user.fname}!</h3>
          <p></p>
          <h5>Account Details:</h5>
          <p>
            <b>User ID: </b>{user.uid}
          </p>
          <p>
            <b>Username: </b>{user.username}
          </p>
          <p>
            <b>Name: </b>{user.fname} {user.lname}
          </p>
          <p>
            <b>Email: </b>{user.email}
          </p>
        </div>
      </div>
    </div>
  );
}
