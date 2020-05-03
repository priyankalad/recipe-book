import React from "react";

export default function Modal(props) {
  let { title, description, image } = props;
  let descriptions = description && description.split(/\r\n\r\n|\r\n/);

  return (
    <div
      className="modal fade"
      id="modalDiv"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalDivLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header m-auto">
            <h5 className="modal-title m-auto p-3" id="modalDivLabel">
              {title}
            </h5>
            <img src={image} height="100" width="100" className="rounded" />
          </div>
          <div className="modal-body">
            {descriptions
              ? descriptions.map((d) => <p>{d}</p>)
              : "No description found for " + title}
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
