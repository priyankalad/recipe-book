import React from "react";
import SliderContent from "./SliderContent";

export default function SliderContainer(props) {
  let { items } = props;
  let i = 0;
  let itemsGroup = [];
  while (i < items.length) {
    let obj = [];
    for (let j = 0; j < 3; j++) {
      obj.push(items[i]);
      i++;
    }
    itemsGroup.push(obj);
  }
  console.log(itemsGroup);
  return (
    <div
      id="categorySlider"
      className="carousel slide w-100"
      data-ride="carousel"
    >
      <div className="carousel-inner" style={{ width: "90%", margin: "auto" }}>
        {itemsGroup &&
          itemsGroup.map((item, i) => (
            <SliderContent itemsGroup={item} index={i} key={i} />
          ))}
      </div>
      <a
        class="carousel-control-prev"
        href="#categorySlider"
        role="button"
        data-slide="prev"
        style={{ backgroundColor: "lightpink", width: "5%" }}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#categorySlider"
        role="button"
        data-slide="next"
        style={{ backgroundColor: "lightpink", width: "5%" }}
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
