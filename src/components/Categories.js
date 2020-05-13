import React, { useContext, useState } from "react";
import { MealContext, SearchByContext } from "../_contexts/_contexts";
import BoxWithDesc from "./BoxWithDesc";
import Modal from "./Modal";
import Breadcrumb from "./Breadcrumb";

export default function Categories() {
  const { categories } = useContext(MealContext);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(null);
  let breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Categories", path: "/categories", activeLink: true },
  ];
  let handleShowModal = (category) => {
    setShowModal(true);
    setCategory(category);
  };
  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      {categories &&
        categories.map((c, i) => (
          <BoxWithDesc
            key={i}
            type="category"
            object={c}
            handleShowModal={handleShowModal}
          />
        ))}
      {category ? (
        <Modal
          title={category.strCategory}
          description={category.strCategoryDescription}
          image={category.strCategoryThumb}
        />
      ) : (
        ""
      )}
    </>
  );
}
