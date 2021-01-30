import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="container-fluid">
          <div className="row">
              <BTProductItem/>
              <BTProductItem/>
              <BTProductItem/>
              <BTProductItem/>
         </div>
         </div>
        </section>
      </div>
    );
  }
}
