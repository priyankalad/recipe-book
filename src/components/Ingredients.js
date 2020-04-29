import React, { useContext } from "react";
import { MealContext } from "../_contexts/_contexts";
import BoxWithModal from "./BoxWithModal";

export default function Ingredients() {
  let { ingredients } = useContext(MealContext);
  console.log("In cuisine component");
  console.log(ingredients);
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {ingredients &&
          ingredients.map((c, i) => (
            <BoxWithModal key={i} name={c.strIngredient} />
          ))}
      </div>
    </div>
  );
}
