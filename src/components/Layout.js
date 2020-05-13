import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import { SearchByContext } from "../_contexts/_contexts";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Layout(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Search />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="container">
            <div className="row">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
