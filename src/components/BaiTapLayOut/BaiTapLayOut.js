// rcc
import React, { Component } from "react";
import BTCarousel from "./BTCarousel";
import BTHeader from "./BTHeader";
import BTLapTop from "./BTLapTop";
import BTProductList from "./BTProductList";
import BTPromotion from "./BTPromotion";

export default class BaiTapLayOut extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTCarousel />
        <BTProductList/>
        <BTLapTop />
        <BTPromotion />
      </div>
    );
  }
}
