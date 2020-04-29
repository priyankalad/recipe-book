import React, { useContext } from "react";
import { MealContext } from "../_contexts/_contexts";
import Meal from "./Meal";

export default function MealList(props) {
  let { name } = props.match.params;
  let data = useContext(MealContext);
  let recipes = null;
  if (data) recipes = data.recipes;

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {recipes &&
          recipes.map((m, i) => (
            <div key={i} className="col-md-6 col-lg-3 mb-3">
              <Meal meal={m} />
            </div>
          ))}
      </div>
    </div>
  );
}
