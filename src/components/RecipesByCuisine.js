import React, { useEffect, useState } from "react";
import axios from "axios";
import MealList from "./MealList";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function RecipesByCuisine(props) {
  let { cuisine } = props.match.params;
  const [recipes, setRecipes] = useState(null);
  let breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Cuisines", path: "/cuisines" },
    {
      name: `${cuisine} Recipes`,
      path: `/recipes-by-cuisine/${cuisine}`,
      activeLink: true,
    },
  ];
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cuisine)
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
