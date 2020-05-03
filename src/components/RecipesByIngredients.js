import React, { useState, useEffect } from "react";
import axios from "axios";
import MealList from "./MealList";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function RecipesByIngredients(props) {
  let ingr = props.match.params.ingr;
  const [recipes, setRecipes] = useState(null);
  let breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Ingredients", path: "/ingredients" },
    {
      name: `${ingr} Recipes`,
      path: `/recipes-by-ingr/${ingr}`,
      activeLink: true,
    },
  ];
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingr)
      .then((res) => setRecipes(res.data.meals))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      {recipes && <MealList recipes={recipes} breadcrumbs={breadcrumbs} />}
    </>
  );
}
