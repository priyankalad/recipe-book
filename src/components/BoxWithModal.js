import React from "react";

export default function BoxWithModal(props) {
  let { ingr, handleShowModal } = props;
  return (
    <div className="col-md-4 col-lg-3">
      <span className="card border border-danger m-1">
        <button
          className="btn btn-link box-link"
          onClick={() => handleShowModal(ingr)}
          data-toggle="modal"
          data-target="#ingrModal"
        >
          {ingr.strIngredient}
        </button>
      </span>
    </div>
  );
}
