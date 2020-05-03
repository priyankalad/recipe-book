import React from "react";
import { Link } from "react-router-dom";

export default function BoxWithDesc(props) {
  let { object, handleShowModal, type } = props;
  let name = type === "category" ? object.strCategory : object.strIngredient;
  let url = type === "category" ? "recipes-by-category" : "recipes-by-ingr";

  return (
    <div className="col-md-4 col-lg-3">
      <span className="card border border-danger m-1 d-block">
        <Link className="btn btn-link box-link" to={`${url}/${name}`}>
          {name}
        </Link>
        <button
          className="btn btn-link float-right"
          onClick={() => handleShowModal(object)}
          data-toggle="modal"
          data-target="#modalDiv"
        >
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </button>
      </span>
    </div>
  );
}
