import React, { useContext, useState } from "react";
import { MealContext } from "../_contexts/_contexts";
import BoxWithModal from "./BoxWithModal";
import Modal from "./Modal";

export default function Ingredients() {
  let { ingredients } = useContext(MealContext);
  const [showModal, setShowModal] = useState(false);
  const [ingredient, setIngredient] = useState(false);
  let handleShowModal = (ingr) => {
    setShowModal(true);
    setIngredient(ingr);
  };
  return (
    <>
      {ingredients &&
        ingredients.map((ingr, i) => (
          <BoxWithModal key={i} ingr={ingr} handleShowModal={handleShowModal} />
        ))}
      <Modal ingredient={ingredient} />
    </>
  );
}
