import React from "react";

export default function BoxWithModal(props) {
  let { name } = props;
  return (
    <div className="col-md-4 col-lg-3">
      <span className="card border border-danger m-1">
        <a className="btn btn-link box-link" href="">
          {name}
        </a>
      </span>
    </div>
  );
}
