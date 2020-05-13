import React, { useContext } from "react";
import { MealContext, SearchByContext } from "../_contexts/_contexts";
import BoxWithLink from "./BoxWithLink";
import Breadcrumb from "./Breadcrumb";

export default function Cuisines() {
  let { cuisines } = useContext(MealContext);

  let breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Cuisines", path: "/cuisines", activeLink: true },
  ];
  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      {cuisines &&
        cuisines.map((c, i) => <BoxWithLink key={i} name={c.strArea} />)}
    </>
  );
}
