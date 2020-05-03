import React from "react";
import { Route } from "react-router-dom";
import RecipeDetail from "../components/RecipeDetail";
import Cuisines from "../components/Cuisines";
import Ingredients from "../components/Ingredients";
import Categories from "../components/Categories";
import Dashboard from "../components/Dashboard";
import RecipesByCategory from "../components/RecipesByCategory";
import RecipesByIngredients from "../components/RecipesByIngredients";
import RecipesByCuisine from "../components/RecipesByCuisine";
export default function Routes() {
  return (
    <>
      <Route path="/detail/:id" component={RecipeDetail}></Route>
      <Route path="/cuisines" component={Cuisines}></Route>
      <Route path="/categories" component={Categories}></Route>
      <Route path="/ingredients" component={Ingredients}></Route>
      <Route
        path="/recipes-by-category/:category"
        component={RecipesByCategory}
      ></Route>
      <Route
        path="/recipes-by-ingr/:ingr"
        component={RecipesByIngredients}
      ></Route>
      <Route
        path="/recipes-by-cuisine/:cuisine"
        component={RecipesByCuisine}
      ></Route>

      <Route path="/" exact component={Dashboard}></Route>
    </>
  );
}
