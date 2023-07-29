import React from "react";

export default function Contact() {
  let pageContent = "";
  pageContent = (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <h3>Contact</h3>
        <p></p>
        <p><b>Adress:</b> XXX, Pune, India</p>
        <p></p>
        <p></p>
        <h5>For More Info</h5>
        <p><b>E-mail:</b> info@mmp.com</p>
        <p><b>Phone Number:</b> 555 555 555</p>
      </div>
    </div>
  );
  return <div>{pageContent}</div>;
}
