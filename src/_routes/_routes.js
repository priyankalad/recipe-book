import React from "react";
import { Route } from "react-router-dom";
import RecipeDetail from "../components/RecipeDetail";
import Cuisines from "../components/Cuisines";
import Ingredients from "../components/Ingredients";
import Categories from "../components/Categories";
import MealList from "../components/MealList";
export default function Routes() {
  return (
    <>
      <Route path="/detail/:id" component={RecipeDetail}></Route>
      <Route path="/cuisines" component={Cuisines}></Route>
      <Route path="/categories" component={Categories}></Route>
      <Route path="/ingredients" component={Ingredients}></Route>
      <Route path="/" exact component={MealList}></Route>
    </>
  );
}
