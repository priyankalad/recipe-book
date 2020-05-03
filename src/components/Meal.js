import React from "react";
import { Link } from "react-router-dom";

export default function Meal(props) {
  let { meal, breadcrumbs } = props;
  let { strMeal, idMeal, strMealThumb, strCategory, strArea } = meal;
  return (
    <div className="card h-100">
      <Link
        to={{ pathname: `/detail/${idMeal}`, breadcrumbs: { breadcrumbs } }}
      >
        <img className="card-img-top" src={strMealThumb} alt="Card image cap" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{strMeal}</h5>
        {/* <p className="card-text">
          Category: <span className="font-weight-light">{strCategory}</span>
        </p>
        <p className="card-text">
          Cuisine: <span className="font-weight-light">{strArea}</span>
        </p> */}
      </div>
    </div>
  );
}
