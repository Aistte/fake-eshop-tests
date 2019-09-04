import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { ROUTES } from "../../../constants";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <p>Oh no! Page not found!</p>
      <Link to={ROUTES.defaultPage}>Go Home</Link>
    </div>
  );
}

export default PageNotFound;
