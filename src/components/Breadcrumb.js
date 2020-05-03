import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb(props) {
  let { links } = props;
  console.log(props);
  return (
    <div className="col-12">
      <ol className="breadcrumb bg-white">
        {links &&
          links.map((l, i) => {
            return (
              <li
                key={i}
                className={`breadcrumb-item ${l.activeLink ? "active" : ""}`}
              >
                {l.activeLink ? l.name : <Link to={`${l.path}`}>{l.name}</Link>}
              </li>
            );
          })}
      </ol>
    </div>
  );
}
