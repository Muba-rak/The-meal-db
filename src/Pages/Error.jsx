import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container-md about-section text-center">
      <h1>oops, Page not found</h1>
      <Link to="/">
        <button className="btn btn-success">Go back to Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
