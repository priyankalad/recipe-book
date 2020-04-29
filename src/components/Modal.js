import React from "react";

export default function Modal(props) {
  let { ingredient } = props;
  return (
    <div
      className="modal fade"
      id="ingrModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="ingrModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ingrModalLabel">
              {ingredient.strIngredient}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {ingredient.strDescription
              ? ingredient.strDescription
              : "No description found for " + ingredient.strIngredient}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
