import React from "react";
import { Link } from "react-router-dom";

export default function BoxWithLink(props) {
  let { name } = props;
  return (
    <div className="col-md-4 col-lg-3">
      <span className="card border border-danger m-1">
        <Link className="btn btn-link box-link" to="">
          {name}
        </Link>
      </span>
    </div>
  );
}
