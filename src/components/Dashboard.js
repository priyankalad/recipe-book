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
      setTopCuisines(copyObject(cuisines));
      setTopIngredients(copyObject(ingredients));
    }
  }, [context]);
  console.log(context);
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "lavenderblush" }}>
          <div className="col-12 p-3">
            <SliderHeader title="Categories" link="/categories" />
          </div>
          <div className="col-12 mb-3">
            <SliderContainer
              items={topCategories}
              sliderId="categorySlider"
              link="/recipes-by-category/"
            />
          </div>
        </div>

        <div className="row" style={{ backgroundColor: "lavenderblush" }}>
          <div className="col-12 p-3">
            <SliderHeader title="Latest Recipes" link="/categories" />
          </div>
          <div className="col-12 mb-3">
            <SliderContainer
              items={topRecipes}
              sliderId="recipesSlider"
              link="/detail/"
            />
          </div>
        </div>

        <div className="row" style={{ backgroundColor: "lavenderblush" }}>
          <div className="col-12 p-3">
            <SliderHeader title="Ingredients" link="/ingredients" />
          </div>
          <div className="col-12 mb-3">
            <SliderContainer
              items={topIngredients}
              sliderId="ingredientsSlider"
              link="/recipes-by-ingr/"
            />
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "lavenderblush" }}>
          <div className="col-12 p-3">
            <SliderHeader title="Cuisines" link="/cuisines" />
          </div>
          <div className="col-12 mb-3">
            <SliderContainer
              items={topCuisines}
              sliderId="cuisinesSlider"
              link="/recipes-by-cuisine/"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function copyObject(arrObj) {
  let topObjects = arrObj.slice(0, 10);
  console.log(topObjects);
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
        id: o.idMeal,
      };
    } else if (o.idIngredient) {
      return {
        name: o.strIngredient,
        image: `https://www.themealdb.com/images/ingredients/${o.strIngredient}.png`,
      };
    } else if (o.strArea) {
      return {
        name: o.strArea,
        image: "",
      };
    }
  });
  return result;
}
