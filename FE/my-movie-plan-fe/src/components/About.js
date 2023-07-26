import React from "react";

export default function About() {
  let pageContent = "";
  pageContent = (
    /* Page Content*/
    <div className="container px-4 px-lg-5">
      {/* Heading Row*/}
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <div className="col-lg-7">
          <h1 className="font-weight-light">Welcome to My Movie Plan!</h1>
          <p>
            Short description of My Movie Plan website. Short description of My
            Movie Plan website. Short description of My Movie Plan website.
            Short description of My Movie Plan website.Short description of My
            Movie Plan website. Short description of My Movie Plan website.
            Short description of My Movie Plan website. Short description of My
            Movie Plan website. Short description of My Movie Plan website.
            Short description of My Movie Plan website. Short description of My
            Movie Plan website. Short description of My Movie Plan website.
            Short description of My Movie Plan website. Short description of My
            Movie Plan website. Short description of My Movie Plan website.
          </p>
        </div>
        <div className="col-lg-5">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="https://media.timeout.com/images/105771947/750/562/image.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
  return <div>{pageContent}</div>;
}
