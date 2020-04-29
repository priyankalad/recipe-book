import React from "react";

const MealContext = React.createContext(null);
const CuisineContext = React.createContext(null);
const IngredientContext = React.createContext(null);
const CategoryContext = React.createContext(null);
const RecipeDetailContext = React.createContext(null);

export {
  MealContext,
  CuisineContext,
  IngredientContext,
  CategoryContext,
  RecipeDetailContext,
};
