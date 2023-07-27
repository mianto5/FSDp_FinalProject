import React, { useEffect, useState } from "react";

export default function EditMovie() {
    const [movie, setMovie] = useState();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(movie);
        // fetch("http://localhost:8080/movie/add", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(movie),
        // }).then((response) => {
        //   console.log(response);
        // });
      };

    return (
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 my-5">
            <h3>Edit Movie</h3>
            <p></p>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Name:
                  </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    name="moviename"
                    value={movie.moviename}
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Genre:
                  </label>{" "}
                  <select
                    className="form-control"
                    name="genre"
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="Animation">Animation</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Romance">Romance</option>
                    <option value="Thriller">Thriller</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Description:
                  </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={movie.description}
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Language:
                  </label>{" "}
                  <select
                    className="form-control"
                    name="language"
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="CZ">CZ</option>
                    <option value="DE">DE</option>
                    <option value="EN">EN</option>
                    <option value="IT">IT</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Image URL:
                  </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    name="imageurl"
                    value={movie.imageurl}
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Date:
                  </label>{" "}
                  <input
                    type="date"
                    className="form-control"
                    name="moviedate"
                    value={movie.moviedate}
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Time:
                  </label>{" "}
                  <select
                    className="form-control"
                    name="movietime"
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="14:00">14:00</option>
                    <option value="17:00">17:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#eb0216" }}>
                    Ticket Price:
                  </label>{" "}
                  <input
                    type="number"
                    className="form-control"
                    name="ticketprice"
                    value={movie.ticketprice}
                    onChange={(e) =>
                      setMovie({ ...movie, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#C20605", color: "white" }}
                  onClick={handleSubmit}
                >
                  Edit Movie
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}
