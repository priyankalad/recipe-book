import React, { useContext } from "react";
import { MealContext } from "../_contexts/_contexts";
import BoxWithLink from "./BoxWithLink";

export default function Cuisines() {
  let { cuisines } = useContext(MealContext);
  console.log("In cuisine component");
  console.log(cuisines);
  return (
    cuisines && cuisines.map((c, i) => <BoxWithLink key={i} name={c.strArea} />)
  );
}
