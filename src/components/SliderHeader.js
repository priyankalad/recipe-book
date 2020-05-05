import React from "react";
import { Link } from "react-router-dom";

export default function SliderHeader(props) {
  let { title, link } = props;
  return (
    <>
      <span className=" text-danger h5">{title}</span>
      <Link className="small ml-3" style={{ color: "darkRed" }} to={link}>
        View More
      </Link>
    </>
  );
}
