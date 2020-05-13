import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "../_contexts/_contexts";
import AutoComplete from "./AutoComplete";

function Search(props) {
  let [searchValue, setSearchValue] = useState("");
  let [searchBy, setSearchBy] = useState("recipe_name");
  let context = useContext(MealContext);

  let [acData, setACData] = useState(null);
  let [acLabel, setACLabel] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (context && searchBy) {
      let { recipes, categories, cuisines, ingredients } = context;
      if (searchBy === "category") {
        setACData(categories);
        setACLabel("strCategory");
      } else if (searchBy === "cuisine") {
        setACData(cuisines);
        setACLabel("strArea");
      } else if (searchBy === "ingredient") {
        setACData(ingredients);
        setACLabel("strIngredient");
      } else {
        setACData(recipes);
        setACLabel("strMeal");
      }
      history.push(`/search/${searchBy}/${searchValue}`);
    }
  }, [context, searchBy, searchValue]);

  let handleChange = (evt) => {
    let { name, value } = evt.target;
    if (name === "selectSearchBy") {
      setSearchBy(value);
    } else setSearchValue(value);
  };

  let handleSearchValueChange = (value) => {
    setSearchValue(value);
  };

  return (
    <form className="form-inline mt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 col-lg-3">
            <div className="form-group ">
              <select
                name="selectSearchBy"
                id="selectSearchBy"
                className="form-control ml-2 w-100"
                id="selectSearchBy"
                onChange={handleChange}
              >
                <option value="reacipe_name">Recipe Name</option>
                <option value="category">Category</option>
                <option value="cuisine">Cuisine</option>
                <option value="ingredient">Ingredient</option>
              </select>
            </div>
          </div>
          <div className="col-8 col-lg-4">
            <AutoComplete
              data={acData}
              label={acLabel}
              handleSearchValueChange={handleSearchValueChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
