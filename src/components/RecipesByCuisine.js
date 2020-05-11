import React, { useEffect, useState } from "react";
import axios from "axios";
import MealList from "./MealList";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function RecipesByCuisine(props) {
  let { cuisine } = props.match.params;
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cuisine)
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
