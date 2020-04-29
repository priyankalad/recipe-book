import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-danger navbar-expand-lg ">
      <Link className="navbar-brand" to="/">
        Recipe Book
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Menu />
    </nav>
  );
}
