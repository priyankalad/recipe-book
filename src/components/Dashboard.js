import React, { useContext, useState, useEffect } from "react";
import { MealContext } from "../_contexts/_contexts";
import SliderContainer from "./SliderContainer";
import SliderHeader from "./SliderHeader";

export default function Dashboard() {
  const [topRecipes, setTopRecipes] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [topCuisines, setTopCuisines] = useState([]);
  const [topIngredients, setTopIngredients] = useState([]);
  let context = useContext(MealContext);
  useEffect(() => {
    if (context) {
      let { categories, cuisines, ingredients, recipes } = context;
      setTopRecipes(copyObject(recipes));
      setTopCategories(copyObject(categories));

      // setTopCuisines(cuisines.slice(0, 10));
      // setTopIngredients(ingredients.slice(0, 10));
    }
  }, [context]);

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "lavenderblush" }}>
          <div className="col-12 p-3">
            <SliderHeader title="Categories" link="/categories" />
          </div>
          <div className="col-12 mb-3">
            <SliderContainer items={topRecipes} />
          </div>
        </div>
      </div>
    </>
  );
}

function copyObject(arrObj) {
  let topObjects = arrObj.slice(0, 10);
  let result = topObjects.map((o) => {
    if (o.idCategory) {
      return {
        name: o.strCategory,
        image: o.strCategoryThumb,
      };
    } else if (o.idMeal) {
      return {
        name: o.strMeal,
        image: o.strMealThumb,
      };
    }
  });
  return result;
}
