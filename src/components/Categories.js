import React, { useContext } from "react";
import { MealContext } from "../_contexts/_contexts";
import BoxWithLink from "./BoxWithLink";

export default function Categories() {
  const { categories } = useContext(MealContext);
  return (
    categories &&
    categories.map((c, i) => <BoxWithLink key={i} name={c.strCategory} />)
  );
}
