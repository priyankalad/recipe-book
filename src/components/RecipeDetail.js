import React, { useEffect, useState } from "react";
import axios from "axios";
import { RecipeDetailContext } from "../_contexts/_contexts";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function RecipeDetail(props) {
  let { id } = props.match.params;
  let { breadcrumbs } = props.location;
  const [breadCrumbs, setBreadCrumbs] = useState(breadcrumbs);

  let [recipeDetail, setRecipeDetail] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [measures, setMeasures] = useState(null);
  const [instructions, setInstructions] = useState(null);
  useEffect(() => {
    setBreadCrumbs(breadcrumbs.map((b) => (b.activeLink = false)));
    axios
      .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((res) => {
        let detail = res.data.meals[0];
        let ingredients = [];
        let measures = [];
        let instructions = [];
        for (let key in detail) {
          if (detail[key] != null && detail[key].trim() != "") {
            if (key === "strInstructions")
              instructions = detail[key].split(/\r\n\r\n|\r\n/);
            else if (key.indexOf("strIngredient") != -1)
              ingredients.push(detail[key]);
            else if (key.indexOf("strMeasure") != -1)
              measures.push(detail[key]);
          }
        }

        setBreadCrumbs([
          ...breadCrumbs,
          { name: detail.strMeal, activeLink: true },
        ]);
        setRecipeDetail(detail);
        setMeasures(measures);
        setIngredients(ingredients);
        setInstructions(instructions);
      })
      .catch((err) => console.error(err));
  }, []);
  return recipeDetail ? (
    <RecipeDetailContext.Provider value={recipeDetail}>
      <div className="container mt-3">
        <div className="row">
          <Breadcrumb links={breadCrumbs} />
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              style={{ height: "350px", borderRadius: "30px", width: "90%" }}
              src={recipeDetail.strMealThumb}
            />
          </div>
          <div className="col-md-6">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">{recipeDetail.strMeal}</h5>
                <p className="card-text">
                  Category: {recipeDetail.strCategory}
                </p>
                <p className="card-text">Tags: {recipeDetail.strTags}</p>
                <p className="card-text">Cuisine: {recipeDetail.strArea}</p>
                {recipeDetail.strYoutube ? (
                  <a
                    href={recipeDetail.strYoutube}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Watch the recipe
                  </a>
                ) : (
                  ""
                )}
                {recipeDetail.strSource ? (
                  <a
                    href={recipeDetail.strSource}
                    target="_blank"
                    className="btn btn-link d-block text-left pl-0"
                  >
                    Click here to see the source
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <h4> Ingredients</h4>
            <ol>
              {ingredients &&
                ingredients.map((ing, i) => (
                  <li key={i}>
                    {ing} - {measures[i]}
                  </li>
                ))}
            </ol>
          </div>
          <div className="col-md-8">
            <h4> Instructions</h4>
            <ol>
              {instructions &&
                instructions.map((inst, i) => <li key={i}>{inst}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </RecipeDetailContext.Provider>
  ) : null;
}
