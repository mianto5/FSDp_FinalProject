import React from "react";

export default function OrderSummary() {
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
