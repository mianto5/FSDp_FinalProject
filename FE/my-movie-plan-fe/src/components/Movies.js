import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Movie from "./Movie";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies/all")
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <h3>Available Movies</h3>
        <div className="text-center">
          <NavLink to={`add`}>ADD NEW PRODUCT</NavLink>
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-center">
          {movies.map((movie) => (
            <Movie key={movie.mID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
