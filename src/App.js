import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { MealContext } from "./_contexts/_contexts";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./_routes/_routes";
import Layout from "./components/Layout";
function App() {
  let [data, setData] = useState(null);
  useEffect(() => {
    let categories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    let cuisines = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    let ingredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
    let allrecipes = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    let requestCategories = axios.get(categories);
    let requestCuisines = axios.get(cuisines);
    let requestIngredients = axios.get(ingredients);
    let requestAllRecipes = axios.get(allrecipes);
    axios
      .all([
        requestCategories,
        requestCuisines,
        requestIngredients,
        requestAllRecipes,
      ])
      .then(
        axios.spread((...responses) => {
          let data = {
            categories: responses[0].data.meals,
            cuisines: responses[1].data.meals,
            ingredients: responses[2].data.meals,
            recipes: responses[3].data.meals,
          };
          setData(data);
        })
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <MealContext.Provider value={data}>
              <Routes />
            </MealContext.Provider>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
