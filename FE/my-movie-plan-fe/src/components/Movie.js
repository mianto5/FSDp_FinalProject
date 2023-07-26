import React from 'react';
import { NavLink } from "react-router-dom";

export default function Movie({ movie }) {
  
    let pageContent = "";
    if (movie !== undefined) {
      pageContent = (
        <div className="row mt-5">
          <div className="col-sm-6 col-md-6">
            <p>
              <img
                src={movie.imageurl}
                style={{height: 300}}
                className="img-fluid rounded mb-4 mb-lg-0"
              />
            </p>
          </div>
          <div className="col-sm-6 col-md-6">
            <h5><b>{movie.moviename}</b></h5>
            <p>({movie.genre})</p>
            <p>{movie.moviedate}, {movie.movietime}</p>
            <p>${movie.ticketprice}</p>
            <NavLink
              className="btn btn-sm"
              style={{backgroundColor: "#C20605", color: "white"}}
              to={"/movies/" + movie.mid}
            >
              More Info
            </NavLink>
          </div>
        </div>
      );
    } else {
      pageContent = <div>No movies in the Database</div>;
    }
  
    return <div>{pageContent}</div>;
}
