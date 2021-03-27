import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "../_contexts/_contexts";
import AutoComplete from "./AutoComplete";

function Search(props) {
  let [searchValue, setSearchValue] = useState("");
  let [searchBy, setSearchBy] = useState("");
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

  let handleClick = (e) => {
    e.preventDefault();
    fetch("http://172.16.4.27:8085/api/merchant/0000000000001445", {
      method: "get",
      headers: new Headers({
        Authorization: "ApiKey tK4DEsoUHmOugopNIH25A3InudB79SoGNOGSASLoGVs",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form>
      <div className="d-flex">
        <div className="d-inline-flex ">
          <div className="form-group m-3 ">
            <select
              name="selectSearchBy"
              id="selectSearchBy"
              className="form-control ml-2 w-100"
              id="selectSearchBy"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="recipe_name">Recipe Name</option>
              <option value="category">Category</option>
              <option value="cuisine">Cuisine</option>
              <option value="ingredient">Ingredient</option>
            </select>
          </div>
          <AutoComplete
            data={acData}
            label={acLabel}
            handleSearchValueChange={handleSearchValueChange}
          />
        </div>
        <div className="mt-3 ml-5 ">
          <button className="btn btn-danger" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
