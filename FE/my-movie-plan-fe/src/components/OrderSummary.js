import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  pid: 0,
  purchasedate: "",
  createdby: "",
  totalprice: 0,
  items: [
    {
      iid: 0,
      mid: 0,
      amount: 0,
      ticketprice: 0,
    },
  ],
};

export default function OrderSummary() {
  let name = sessionStorage.getItem("name");
  let role = sessionStorage.getItem("role");
  let navigate = useNavigate();
  const [order, setOrder] = useState(initialState);
  const [items, setItems] = useState([]);
  const [movie, setMovie] = useState();
  let { pid } = useParams();
  pid = Number(pid);

  useEffect(() => {
    fetch("http://localhost:8080/summary/" + pid)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOrder(data);
      });
  }, [pid]);

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <div className="text-center">
          <h3>Thank You for Your Order!</h3>
          Your order has been created successfully.
        </div>
        <div className="col-12">
          <br></br>
          <p>
            <b>Order ID: order id</b>
          </p>
          {/* {lastOrder.items.map((product) => (
              <div key={product.id} className="row mb-3">
                <div className="col-5">
                  {product.name} ({product.amount})
                </div>
                <div className="col-3 text-right">
                  {product.qty} x ${Number(product.price).toFixed(2)}
                </div>
              </div>
            ))} */}
          <hr></hr>
          <div className="row">
            <div className="col-5">
              <strong>Total Price</strong>
            </div>
            <div className="col-3 text-right">
              <strong>total price</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
