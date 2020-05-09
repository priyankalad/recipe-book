import React from "react";
import SliderContent from "./SliderContent";

export default function SliderContainer(props) {
  let { items, sliderId, link } = props;
  let i = 0;
  let itemsGroup = [];
  while (i < items.length) {
    let obj = [];
    for (let j = 0; j < 4; j++) {
      obj.push(items[i]);
      i++;
    }
    itemsGroup.push(obj);
  }
  return (
    <div
      id={`${sliderId}`}
      className="carousel slide w-100"
      data-ride="carousel"
    >
      <div className="carousel-inner" style={{ width: "90%", margin: "auto" }}>
        {itemsGroup &&
          itemsGroup.map((item, i) => (
            <SliderContent itemsGroup={item} index={i} key={i} link={link} />
          ))}
      </div>
      <a
        className="carousel-control-prev"
        href={`#${sliderId}`}
        role="button"
        data-slide="prev"
        style={{ backgroundColor: "lightpink", width: "5%" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={`#${sliderId}`}
        role="button"
        data-slide="next"
        style={{ backgroundColor: "lightpink", width: "5%" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
