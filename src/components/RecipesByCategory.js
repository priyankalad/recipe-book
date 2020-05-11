import React, { useEffect, useState } from "react";
import axios from "axios";
import MealList from "./MealList";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function RecipesByCategory(props) {
  let category = props.match.params.category;
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
      .then((res) => {
        setLoading(false);
        setRecipes(res.data.meals);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);
  return loading ? (
    <div className="col text-center text-danger mt-5">
      <i class="fa fa-spinner fa-pulse fa-4x"></i>
    </div>
  ) : (
    <>
      <Breadcrumb links={breadcrumbs} />
      {recipes && <MealList recipes={recipes} breadcrumbs={breadcrumbs} />}
    </>
  );
}
