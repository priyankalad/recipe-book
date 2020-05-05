import React from "react";

export default function SliderContent(props) {
  let { itemsGroup, index } = props;
  console.log(itemsGroup);
  return (
    <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          {itemsGroup &&
            itemsGroup.map((item, i) =>
              item ? (
                <div className="col-sm-4 col-4">
                  <div className="card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h6 className="card-title mb-0">{item.name}</h6>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
}
