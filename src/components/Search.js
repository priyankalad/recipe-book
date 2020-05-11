import React from "react";

export default function Search() {
  return (
    <form className="form-inline mt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 col-lg-3">
            <div className="form-group ">
              <select className="form-control ml-2 w-100" id="selectSearchBy">
                <option>Recipe Name</option>
                <option>Category</option>
                <option>Cuisine</option>
                <option>Ingredient</option>
              </select>
            </div>
          </div>
          <div className="col-8 col-lg-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control w-100"
                id="txtSearch"
                placeholder="Search here..."
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
