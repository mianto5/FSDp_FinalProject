import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartitems, add, remove, removeAll } from "../redux/cartslice";

const initialState = {
  items: [],
  totalPrice: "",
};

export default function Cart() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let cart = useSelector(cartitems);

  const totalPrice = cart.reduce(
    (a, b) => a + b.amount * Number(b.ticketprice),
    0
  );

  const removeItem = (item) => {
    dispatch(remove(item));
  };

  const addItem = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        {cart.length === 0 && (
          <div>
            <h3>Your Cart Is Empty</h3>
            <p>Please, check available movies first.</p>
          </div>
        )}
        {cart.length !== 0 && (
          <div>
            <h3>Your Cart</h3>
            <br></br>
          </div>
        )}
        {cart.map((movie) => (
          <div key={movie.mid} className="row mb-3 text-center">
            <div className="col-6">
              <b>{movie.moviename}</b> ({movie.language}, {movie.moviedate}{" "}
              {movie.movietime})
            </div>
            <div className="col-3">
              <button
                onClick={() => removeItem(movie)}
                className="remove text-center btn"
                style={{
                  backgroundColor: "#C20605",
                  color: "white",
                  width: "50px",
                }}
              >
                <b>-</b>
              </button>{" "}
              <button
                onClick={() => addItem(movie)}
                className="add text-center btn width:100px"
                style={{
                  backgroundColor: "#C20605",
                  color: "white",
                  width: "50px",
                }}
              >
                <b>+</b>
              </button>
            </div>
            <div className="col-3 text-right">
              {movie.amount} x ${movie.ticketprice}
            </div>
          </div>
        ))}
        {cart.length !== 0 && (
          <div>
            <hr></hr>
            <div className="row text-center">
              <div className="col-6"></div>
              <div className="col-3">
                <strong>Total Price</strong>
              </div>
              <div className="col-3 text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>
            <div className="text-center">
              {/* <button onClick={handleConfirm} className="btn btn-dark">
                Confirm Your Order
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
