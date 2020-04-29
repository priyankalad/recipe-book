import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav nav-tabs ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cuisines">
            Cuisine
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ingredients">
            Ingredients
          </Link>
        </li>
      </ul>
    </div>
  );
}
