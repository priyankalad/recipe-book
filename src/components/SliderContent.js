import React from "react";
import { Link } from "react-router-dom";

export default function SliderContent(props) {
  let { itemsGroup, index, link } = props;
  return (
    <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          {itemsGroup &&
            itemsGroup.map((item, i) =>
              item ? (
                item.image ? (
                  <div key={i} className="col-sm-3 col-3 p-0 m-0">
                    <Link
                      to={`${link}${item.id ? item.id : item.name}`}
                      className="slider-link"
                    >
                      <div className="card">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="card-img-top"
                        />
                        <div className="card-body d-none d-sm-block">
                          <p className="card-title mb-0 text-danger ">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div key={i} className="col-sm-3 col-3 p-0">
                    <Link to={`${link}${item.name}`} className="slider-link">
                      <div className="card">
                        <h5 className="p-5  text-center text-danger d-none d-sm-block">
                          {item.name}
                        </h5>
                        <small className="p-3  text-center text-danger d-block d-sm-none">
                          {item.name}
                        </small>
                      </div>
                    </Link>
                  </div>
                )
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
}
