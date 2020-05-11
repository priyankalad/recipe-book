import React, { useContext } from "react";
import { MealContext } from "../_contexts/_contexts";
import Breadcrumb from "./Breadcrumb";
import MealList from "./MealList";

export default function AllRecipes() {
  let { recipes } = useContext(MealContext);
  let breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Recipes", path: "/allrecipes", activeLink: true },
  ];
  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      {recipes && <MealList recipes={recipes} breadcrumbs={breadcrumbs} />}
    </>
  );
}
