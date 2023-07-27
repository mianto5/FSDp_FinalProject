import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Movie({ movie }) {
  let navigate = useNavigate();
  let name = sessionStorage.getItem("name");
  let role = sessionStorage.getItem("role");
  let pageContent = "";

  const deleteMovie = () => {
    fetch("http://localhost:8080/movies/delete/" + movie.mid, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        navigate("/movies");
      }
    });
  };

  const changeStatus = () => {
    console.log(movie.movieenabled);
    movie.movieenabled = !movie.movieenabled;
    console.log(movie.movieenabled);
    fetch("http://localhost:8080/movies/status/" + movie.mid, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then((response) => {
      if (response.ok) {
        navigate("/movies");
      }
    });
  };

  if (movie !== undefined) {
    pageContent = (
      <div className="row mt-5">
        <div className="col-sm-6 col-md-6">
          <p>
            <img
              src={movie.imageurl}
              style={{ height: 300 }}
              className="img-fluid rounded mb-4 mb-lg-0"
            />
          </p>
        </div>
        <div className="col-sm-6 col-md-6">
          <h5>
            <b>{movie.moviename}</b>
          </h5>
          <p>({movie.genre}, {movie.language})</p>
          <p>
            {movie.moviedate}, {movie.movietime}
          </p>
          <p>${movie.ticketprice}</p>
          <NavLink
            className="btn btn-sm"
            style={{ backgroundColor: "#C20605", color: "white" }}
            to={"/movies/" + movie.mid}
          >
            More Info
          </NavLink>
          {role === "admin" && (
            <p>
              <br></br>
              <NavLink
                className="btn btn-sm"
                style={{ backgroundColor: "#C20605", color: "white" }}
                to={"/movies/edit/" + movie.mid}
              >
                Edit
              </NavLink>{" "}
              {movie.movieenabled && (
              <button
                type="submit"
                className="btn btn-sm"
                style={{ backgroundColor: "#C20605", color: "white" }}
                onClick={() => changeStatus()}
              >
                Disable
              </button>
              )}{" "}
              {!movie.movieenabled && (
              <button
                type="submit"
                className="btn btn-sm"
                style={{ backgroundColor: "#c205054a", color: "rgba(255, 255, 255, 0.484)" }}
                onClick={() => changeStatus()}
              >
                Enable
              </button>
              )}{" "}
              <button
                type="submit"
                className="btn btn-sm"
                style={{ backgroundColor: "#C20605", color: "white" }}
                onClick={() => deleteMovie()}
              >
                Delete
              </button>
            </p>
          )}
        </div>
      </div>
    );
  } else {
    pageContent = <div>No movies in the Database</div>;
  }

  return <div>{pageContent}</div>;
}
