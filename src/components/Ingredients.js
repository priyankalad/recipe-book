import React, { useContext, useState } from "react";
import { MealContext, SearchByContext } from "../_contexts/_contexts";
import BoxWithDesc from "./BoxWithDesc";
import Modal from "./Modal";
import Breadcrumb from "./Breadcrumb";

export default function Ingredients() {
  let { ingredients } = useContext(MealContext);
  const [showModal, setShowModal] = useState(false);
  const [ingredient, setIngredient] = useState({});
  let breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Ingredients", path: "/ingredients", activeLink: true },
  ];
  let handleShowModal = (ingr) => {
    setShowModal(true);
    setIngredient(ingr);
  };
  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      {ingredients &&
        ingredients.map((ingr, i) => (
          <BoxWithDesc
            key={i}
            type="ingredient"
            object={ingr}
            handleShowModal={handleShowModal}
          />
        ))}
      {ingredient ? (
        <Modal
          title={ingredient.strIngredient}
          description={ingredient.strDescription}
          image={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
        />
      ) : (
        ""
      )}
    </>
  );
}
