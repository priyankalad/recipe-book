import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";
import MealList from "./MealList";

export default function SearchResult(props) {
  console.log(props);
  let { searchby, searchval } = props.match.params;
  let [searchedData, setSearchedData] = useState(null);
  let [loading, setLoading] = useState(false);
  let breadcrumbs = [
    { name: "Home", path: "/" },
    {
      name: `Search Result for: ${searchval}`,
      activeLink: true,
    },
  ];
  useEffect(() => {
    let url = "";
    switch (searchby) {
      case "category":
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchval}`;
        break;
      case "cuisine":
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchval}`;
        break;
      case "ingredient":
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchval}`;
        break;
      default:
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchval}`;
        break;
    }
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setSearchedData(res.data.meals);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, [searchval, searchby]);

  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      {searchedData && (
        <MealList recipes={searchedData} breadcrumbs={breadcrumbs} />
      )}
    </>
  );
}
