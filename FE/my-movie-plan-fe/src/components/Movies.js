import React, { useEffect, useState } from 'react';
import Movie from "./Movie";

export default function Movies() {
  const[movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/movies/all")
    .then(res=>res.json())
    .then(result=>{setMovies(result);
    })
  },[])

  return (
    <div className="container px-4 px-lg-5">
        <p></p>
        <h3>Available Movies</h3>
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-center">
          {movies.map((movie) => (
            <Movie key={movie.mID} movie={movie} />
          ))}
        </div>
      </div>
  )
}
