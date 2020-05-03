import React, { useEffect, useState } from "react";
import axios from "axios";
import MealList from "./MealList";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function RecipesByCategory(props) {
  let category = props.match.params.category;
  const [recipes, setRecipes] = useState(null);
  let breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Categories", path: "/categories" },
    {
      name: `${category} Recipes`,
      path: `/recipes-by-category/${category}`,
      activeLink: true,
    },
  ];
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
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
