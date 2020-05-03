import React, { useContext } from "react";
import { MealContext } from "../_contexts/_contexts";
import Meal from "./Meal";

export default function MealList(props) {
  let { recipes, breadcrumbs } = props;
  return (
    recipes &&
    recipes.map((m, i) => (
      <div key={i} className="col-md-6 col-lg-3 mb-3">
        <Meal breadcrumbs={breadcrumbs} meal={m} />
      </div>
    ))
  );
}
