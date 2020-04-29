import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row mt-3">
        <div className="container-fluid">
          <div className="row"> {props.children}</div>
        </div>
      </div>
    </div>
  );
}
